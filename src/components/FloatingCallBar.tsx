"use client";
import { siteData } from "../data/site";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-[#05070d] to-transparent">
      <div className="flex gap-3">
        <a 
          href={`tel:${siteData.phone.replace(/-/g, "")}`} 
          className="flex-1 bg-[#ffd21f] text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,210,31,0.3)]"
        >
          <Phone size={20} /> โทรเลย
        </a>
        <a 
          href={siteData.lineUrl}
          target="_blank" 
          rel="noreferrer"
          className="flex-1 bg-[#00B900] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,185,0,0.3)]"
        >
          <MessageCircle size={20} /> ทักไลน์
        </a>
      </div>
    </div>
  );
}
