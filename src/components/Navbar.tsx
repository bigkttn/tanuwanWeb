import { siteData } from "../data/site";
import { Phone } from "lucide-react";

const links = [
  { name: "บริการ", href: "#services" },
  { name: "ผลงาน", href: "#portfolio" },
  { name: "ติดต่อ", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold inline-flex items-center min-h-11">
          {siteData.brand}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-dark hover:underline">
              {l.name}
            </a>
          ))}
          <a href={`tel:${siteData.phoneRaw}`} className="btn-primary">
            <Phone size={18} /> {siteData.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
