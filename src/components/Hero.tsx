import { siteData } from "../data/site";
import { servicesData } from "../data/services";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-brand/15 text-brand-dark text-sm font-medium mb-4">
            รับงานบ้าน • คอนโด • โรงแรม • ออฟฟิศ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">{siteData.name}</h1>
          <p className="text-lg text-muted mb-6">{siteData.role}</p>

          <ul className="flex flex-wrap gap-2 mb-8">
            {servicesData.map((s) => (
              <li key={s.id} className="px-3 py-1.5 rounded-full bg-white border border-line text-sm">
                {s.title}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${siteData.phoneRaw}`} className="btn-primary w-full sm:w-auto text-lg min-h-14">
              <Phone size={22} /> โทร {siteData.phone}
            </a>
            {siteData.lineUrl && (
              <a href={siteData.lineUrl} target="_blank" rel="noreferrer" className="btn-outline w-full sm:w-auto min-h-14">
                <MessageCircle size={22} /> ทักไลน์
              </a>
            )}
          </div>
        </div>

        <img
          src="/images/work/ev-aion-2.jpg"
          alt="ผลงานติดตั้งเครื่องชาร์จ EV โดยช่างกิตติพงษ์"
          className="rounded-2xl object-cover aspect-[3/4] w-full max-w-md mx-auto lg:mr-0 shadow-md"
        />
      </div>
    </section>
  );
}
