"use client";
import { siteData } from "../data/site";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }) + ":" + now.getMilliseconds().toString().padStart(3, "0").slice(0, 2));
    };
    const interval = setInterval(update, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
      {/* Viewfinder brackets */}
      <div className="absolute top-24 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30" />
      <div className="absolute top-24 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30" />
      <div className="absolute bottom-24 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30" />
      <div className="absolute bottom-24 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30" />

      {/* REC & Time overlay */}
      <div className="absolute top-28 left-8 flex items-center gap-2 text-sm font-mono opacity-80">
        <div className="w-3 h-3 rounded-full bg-[#ff3b3b] animate-pulse" />
        <span className="text-[#ff3b3b]">REC</span>
      </div>
      <div className="absolute top-28 right-8 text-sm font-mono opacity-80 text-white">
        {time || "00:00:00:00"}
      </div>

      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none h-4 bg-white/5 blur-[2px] animate-[scan_4s_linear_infinite]" />

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            พร้อมให้บริการเขต {siteData.area}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-heading font-bold mb-4"
          >
            {siteData.name.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted mb-8 max-w-lg"
          >
            {siteData.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full md:w-auto"
          >
            <a href={`tel:${siteData.phone.replace(/-/g, "")}`} className="btn-primary flex-1 md:flex-none flex justify-center items-center gap-2">
              <Phone size={20} /> โทรเลย
            </a>
            <a href={siteData.lineUrl} target="_blank" rel="noreferrer" className="btn-outline flex-1 md:flex-none flex justify-center items-center gap-2">
              <MessageCircle size={20} /> ทักไลน์
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex gap-8 text-sm font-mono"
          >
            <div>
              <span className="block text-2xl text-[#ffd21f] font-bold">{siteData.experienceYears}+</span>
              <span className="text-muted">ปีประสบการณ์</span>
            </div>
            <div>
              <span className="block text-2xl text-[#ffd21f] font-bold">{siteData.completedJobs}+</span>
              <span className="text-muted">ผลงานสำเร็จ</span>
            </div>
            <div>
              <span className="block text-2xl text-[#ffd21f] font-bold">100%</span>
              <span className="text-muted">รับประกันงาน</span>
            </div>
          </motion.div>
        </div>

        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass-card">
          <img 
            src="/images/profile-placeholder.webp" 
            alt={siteData.name} 
            className="object-cover w-full h-full opacity-80"
          />
          {/* REPLACE WITH MY PHOTO */}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}} />
    </section>
  );
}
