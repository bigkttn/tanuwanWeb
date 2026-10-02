"use client";
import { MessageCircle, Search, Wrench, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { icon: <MessageCircle size={32} />, title: "1. ติดต่อสอบถาม", desc: "ทักไลน์หรือโทรแจ้งรายละเอียดงาน" },
    { icon: <Search size={32} />, title: "2. ประเมินฟรี", desc: "ดูหน้างานจริง เสนอราคาชัดเจน" },
    { icon: <Wrench size={32} />, title: "3. ดำเนินการ", desc: "เข้าติดตั้งด้วยช่างมืออาชีพ" },
    { icon: <ShieldCheck size={32} />, title: "4. ส่งมอบงาน", desc: "ตรวจรับงาน รับประกันผลงาน 1 ปี" },
  ];

  return (
    <section className="py-24 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-gradient">
          ขั้นตอนการทำงาน
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#0b1220] border border-[#ffd21f] flex items-center justify-center text-[#ffd21f] mb-6 shadow-[0_0_15px_rgba(255,210,31,0.2)]">
                {step.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
