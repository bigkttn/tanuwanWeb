import { siteData } from "../data/site";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-surface">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">ติดต่อช่างกิตติพงษ์</h2>
        <p className="text-muted mb-8">โทรสอบถาม ประเมินหน้างาน</p>

        <a href={`tel:${siteData.phoneRaw}`} className="card block p-6 hover:shadow-md transition-shadow">
          <Phone className="mx-auto text-brand-dark mb-2" size={32} />
          <div className="text-3xl font-bold">{siteData.phone}</div>
          <div className="text-muted mt-1">แตะเพื่อโทร</div>
        </a>

        {(siteData.lineUrl || siteData.facebookUrl) && (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {siteData.lineUrl && (
              <a
                href={siteData.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-h-12 rounded-xl bg-line-green text-white font-bold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> LINE
              </a>
            )}
            {siteData.facebookUrl && (
              <a href={siteData.facebookUrl} target="_blank" rel="noreferrer" className="btn-outline flex-1">
                Facebook
              </a>
            )}
          </div>
        )}

        {(siteData.hours || siteData.area) && (
          <div className="card p-5 mt-4 text-left space-y-3">
            {siteData.hours && (
              <div className="flex gap-3">
                <Clock size={20} className="shrink-0 mt-1" /> {siteData.hours}
              </div>
            )}
            {siteData.area && (
              <div className="flex gap-3">
                <MapPin size={20} className="shrink-0 mt-1" /> {siteData.area}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
