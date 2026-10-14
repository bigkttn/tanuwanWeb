import { servicesData } from "../data/services";
import { Camera, Network, PhoneCall, Tv, Zap, PlugZap } from "lucide-react";

const IconMap: Record<string, React.ReactNode> = {
  camera: <Camera size={26} />,
  network: <Network size={26} />,
  phone: <PhoneCall size={26} />,
  tv: <Tv size={26} />,
  zap: <Zap size={26} />,
  ev: <PlugZap size={26} />,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">บริการ</h2>
          <p className="text-muted">ขาย ซ่อม ติดตั้ง ครบในช่างคนเดียว ย่านรามอินทรา บางเขน และใกล้เคียง</p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesData.map((s) => (
            <li key={s.id} className="card p-4 sm:p-6 flex sm:flex-col items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-brand/15 text-brand-dark flex items-center justify-center">
                {IconMap[s.icon]}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-muted text-[15px] sm:text-base">{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
