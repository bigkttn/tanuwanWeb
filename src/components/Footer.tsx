import { siteData } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-10 pb-28 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left md:flex md:justify-between md:items-center gap-6">
        <div>
          <h2 className="text-xl font-bold">{siteData.name}</h2>
          <p className="text-white/70 text-sm">{siteData.tagline}</p>
        </div>
        <a href={`tel:${siteData.phoneRaw}`} className="inline-flex items-center mt-4 md:mt-0 font-bold text-brand text-lg min-h-11">
          โทร {siteData.phone}
        </a>
      </div>
      <p className="text-center text-xs text-white/50 mt-8">
        &copy; {new Date().getFullYear()} {siteData.brand}
      </p>
    </footer>
  );
}
