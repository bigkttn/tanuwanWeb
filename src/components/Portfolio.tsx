"use client";
import { portfolioData } from "../data/portfolio";
import { useState } from "react";
import { X } from "lucide-react";

type Item = (typeof portfolioData)[number];

export default function Portfolio() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">ผลงาน</h2>
          <p className="text-muted">งานติดตั้งจริงจากหน้างาน กดที่รูปเพื่อดูเพิ่ม</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="card overflow-hidden text-left hover:shadow-md transition-shadow"
            >
              <img src={item.images[0]} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted">{item.images.length} รูป</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 overflow-y-auto" onClick={() => setSelected(null)}>
          <div
            className="max-w-3xl mx-auto bg-white min-h-full sm:min-h-0 sm:my-8 sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-line p-3 pl-5 flex justify-between items-center gap-4 sm:rounded-t-2xl">
              <h3 className="font-bold text-lg">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                aria-label="ปิด"
                className="w-11 h-11 shrink-0 rounded-full bg-surface flex items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-muted">{selected.details}</p>
              {selected.images.map((src) => (
                <img key={src} src={src} alt={selected.title} loading="lazy" className="w-full rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
