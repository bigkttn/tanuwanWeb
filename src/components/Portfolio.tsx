"use client";
import { portfolioData } from "../data/portfolio";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = (typeof portfolioData)[number];
type Selection = { item: Item; index: number };

function Lightbox({ item, startIndex, onClose }: { item: Item; startIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);
  const swipeX = useRef<number | null>(null);
  const swiped = useRef(false);
  const total = item.images.length;

  const go = useCallback((step: number) => setIndex((i) => (i + step + total) % total), [total]);

  // คีย์บอร์ด ← → Esc และล็อกการเลื่อนหน้าหลักระหว่างเปิด
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, go]);

  const onPointerDown = (e: React.PointerEvent) => (swipeX.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (swipeX.current === null) return;
    const dx = e.clientX - swipeX.current;
    swiped.current = Math.abs(dx) > 50;
    if (swiped.current) go(dx < 0 ? 1 : -1);
    swipeX.current = null;
  };
  // ปัดจบบนพื้นที่ว่างไม่ให้ถือเป็นการกดปิด
  const onBackdropClick = (e: React.MouseEvent) => {
    if (!swiped.current && e.target === e.currentTarget) onClose();
    swiped.current = false;
  };

  const arrow =
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md text-white flex flex-col animate-[fade-in_200ms_ease-out] motion-reduce:animate-none"
    >
      {/* แถบบน: ชื่องาน ลำดับรูป ปุ่มปิด */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 h-16 shrink-0">
        <div className="min-w-0">
          <h3 className="font-bold truncate">{item.title}</h3>
          <p className="text-sm text-white/60" aria-live="polite">
            รูปที่ {index + 1} จาก {total}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="ปิด"
          autoFocus
          className="w-11 h-11 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={22} />
        </button>
      </div>

      {/* รูปหลัก: กดพื้นที่ว่างเพื่อปิด, ปัดซ้าย/ขวาบนมือถือ */}
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 touch-pan-y"
        onClick={onBackdropClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <img
          key={item.images[index]}
          src={item.images[index]}
          alt={`${item.title} รูปที่ ${index + 1}`}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none animate-[fade-in_250ms_ease-out] motion-reduce:animate-none"
          draggable={false}
        />
        {total > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="รูปก่อนหน้า" className={`${arrow} left-2 sm:left-6`}>
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => go(1)} aria-label="รูปถัดไป" className={`${arrow} right-2 sm:right-6`}>
              <ChevronRight size={28} />
            </button>
          </>
        )}
      </div>

      {/* รูปย่อด้านล่าง */}
      {total > 1 && (
        <div className="shrink-0 flex justify-center gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {item.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`ดูรูปที่ ${i + 1}`}
              aria-current={i === index}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all ${
                i === index ? "ring-2 ring-brand opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<Selection | null>(null);
  const single = portfolioData.length === 1;
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">ผลงาน</h2>
          <p className="text-muted">งานติดตั้งจริงจากหน้างาน กดที่รูปเพื่อดูเพิ่ม</p>
        </div>

        {single ? (
          // มีผลงานชิ้นเดียว: แสดงแบบใหญ่ รูปข้างคำอธิบาย
          portfolioData.map((item) => (
            <div key={item.id} className="card overflow-hidden md:grid md:grid-cols-2 max-w-4xl mx-auto">
              <button
                onClick={() => setSelected({ item, index: 0 })}
                className="group relative block w-full overflow-hidden"
                aria-label={`ดูรูปทั้งหมด: ${item.title}`}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width={1108}
                  height={1477}
                  loading="lazy"
                  className="w-full h-full aspect-[4/3] md:aspect-auto object-cover object-[center_60%] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-sm">
                  ดูรูปทั้งหมด {item.images.length} รูป
                </span>
              </button>
              <div className="p-5 md:p-8 flex flex-col">
                <h3 className="font-bold text-xl md:text-2xl mb-2">{item.title}</h3>
                <p className="text-muted mb-6">{item.details}</p>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {item.images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setSelected({ item, index: i })}
                      className="rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                      aria-label={`ดูรูปที่ ${i + 1}`}
                    >
                      <img src={src} alt="" width={1108} height={1477} loading="lazy" className="w-full aspect-square object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected({ item, index: 0 })}
                className="card overflow-hidden text-left hover:shadow-md transition-shadow"
              >
                <img src={item.images[0]} alt={item.title} width={1108} height={1477} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted">{item.images.length} รูป</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && <Lightbox item={selected.item} startIndex={selected.index} onClose={close} />}
    </section>
  );
}
