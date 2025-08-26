# Modern Resume Template

A stunning, animated web-based resume template that transforms traditional static resumes into engaging digital experiences. Built with cutting-edge technologies and featuring smooth animations, this template helps developers and professionals stand out with a memorable online presence.

## ✨ Features

### 🎨 Design & User Experience

- **Apple-inspired minimalist design** with professional typography
- **Fully responsive** layout optimized for all devices
- **Smooth micro-interactions** and hover effects
- **Progressive disclosure** for detailed information
- **Accessibility-focused** with proper contrast and semantic markup

### 🚀 Advanced Animations

- **Character-by-character text reveals** with multiple animation presets
- **Scroll-triggered animations** using intersection observers
- **Staggered entrance effects** for sequential content reveals
- **Performance-optimized animations** with hardware acceleration
- **Customizable animation timings** and easing functions

### 🛠 Technical Stack

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Motion (Framer Motion)** for industry-leading animations
- **Tailwind CSS v4** with custom design tokens
- **Modular component architecture** for maintainability

### 📱 Interactive Components

- **Animated project cards** with image overlays and expandable details
- **Dynamic skill tags** with clean visual presentation
- **Collapsible sections** for detailed work experience
- **Smooth page transitions** and loading states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd resume-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Customization

### Resume Data

All resume content is centrally managed in the `data/resume-data.tsx` file. Simply update this TypeScript object with your information:

```typescript
export const resumeData: ResumeData = {
	name: 'Your Name',
	role: 'Your Professional Title',
	description: 'Your professional summary...',
	// ... other fields
}
```

### Profile Image

Replace the profile image in `public/image/` with your photo. Supported formats: JPG, PNG, WebP.

### Styling & Theming

- **Colors**: Modify CSS custom properties in `app/globals.css`
- **Typography**: Update font families in the globals.css file
- **Animations**: Customize animation presets in `components/core/text-effect.tsx`
- **Layout**: Adjust spacing and responsive breakpoints using Tailwind classes

### Component Customization

Each section is built as a modular component:

- `components/WorkExperienceRow.tsx` - Work history entries
- `components/ProjectCard.tsx` - Project showcase cards
- `components/EducationRow.tsx` - Education entries
- `components/CommunityRow.tsx` - Community involvement

## 🏗 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main resume page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles and design tokens
├── components/            # Reusable UI components
│   ├── core/             # Core animation components
│   └── ui/               # UI primitives
├── data/                 # Resume data configuration
├── lib/                  # Utilities and type definitions
└── public/               # Static assets
```

## 🎯 Key Benefits

- **Stand Out**: Dramatically differentiate yourself from traditional PDF resumes
- **Demonstrate Skills**: Showcase modern web development capabilities
- **Engagement**: Keep viewers engaged with interactive elements
- **Performance**: Optimized for fast loading and smooth animations
- **SEO Ready**: Built with Next.js for excellent search engine optimization
- **Print Friendly**: Maintains professional appearance when printed

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel with zero configuration
```

### Other Platforms

```bash
npm run build
npm run start
```

The app builds to static files and can be deployed to any hosting platform.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to create your impressive digital resume?** ⭐ Star this repo if you found it helpful!
