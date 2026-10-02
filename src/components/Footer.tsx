import { siteData } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05070d] pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left mb-12">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">{siteData.name}</h2>
            <p className="text-muted text-sm">{siteData.tagline}</p>
          </div>
          <div className="flex gap-4">
            <a 
              href={siteData.facebookUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {siteData.brand}. All rights reserved.</p>
          <p>ข้อมูลที่ส่งผ่านฟอร์มจะถูกเปิดในแอปพลิเคชัน LINE ของท่านเท่านั้น ไม่มีการเก็บข้อมูลบนเซิร์ฟเวอร์</p>
        </div>
      </div>
    </footer>
  );
}
