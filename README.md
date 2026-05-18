# Braden Ransom - UX Portfolio

A modern, interactive UX portfolio built with Next.js 14, TailwindCSS, Shadcn/UI, and Framer Motion.

## 🚀 Features

- **Interactive Card Deck**: Horizontal draggable project cards with smooth animations
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Bottom Accordion Navigation**: Unique navigation experience
- **Project Case Studies**: Detailed project pages with process and reflection
- **Modern Tech Stack**: Built with the latest web technologies

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Top navigation bar
│   │   ├── HeroIntro.tsx        # Hero section with intro text
│   │   ├── CardDeck.tsx         # Horizontal draggable card deck
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   ├── ProjectGrid.tsx      # Grid layout for projects
│   │   ├── AccordionNav.tsx     # Bottom accordion navigation
│   │   └── Footer.tsx           # Footer component
│   ├── lib/
│   │   ├── animations.ts        # Framer Motion animation variants
│   │   └── projects.ts          # Project data and helpers
│   ├── projects/[slug]/
│   │   └── page.tsx             # Dynamic project pages
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── resume/
│   │   └── page.tsx             # Resume page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
└── package.json
```

## 🎨 Customization

### Adding Projects

Edit `app/lib/projects.ts` to add your own projects:

```typescript
{
  id: "5",
  slug: "your-project",
  title: "Your Project",
  type: "UI/UX",
  description: "Brief description",
  thumbnail: "/projects/your-project-thumb.jpg",
  tags: ["Tag1", "Tag2"],
  overview: "Detailed overview...",
  process: ["Step 1", "Step 2"],
  gallery: ["/projects/your-project-1.jpg"],
  reflection: "What you learned...",
  color: "#FF6F61"
}
```

### Updating Personal Information

1. **About Page**: Edit `app/about/page.tsx`
2. **Contact Links**: Edit `app/contact/page.tsx`
3. **Resume**: Edit `app/resume/page.tsx`
4. **Metadata**: Edit `app/layout.tsx`

### Changing Colors

The portfolio uses two accent colors: Coral and Cobalt. To change them, edit `app/globals.css`:

```css
:root {
  --coral: oklch(0.71 0.18 32);    /* Change this */
  --cobalt: oklch(0.5 0.25 250);   /* Change this */
}
```

### Adding Images

1. Place your images in the `public/projects/` directory
2. Update the paths in `app/lib/projects.ts`
3. Use Next.js Image component for optimization

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## ✨ Key Features Explained

### Interactive Card Deck

The card deck supports:
- **Drag to scroll**: Click and drag horizontally
- **Keyboard navigation**: Use arrow keys to navigate
- **Touch-friendly**: Smooth swipe on mobile devices

### Animations

All animations are optimized for 60fps and use Framer Motion variants for consistency:
- Fade-ins and slide-ups on page load
- Card hover effects with lift and shadow
- Navbar shrink on scroll
- Accordion expansion on hover

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized interactions

## 🎯 Design Philosophy

This portfolio combines:
- **Aurora's House aesthetic**: Card-based, playful layout
- **Ayushwan Jhauri style**: Sleek navigation and bottom accordion
- **Modern minimalism**: Clean typography, subtle animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Braden Ransom**
