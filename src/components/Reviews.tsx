"use client";
import { reviewsData } from "../data/reviews";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  // Simple auto-scroll could be added, but for now we'll use CSS snap scrolling
  return (
    <section id="reviews" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-gradient">
          เสียงตอบรับจากลูกค้า
        </h2>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {reviewsData.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card min-w-[300px] md:min-w-[400px] p-8 snap-center flex-shrink-0"
            >
              <Quote size={40} className="text-white/10 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-[#ffd21f] text-[#ffd21f]" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd21f] to-orange-500 flex items-center justify-center font-bold text-black">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{review.name}</div>
                  <div className="text-xs text-muted">{review.area}</div>
                </div>
              </div>
            </motion.div>
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
