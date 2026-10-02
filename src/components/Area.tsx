"use client";
import { siteData } from "../data/site";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Area() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <MapPin size={40} className="text-[#ffd21f]" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-heading font-bold mb-3">พื้นที่ให้บริการ</h2>
            <p className="text-xl text-white/90 mb-4">{siteData.area}</p>
            <p className="text-sm text-muted">
              สามารถส่งรูปหน้างานหรือโลเคชั่นเพื่อให้ประเมินเบื้องต้นได้ฟรี หากอยู่นอกพื้นที่สามารถสอบถามเพิ่มเติมได้ครับ
            </p>
          </div>
          
          <a 
            href={siteData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 btn-outline flex items-center gap-2 whitespace-nowrap"
          >
            <Navigation size={18} /> เปิด Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
