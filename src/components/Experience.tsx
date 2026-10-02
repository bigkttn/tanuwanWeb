"use client";
import { experienceData } from "../data/experience";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative z-10 bg-black/20" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-gradient">
          ประสบการณ์ทำงาน
        </h2>

        <div className="relative pl-8 md:pl-0">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-[#ffd21f] -translate-x-1/2 origin-top drop-shadow-[0_0_8px_rgba(255,210,31,0.8)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {experienceData.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#05070d] border-2 border-[#ffd21f] -translate-x-1/2 mt-1.5 md:mt-0 z-10" />
                
                {/* Content */}
                <div className={`flex-1 md:text-${i % 2 === 0 ? "left" : "right"}`}>
                  <span className="inline-block px-3 py-1 bg-[#ffd21f]/10 text-[#ffd21f] text-sm font-bold rounded-full mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-heading font-bold mb-4">{exp.place}</h3>
                  <ul className={`space-y-2 text-sm text-muted ${i % 2 !== 0 && "md:flex md:flex-col md:items-end"}`}>
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0 ${i % 2 !== 0 && "md:hidden"}`} />
                        <span className="text-left">{task}</span>
                        <span className={`hidden w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0 ${i % 2 !== 0 && "md:block"}`} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
