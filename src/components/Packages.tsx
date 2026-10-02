"use client";
import { packagesData } from "../data/packages";
import { siteData } from "../data/site";
import { CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
            แพ็กเกจติดตั้งกล้องวงจรปิด
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            อุปกรณ์ครบชุดพร้อมติดตั้ง ประเมินหน้างานฟรี ไม่มีบวกเพิ่ม
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packagesData.map((pkg, i) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card relative flex flex-col h-full ${pkg.popular ? "border-[#ffd21f] scale-105 shadow-[0_0_30px_rgba(255,210,31,0.15)] z-10" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffd21f] text-black font-bold px-4 py-1 rounded-full text-sm">
                  ยอดนิยม
                </div>
              )}
              
              <div className="p-8 border-b border-white/10 text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted mb-6">{pkg.note}</p>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-muted mb-1">บาท</span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-2 text-xs text-muted mb-6 bg-white/5 p-3 rounded-lg">
                  <Shield size={16} className="text-[#ffd21f] shrink-0" />
                  <span>รับประกันงานติดตั้ง 1 ปี อุปกรณ์ตามศูนย์</span>
                </div>

                <a 
                  href={`https://line.me/R/ti/p/${siteData.lineId}?text=${encodeURIComponent('สนใจขอใบเสนอราคา: ' + pkg.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center py-3 rounded-xl font-bold transition-all ${pkg.popular ? "bg-[#ffd21f] text-black hover:scale-105" : "bg-white/10 hover:bg-white/20"}`}
                >
                  ขอใบเสนอราคา
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
