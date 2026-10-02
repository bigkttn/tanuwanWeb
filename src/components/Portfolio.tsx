"use client";
import { portfolioData } from "../data/portfolio";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import BeforeAfter from "./ui/BeforeAfter";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioData[0] | null>(null);

  const filteredData = filter === "all" 
    ? portfolioData 
    : portfolioData.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
            ผลงานของเรา
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            ส่วนหนึ่งของผลงานติดตั้งและซ่อมแซมที่เราภูมิใจส่งมอบ
          </p>

          <div className="flex justify-center gap-2">
            <button 
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === "all" ? "bg-[#ffd21f] text-black" : "bg-white/10 hover:bg-white/20"}`}
            >
              ทั้งหมด
            </button>
            <button 
              onClick={() => setFilter("electrical")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === "electrical" ? "bg-[#ffd21f] text-black" : "bg-white/10 hover:bg-white/20"}`}
            >
              ระบบไฟฟ้า
            </button>
            <button 
              onClick={() => setFilter("cctv")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === "cctv" ? "bg-[#ffd21f] text-black" : "bg-white/10 hover:bg-white/20"}`}
            >
              กล้องวงจรปิด
            </button>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredData.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-lg truncate">{item.title}</h3>
                  <div className="text-sm text-muted mt-1 flex justify-between">
                    <span>{item.area}</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#0b1220]/90 backdrop-blur z-10">
                <h3 className="font-heading font-bold text-xl">{selectedItem.title}</h3>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                {selectedItem.id === "p1" ? (
                  <BeforeAfter 
                    beforeImage="/images/portfolio/p1-before.webp" 
                    afterImage="/images/portfolio/p1-after.webp" 
                  />
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full rounded-xl aspect-video object-cover bg-white/5"
                  />
                )}
                
                <div className="mt-6 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h4 className="font-bold text-[#ffd21f] mb-2">รายละเอียดงาน</h4>
                    <p className="text-muted text-sm leading-relaxed">{selectedItem.details}</p>
                  </div>
                  <div className="md:w-1/3 space-y-3 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-muted">สถานที่</span>
                      <span className="font-medium text-right">{selectedItem.area}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-muted">ระยะเวลา</span>
                      <span className="font-medium text-right">{selectedItem.duration}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-muted">ประเภทงาน</span>
                      <span className="font-medium text-right">
                        {selectedItem.type === "electrical" ? "ระบบไฟฟ้า" : "กล้องวงจรปิด"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
