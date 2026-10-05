export type ServiceAccent = "mint" | "navy" | "slate";

export type Service = {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  url: string;
  host: string;
  icon: string;
  accent: ServiceAccent;
  image: string;
  imageAlt: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    id: "shop",
    name: "VersaLife Shop",
    badge: "E-Commerce & Pharmacy",
    tagline: "Wellness products, delivered with care.",
    url: "https://shop.versalifehealth.com",
    host: "shop.versalifehealth.com",
    icon: "shopping_bag",
    accent: "mint",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X55_PxS664FfKIrRRRN91FqioZT5UfZwhMiXihV6KzA99yU_uWT40H8i0e0gc5M8wiBEbWppXlJj1CUJk63R5b7DrA5aXDnF0S6MNEQJfuZFsH9hbQtrOFmugXmbQ4VKcnIc-676h7OA0hXsvdmbtK2rGhQo5NT998R79Auv3qSalECgwHupxwT6_Z75DepynoWLExFtZB6vONvkxH_7naQY3zZWvT7-T6cf-CK9xvU2IdEVgRhVhQudQ",
    imageAlt: "Curated wellness products",
    bullets: [
      "Curated health & wellness inventory",
      "Bank-grade encrypted secure checkout",
      "Live dispatch tracking & doorstep handover",
    ],
  },
  {
    id: "telemedicine",
    name: "VersaLife Telemedicine",
    badge: "Virtual Consultation",
    tagline: "See a doctor from home, on your schedule.",
    url: "https://telemedicine.versalifehealth.com",
    host: "telemedicine.versalifehealth.com",
    icon: "video_call",
    accent: "navy",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XJ-mTZP-KT2r2VRdzJyIGbE545e36dlMBKJ9OlAdCnDK-xTpdPQiHOTuKInqRKMEDsQ72queAbvaBzT1wm2je9AkWFGMZ4CITTBXuHTRdOnlm0cp3CrfuOSh5DKydLsK634HgTSI9A-CytEr1S0s7xvZnIMsDGZzFXhtVga1xXpCpvUGVXPArD-55d_kOwX_HAGUElYYbfvrWuMinuf41NpwYAygzQpXgHO0GcastDyzBBzMlYbLP7gwk",
    imageAlt: "Telehealth doctor consultation",
    bullets: [
      "Book instant queue or pre-reserved slot",
      "One-tap browser HD audio/video visit",
      "Clinical summaries, sick notes & prescriptions",
    ],
  },
];
