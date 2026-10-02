"use client";
import { skillsData } from "../data/skills";
import { Zap, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-gradient">
          ทักษะและความเชี่ยวชาญ
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Electrical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-2 border-t-[#ffd21f]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-[#ffd21f]" size={28} />
              <h3 className="text-2xl font-heading font-bold">ระบบไฟฟ้า</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.electrical.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CCTV Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 border-t-2 border-t-[#22d3ee]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Camera className="text-[#22d3ee]" size={28} />
              <h3 className="text-2xl font-heading font-bold">ระบบกล้องวงจรปิด</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.cctv.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
