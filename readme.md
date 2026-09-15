# Eye Smart Security Systems — Marketing Website

A production-ready Next.js marketing website for a Delhi NCR-based CCTV and security systems business.

## Overview

Complete, responsive marketing site built with:
- **Next.js 16** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS v4** (design system with CSS-first config)
- **next-intl** for English/Hindi localization
- **Custom UI components** (Button, Sheet, DropdownMenu)
- **Dark/light theme** via next-themes
- **Fully typed** data layer and components

## Tech Stack

- **Framework:** Next.js 16.3 with Turbopack
- **Styling:** Tailwind CSS v4 + @tailwindcss/typography
- **Languages:** TypeScript (strict), React 19
- **i18n:** next-intl with URL-based routing (`/en`, `/hi`)
- **Forms:** React Hook Form + Zod validation
- **Email:** Nodemailer (Gmail SMTP)
- **Spam Protection:** reCAPTCHA v2 + honeypot field
- **Icons:** Lucide React
- **Animations:** Framer Motion (minimal, respects prefers-reduced-motion)
- **Deployment:** Vercel (ready)

## Getting Started

### Prerequisites
- Node.js 18+ (tested with v23.3.0)
- npm 10+

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Fill in your credentials (see below)

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) to see the site.

## Environment Variables

Create `.env.local` with these credentials:

| Variable | Where to Get | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your domain or localhost:3000 | Canonical URLs, OG images |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | [Google reCAPTCHA v2](https://www.google.com/recaptcha/admin) | Client-side validation on contact form |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA admin → Keys | Server-side verification |
| `SMTP_USER` | Gmail address (e.g., `security@gmail.com`) | Sender email |
| `SMTP_PASS` | [Gmail App Password](https://myaccount.google.com/apppasswords) | Generated 16-char app-specific password |
| `MAIL_TO` | `info@eyesmartsecuritysystems.com` | Where contact form submissions go |
| `MAIL_FROM` | `"Eye Smart <info@...>"` | Display name + sender email |

### Gmail Setup (5 minutes)

1. Enable 2-Step Verification in Google Account: https://myaccount.google.com/security
2. Create an **App Password** (not your regular password) at https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Copy the 16-character password
3. Paste into `.env.local` as `SMTP_PASS`

### reCAPTCHA Setup (3 minutes)

1. Go to https://www.google.com/recaptcha/admin
2. Create a new site:
   - Label: "Eye Smart Security"
   - reCAPTCHA type: **v2 (checkbox)**
   - Domains: `localhost:3000`, `yourdomain.com`
3. Copy **Site Key** → `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
4. Copy **Secret Key** → `RECAPTCHA_SECRET_KEY`

## Features

### Pages
- **Home** — Hero, trust badges, 6 service cards, 4-step process, testimonials, coverage map, FAQ, CTA
- **About** — Story, stats, customer types, values, CTA
- **Products** — 7 categories (CCTV, Biometric, Video Door, Alarms, EPABX, Fire Safety, Cabling) with 20+ products
- **Blog** — Markdown posts with MDX rendering, TOC, reading time, sharing
- **Contact** — Quote form with reCAPTCHA, email submission, Google Maps
- **Privacy Policy & Terms of Service** — Legal pages
- **404** — Friendly error page

### Localization
- **English** — Complete site
- **Hindi** — Message keys ready (messages/hi.json)
- **URL routing:** `/en/products` and `/hi/products` (or `/en/` as default)

### SEO
- Metadata (title, description, OG) per page
- Sitemap & robots.txt auto-generated
- JSON-LD schemas (Organization, LocalBusiness, Article, BreadcrumbList, FAQPage)
- Canonical URLs with language alternates

### Contact Form
- Validation (Zod): name, 10-digit phone, email, service type, property type
- Spam protection: honeypot + reCAPTCHA v2
- Email: branded HTML via Gmail SMTP
- Rate limiting (IP-based)
- Toast notifications + success state

## Development

### Running Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```bash
npm run dev           # Start dev server (Port 3000)
npm run build         # Build for production
npm start             # Run production server
npm run lint          # ESLint check
```

### Adding a Product

Edit `src/data/products.ts` and add to appropriate category:
```ts
{
  slug: "my-product",
  name: "Product Name",
  shortDescription: "One-liner",
  features: ["Feature 1", "Feature 2"],
  specs: { "Resolution": "2MP", "Range": "20m" },
}
```

### Adding a Blog Post

Create `content/blog/en/my-post.md`:
```markdown
---
title: "Post Title"
date: "2026-09-15"
excerpt: "One-line summary"
coverImage: "/images/blog-cover.jpg"
---

# Heading

Content...
```

### Updating Business Info

All business data in `src/data/business.ts` — one source of truth used everywhere.

## Deployment

### Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Add environment variables in dashboard
3. Push to main → auto-deploys

### Custom Server
```bash
npm run build && npm start
```

## Before Launch

- [ ] Logo SVG (replace `<Logo />`)
- [ ] Hero image
- [ ] Product & blog cover images
- [ ] Real testimonials
- [ ] Stats (installations, years, cities)
- [ ] Social URLs
- [ ] Google Maps embed URL
- [ ] Domain setup
- [ ] reCAPTCHA domains
- [ ] Hindi translations
- [ ] Real blog posts

## Support

- **Issues** — Create GitHub issue
- **Customization** — Edit colors in `src/app/globals.css`
- **i18n** — Update `messages/*.json`, use `useTranslations()`

---

Built with Next.js, Tailwind CSS, TypeScript | Deployed on Vercel

© 2026 Eye Smart Security Systems
