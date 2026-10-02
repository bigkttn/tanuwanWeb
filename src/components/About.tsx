"use client";
import { siteData } from "../data/site";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          
          {/* Resume Style Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ffd21f] mb-4">
              <img src="/images/profile-placeholder.webp" alt={siteData.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-1">{siteData.name}</h3>
            <p className="text-muted text-sm mb-6">{siteData.brand}</p>
            
            <div className="w-full space-y-3 text-sm text-left">
              <div className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-[#ffd21f]" />
                {siteData.area}
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Clock size={16} className="text-[#ffd21f]" />
                {siteData.hours}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-gradient">ประวัติและหลักการทำงาน</h2>
            <p className="text-muted mb-8 leading-relaxed">
              ผมเริ่มต้นอาชีพช่างไฟฟ้าจากความสนใจในระบบวงจรและการทำงานของอุปกรณ์ต่างๆ สั่งสมประสบการณ์กว่า {siteData.experienceYears} ปี 
              ตั้งแต่การเดินสายไฟในบ้านเรือน จนถึงการติดตั้งระบบกล้องวงจรปิดขนาดใหญ่ในโรงงานอุตสาหกรรม
              เป้าหมายของผมคือการส่งมอบงานที่ปลอดภัย สวยงาม และใช้งานได้ยาวนาน
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">ปลอดภัยก่อนเสมอ</h4>
                  <p className="text-sm text-muted">ทำงานตามมาตรฐานวิศวกรรม ไม่ลักไก่ ไม่ลดสเปคสายไฟ</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">งานเนี้ยบ เก็บสายเรียบร้อย</h4>
                  <p className="text-sm text-muted">เดินสายร้อยท่อสวยงาม ตู้เบรกเกอร์จัดระเบียบง่ายต่อการซ่อมบำรุง</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-400 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">ราคาโปร่งใส ตรงไปตรงมา</h4>
                  <p className="text-sm text-muted">ประเมินราคาก่อนทำ ไม่มีบวกเพิ่มทีหลัง รับประกันผลงาน {siteData.warranty}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
