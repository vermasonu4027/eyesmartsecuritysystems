import { Business } from "@/types";

export const business: Business = {
  name: "Eye Smart Security Systems",
  displayName: "EYE SMART SECURITY SYSTEMS",
  tagline: "Protecting Delhi NCR Since 2013",
  phone: "+916307972402",
  phoneDisplay: "+91 63079 72402",
  whatsapp: "916307972402",
  email: "info@eyesmartsecuritysystems.com",
  address: {
    street: "Pragati Marg, Block C, Sector 81",
    city: "Noida",
    state: "Uttar Pradesh",
    postalCode: "201305",
    country: "India",
  },
  geo: {
    lat: 28.5355,
    lng: 77.391,
  },
  hours: {
    weekdays: "Mon–Sat: 9:00 AM – 8:00 PM",
    emergency: "24/7 Emergency Service",
  },
  serviceAreas: ["Delhi", "Noida", "Greater Noida", "Ghaziabad", "Gurgaon", "Faridabad"],
  founded: 2013,
  socials: {
    facebook: "#", // TODO: add URL
    instagram: "#", // TODO: add URL
    google: "#", // TODO: add URL
  },
} as const;

export const businessDescription =
  "EYE SMART SECURITY SYSTEMS is a top-rated security system supplier and installer serving Noida, Greater Noida, and Ghaziabad since 2013. We offer end-to-end security solutions for home, office, and industrial properties, including HD & IP CCTV surveillance systems, biometric access control & time attendance, video door phones & EPABX intercoms, burglar intruder alarms & smart home security, and electrical wiring & network cabling.";
