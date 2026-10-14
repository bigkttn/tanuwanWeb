import { Phone, Search, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  { icon: <Phone size={24} />, title: "โทรสอบถาม", desc: "แจ้งงานที่ต้องการ" },
  { icon: <Search size={24} />, title: "ดูหน้างาน", desc: "ประเมิน เสนอราคาชัดเจน" },
  { icon: <Wrench size={24} />, title: "ติดตั้ง", desc: "ลงมือทำงานตามที่ตกลง" },
  { icon: <ShieldCheck size={24} />, title: "ส่งมอบงาน", desc: "ทดสอบระบบ ตรวจรับงาน" },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">ขั้นตอนจ้างงาน</h2>
        <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card p-5 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand text-ink flex items-center justify-center mb-3">
                {s.icon}
              </div>
              <h3 className="font-bold">
                {i + 1}. {s.title}
              </h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
