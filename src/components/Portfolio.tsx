"use client";
import { portfolioData } from "../data/portfolio";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type Item = (typeof portfolioData)[number];

function Lightbox({ item, onClose }: { item: Item; onClose: () => void }) {
  // ปิดด้วย Esc และล็อกการเลื่อนหน้าหลักระหว่างเปิด
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-black/80 overflow-y-auto overscroll-contain"
      onClick={onClose}
    >
      <div
        className="max-w-3xl mx-auto bg-white min-h-full sm:min-h-0 sm:my-8 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-line p-3 pl-5 flex justify-between items-center gap-4 sm:rounded-t-2xl">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <button
            onClick={onClose}
            aria-label="ปิด"
            autoFocus
            className="w-11 h-11 shrink-0 rounded-full bg-surface flex items-center justify-center"
          >
            <X size={22} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-muted">{item.details}</p>
          {item.images.map((src) => (
            <img key={src} src={src} alt={item.title} width={1108} height={1477} loading="lazy" className="w-full h-auto rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<Item | null>(null);
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
              <button onClick={() => setSelected(item)} className="block w-full" aria-label={`ดูรูปทั้งหมด: ${item.title}`}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width={1108}
                  height={1477}
                  loading="lazy"
                  className="w-full h-full aspect-[4/3] md:aspect-auto object-cover object-[center_60%]"
                />
              </button>
              <div className="p-5 md:p-8 flex flex-col">
                <h3 className="font-bold text-xl md:text-2xl mb-2">{item.title}</h3>
                <p className="text-muted mb-6">{item.details}</p>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {item.images.map((src) => (
                    <button key={src} onClick={() => setSelected(item)} className="rounded-lg overflow-hidden" aria-label="ดูรูปขนาดใหญ่">
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
                onClick={() => setSelected(item)}
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

      {selected && <Lightbox item={selected} onClose={close} />}
    </section>
  );
}
