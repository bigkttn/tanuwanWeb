import { servicesData } from "../data/services";
import { siteData } from "../data/site";
import { Camera, Network, PhoneCall, Tv, Zap, PlugZap, Phone } from "lucide-react";

const IconMap: Record<string, React.ReactNode> = {
  camera: <Camera size={28} />,
  network: <Network size={28} />,
  phone: <PhoneCall size={28} />,
  tv: <Tv size={28} />,
  zap: <Zap size={28} />,
  ev: <PlugZap size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">บริการ</h2>
          <p className="text-muted">ขาย ซ่อม ติดตั้ง ครบในช่างคนเดียว ย่านรามอินทรา บางเขน และใกล้เคียง</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((s) => (
            <div key={s.id} className="card p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand/15 text-brand-dark flex items-center justify-center mb-4">
                {IconMap[s.icon]}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted mb-4 flex-grow">{s.description}</p>
              <a
                href={`tel:${siteData.phoneRaw}`}
                className="inline-flex items-center gap-2 min-h-11 font-bold text-brand-dark hover:underline"
              >
                <Phone size={18} /> โทรสอบถาม
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
