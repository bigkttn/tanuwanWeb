"use client";
import { certificatesData } from "../data/certificates";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
            ใบรับรองและมาตรฐาน
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            ผ่านการอบรมและได้รับใบอนุญาตอย่างถูกต้อง เพื่อความมั่นใจของลูกค้า
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificatesData.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col sm:flex-row overflow-hidden group"
            >
              <div className="sm:w-1/3 bg-white/5 relative overflow-hidden flex items-center justify-center p-6 aspect-video sm:aspect-auto">
                <Award size={48} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                <div className="text-[#ffd21f] text-sm font-bold mb-2">{cert.year}</div>
                <h3 className="text-lg font-heading font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted mb-4">ออกโดย: {cert.issuer}</p>
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-green-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {cert.standard}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
