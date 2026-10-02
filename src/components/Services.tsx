"use client";
import { servicesData } from "../data/services";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { siteData } from "../data/site";
import { Plug, Zap, Shield, Car, Camera, Wrench } from "lucide-react";

// Icon mapping based on string
const IconMap: Record<string, React.ReactNode> = {
  plug: <Plug size={32} className="text-[#ffd21f]" />,
  zap: <Zap size={32} className="text-[#ffd21f]" />,
  shield: <Shield size={32} className="text-[#ffd21f]" />,
  car: <Car size={32} className="text-[#ffd21f]" />,
  camera: <Camera size={32} className="text-[#ffd21f]" />,
  wrench: <Wrench size={32} className="text-[#ffd21f]" />
};

function TiltCard({ service }: { service: typeof servicesData[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(255, 210, 31, 0.15), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative glass-card p-8 rounded-2xl overflow-hidden border border-white/10"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 p-4 bg-white/5 inline-flex rounded-xl w-fit">
          {IconMap[service.icon]}
        </div>
        <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
        <p className="text-muted text-sm mb-6 flex-grow">{service.description}</p>
        
        <a 
          href={`https://line.me/R/ti/p/${siteData.lineId}?text=${encodeURIComponent('สนใจสอบถามบริการ: ' + service.title)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#ffd21f] font-bold group-hover:gap-3 transition-all"
        >
          สอบถามบริการนี้ <span className="text-lg">→</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">
            บริการของเรา
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            ครอบคลุมทุกปัญหาระบบไฟฟ้าและการติดตั้งกล้องวงจรปิดด้วยเครื่องมือมาตรฐาน
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <TiltCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
