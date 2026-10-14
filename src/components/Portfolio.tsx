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
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center transition-colors";

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
        className="flex-1 min-h-0 flex items-center justify-center px-2 sm:px-6 touch-pan-y"
        onClick={onBackdropClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* เวที: มือถือเต็มพื้นที่, จอใหญ่เป็นกรอบแนวนอน 16:9 */}
        <div
          className="relative w-full h-full md:h-auto md:w-[min(100%,calc((100dvh_-_13rem)*16/9))] md:aspect-video rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl"
        >
          {/* พื้นหลังเบลอจากรูปเดียวกัน ให้รูปแนวตั้งดูเต็มกรอบแนวนอน */}
          <img
            key={`bg-${item.images[index]}`}
            src={item.images[index]}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50 animate-[fade-in_400ms_ease-out] motion-reduce:animate-none"
            draggable={false}
          />
          <img
            key={item.images[index]}
            src={item.images[index]}
            alt={`${item.title} รูปที่ ${index + 1}`}
            className="relative w-full h-full object-contain select-none animate-[fade-in_300ms_ease-out] motion-reduce:animate-none"
            draggable={false}
          />
          {total > 1 && (
            <>
              <button onClick={() => go(-1)} aria-label="รูปก่อนหน้า" className={`${arrow} left-3 sm:left-5`}>
                <ChevronLeft size={28} />
              </button>
              <button onClick={() => go(1)} aria-label="รูปถัดไป" className={`${arrow} right-3 sm:right-5`}>
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
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

const SLIDE_MS = 4500;

// การ์ดผลงานเด่น: รูปแนวนอน เปลี่ยนรูปเองทุก 4.5 วิ หยุดเมื่อเอาเมาส์ชี้
function FeaturedWork({ item, onOpen }: { item: Item; onOpen: (index: number) => void }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = item.images.length;

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % total);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <div
      className="card overflow-hidden md:grid md:grid-cols-[3fr_2fr] max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        onClick={() => onOpen(active)}
        className="group relative block w-full aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden bg-neutral-900"
        aria-label={`ดูรูปทั้งหมด: ${item.title}`}
      >
        {item.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === active ? item.title : ""}
            width={1108}
            height={1477}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-[center_60%] transition-opacity duration-1000 motion-reduce:transition-none ${
              i === active ? "opacity-100 animate-[kenburns_6s_ease-out_forwards] motion-reduce:animate-none" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 flex gap-1.5" aria-hidden>
          {item.images.map((src, i) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
            />
          ))}
        </div>
        <span className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur text-white text-sm transition-colors group-hover:bg-black/70">
          ดูรูปทั้งหมด {total} รูป
        </span>
      </button>

      <div className="p-5 md:p-8 flex flex-col">
        <h3 className="font-bold text-xl md:text-2xl mb-2">{item.title}</h3>
        <p className="text-muted mb-6">{item.details}</p>
        <div className="grid grid-cols-3 gap-2 mt-auto">
          {item.images.map((src, i) => (
            <button
              key={src}
              onClick={() => onOpen(i)}
              onMouseEnter={() => setActive(i)}
              aria-label={`ดูรูปที่ ${i + 1}`}
              className={`rounded-lg overflow-hidden transition-all ${
                i === active ? "ring-2 ring-brand ring-offset-2" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" width={1108} height={1477} loading="lazy" className="w-full aspect-square object-cover" />
            </button>
          ))}
        </div>
      </div>
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
            <FeaturedWork key={item.id} item={item} onOpen={(index) => setSelected({ item, index })} />
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
