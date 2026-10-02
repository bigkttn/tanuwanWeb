"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteData } from "../data/site";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "บริการ", href: "#services" },
    { name: "ผลงาน", href: "#portfolio" },
    { name: "แพ็กเกจ", href: "#packages" },
    { name: "รีวิว", href: "#reviews" },
  ];

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-40 glass-card !rounded-none !border-x-0 !border-t-0"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-xl font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {siteData.brand}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm hover:text-[#ffd21f] transition-colors">
                {link.name}
              </a>
            ))}
            <a href={`tel:${siteData.phone.replace(/-/g, "")}`} className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
              <Phone size={16} /> โทรเลย
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#05070d]/95 pt-20 px-4 md:hidden flex flex-col items-center gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-heading"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${siteData.phone.replace(/-/g, "")}`} 
            className="btn-primary w-full max-w-xs text-center flex items-center justify-center gap-2 mt-4"
          >
            <Phone size={20} /> โทร {siteData.phone}
          </a>
        </div>
      )}
    </>
  );
}
