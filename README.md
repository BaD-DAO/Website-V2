# BuildaDAO Website

A professional multi-page website for BuildaDAO - Building the future of decentralized innovation across Africa.

## 🌟 Features

### Main Website Sections

1. **Home** - Hero with `hero.jpeg` background, overview of BuildaDAO's mission and key programs (Education, Startup Support, Talent Network)
2. **First 500** - Startup accelerator program tracking 500 innovative African startups
3. **BaD Academy** - AI and Blockchain courses for junior and enterprise levels
4. **Countries** - BuildaDAO chapters across Africa (Ethiopia, Ghana, Cameroon, Uganda, Botswana, and more)
5. **Events** - Upcoming events, event organizing services, and ambassador program
6. **Talent Pool** - Network of professionals (developers, designers, cybersecurity experts, marketers, etc.)

## 🚀 Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with hero, What Is BuildaDAO, programs
│   ├── layout.tsx            # Root layout with navigation & footer
│   ├── globals.css           # Global styles and custom CSS
│   ├── favicon.ico           # Site favicon
│   ├── academy/
│   │   └── page.tsx          # BaD Academy courses
│   ├── first-500/
│   │   └── page.tsx          # First 500 startups program
│   ├── countries/
│   │   └── page.tsx          # Country chapters
│   ├── events/
│   │   └── page.tsx          # Events & ambassadors
│   ├── talent-pool/
│   │   └── page.tsx          # Talent network
│   └── contact/
│       └── page.tsx          # Contact page
└── components/
    ├── Navigation.tsx        # Main navigation bar
    ├── Footer.tsx            # Site footer
    ├── LiquidEther.tsx       # Interactive liquid background effect
    ├── LiquidEther.css       # Liquid ether styles
    └── SpeakersSection.tsx   # Team members carousel section
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **UI**: React 19

## 🌍 BuildaDAO Programs

### First 500 Startups
Supporting 500 innovative startups with mentorship, resources, and community tracking.

### BaD Academy
- **Junior Level**: Blockchain Fundamentals, AI/ML Basics, Full Stack Web3
- **Enterprise Level**: Enterprise Blockchain, AI for Business, DAO Governance

### Country Chapters
Active communities in Ethiopia, Ghana, Cameroon, Uganda, Botswana, Kenya, Nigeria, South Africa, and expanding.

### Events
- Upcoming events calendar
- Event organizing as a service
- Ambassador program for community leaders

### Talent Pool
Network of 1,250+ professionals across:
- Development
- Design
- Cybersecurity
- Marketing
- Blockchain
- AI/ML

## 🛠️ Customization

To customize content, edit the respective page files in `src/app/`. All pages use Tailwind CSS for styling.

- **Hero background**: Update `public/images/home/hero.jpeg` or change the `backgroundImage` style in `src/app/page.tsx`.
- **Home carousel cards** (Education, Startup Support, Talent Network): Update the `cards` array and images in `public/images/home/` (e.g. `education.jpg`, `startup-support.jpg`, `talent-pool.jpg`).
- **Programs section images**: Backgrounds for First 500, Academy, Talent Pool, and Events cards are set via inline `backgroundImage` styles in `page.tsx` (including `events.jpeg` for the Events card).

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2025 BuildaDAO. All rights reserved.
