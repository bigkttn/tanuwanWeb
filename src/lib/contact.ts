import { siteData } from "../data/site";

export function getLineLink(message: string = ""): string {
  if (message) {
    // encodeURIComponent converts spaces to %20, etc.
    return `https://line.me/R/ti/p/${siteData.lineId}?text=${encodeURIComponent(message)}`;
  }
  return siteData.lineUrl;
}

export function submitContact(formData: { name: string; phone: string; service: string; details: string }) {
  const message = `สวัสดีครับ สนใจบริการครับ
ชื่อ: ${formData.name}
เบอร์: ${formData.phone}
ประเภทงาน: ${formData.service}
รายละเอียด: ${formData.details}`;
  
  const link = getLineLink(message);
  window.open(link, "_blank");
}
