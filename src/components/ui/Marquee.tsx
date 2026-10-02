"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "ซ่อมไฟรั่ว", "ไฟตก", "รับประกันงาน", "ดูผ่านมือถือฟรี", "ติดกล้อง IP", 
    "เปลี่ยนตู้เบรกเกอร์", "งานเนี้ยบ", "ประเมินฟรี", "ระบบสายดิน", "EV Charger",
    "ซ่อมไฟรั่ว", "ไฟตก", "รับประกันงาน", "ดูผ่านมือถือฟรี", "ติดกล้อง IP"
  ];

  return (
    <div className="py-6 border-y border-white/5 bg-[#ffd21f]/5 overflow-hidden flex relative z-10 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex gap-8 whitespace-nowrap px-4 shrink-0"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-xl font-heading font-bold text-white/50">{item}</span>
            <span className="text-[#ffd21f] text-xl">&bull;</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
