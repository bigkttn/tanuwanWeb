"use client";
import { useEffect, useState } from "react";
import { siteData } from "../data/site";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCallBar() {
  const [visible, setVisible] = useState(false);

  // แสดงแถบเมื่อปุ่มโทรใน Hero เลื่อนพ้นจอไปแล้ว
  useEffect(() => {
    const target = document.getElementById("hero-call");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-line p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 motion-reduce:transition-none ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <a
          href={`tel:${siteData.phoneRaw}`}
          tabIndex={visible ? 0 : -1}
          className="flex-1 min-h-14 bg-brand text-ink font-bold text-lg rounded-xl flex items-center justify-center gap-2"
        >
          <Phone size={22} /> โทร {siteData.phone}
        </a>
        {siteData.lineUrl && (
          <a
            href={siteData.lineUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={visible ? 0 : -1}
            className="min-h-14 px-5 bg-line-green text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            <MessageCircle size={22} /> LINE
          </a>
        )}
      </div>
    </div>
  );
}
