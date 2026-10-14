import { siteData } from "../data/site";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white border-t border-line p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex gap-3">
        <a
          href={`tel:${siteData.phoneRaw}`}
          className="flex-1 min-h-14 bg-brand text-ink font-bold text-lg rounded-xl flex items-center justify-center gap-2"
        >
          <Phone size={22} /> โทร {siteData.phone}
        </a>
        {siteData.lineUrl && (
          <a
            href={siteData.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="min-h-14 px-5 bg-line-green text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            <MessageCircle size={22} /> LINE
          </a>
        )}
      </div>
    </div>
  );
}
