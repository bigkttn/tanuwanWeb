"use client";
import { siteData } from "../data/site";
import { submitContact } from "../lib/contact";
import { useState } from "react";
import { Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "ซ่อมระบบไฟฟ้า",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(formData);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
            ติดต่อช่างสมหมาย
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            ประเมินราคาฟรี ยินดีให้คำปรึกษาตลอดเวลาทำการ
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-6 flex items-start gap-4">
              <Phone className="text-[#ffd21f] shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold mb-1">โทรศัพท์</h4>
                <a href={`tel:${siteData.phone.replace(/-/g, "")}`} className="text-xl text-white/90 hover:text-[#ffd21f] transition-colors">
                  {siteData.phone}
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4">
              <MessageCircle className="text-[#00B900] shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold mb-1">LINE Official</h4>
                <a href={siteData.lineUrl} target="_blank" rel="noreferrer" className="text-xl text-white/90 hover:text-[#00B900] transition-colors">
                  {siteData.lineId}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-muted shrink-0 mt-0.5" size={18} />
                <div className="text-sm">
                  <div className="font-bold text-white/90">เวลาทำการ</div>
                  <div className="text-muted">{siteData.hours}</div>
                  <div className="text-[#ff3b3b] font-bold mt-1">{siteData.emergency}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                <MapPin className="text-muted shrink-0 mt-0.5" size={18} />
                <div className="text-sm">
                  <div className="font-bold text-white/90">พื้นที่ให้บริการหลัก</div>
                  <div className="text-muted">{siteData.area}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 glass-card p-8 border-t-2 border-t-[#ffd21f]">
            <h3 className="text-xl font-heading font-bold mb-6">ส่งข้อความหาช่าง</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-muted mb-1">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffd21f] transition-colors"
                    placeholder="เช่น คุณเอก"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-muted mb-1">เบอร์ติดต่อกลับ</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffd21f] transition-colors"
                    placeholder="08X-XXX-XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-muted mb-1">บริการที่สนใจ</label>
                <select 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-[#0b1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffd21f] transition-colors appearance-none"
                >
                  <option value="ซ่อมระบบไฟฟ้า">ซ่อมระบบไฟฟ้า / ไฟตก / ไฟรั่ว</option>
                  <option value="ติดตั้งกล้องวงจรปิด">ติดตั้งกล้องวงจรปิด</option>
                  <option value="ติดตั้งตู้เบรกเกอร์">ติดตั้ง/เปลี่ยนตู้เบรกเกอร์</option>
                  <option value="ติดตั้ง EV Charger">ติดตั้ง EV Charger</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-muted mb-1">รายละเอียดเพิ่มเติม</label>
                <textarea 
                  rows={4}
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ffd21f] transition-colors resize-none"
                  placeholder="เช่น ที่อยู่หน้างาน, ปัญหาที่พบ..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full btn-primary flex justify-center items-center gap-2">
                  <Send size={18} /> ส่งข้อความผ่าน LINE
                </button>
                <p className="text-xs text-center text-muted mt-3">
                  *ข้อมูลนี้จะถูกสร้างเป็นข้อความสำหรับส่งผ่านแอปพลิเคชัน LINE ของท่าน
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
