"use client";
import { Shield, Clock, Wrench, ThumbsUp } from "lucide-react";
import { siteData } from "../data/site";

export default function TrustBar() {
  const items = [
    { icon: <Clock className="text-[#ffd21f]" size={24} />, text: "ประเมินหน้างานฟรี" },
    { icon: <Wrench className="text-[#ffd21f]" size={24} />, text: "ประสบการณ์ 10+ ปี" },
    { icon: <Shield className="text-[#ffd21f]" size={24} />, text: "รับประกันผลงาน 1 ปี" },
    { icon: <ThumbsUp className="text-[#ffd21f]" size={24} />, text: "บริการหลังการขาย" },
  ];

  return (
    <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-8 py-6 snap-x hide-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 min-w-[200px] snap-center">
              <div className="w-12 h-12 rounded-full bg-[#ffd21f]/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
