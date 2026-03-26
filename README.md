# Women in Computer Science & Engineering at FAU

A modern, responsive website for the Women in Computer Science & Engineering (WiCSE) student organization at Florida Atlantic University. This platform serves as a central hub for events, mentorship programs, career opportunities, and resources for women in technology.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🌟 Features

### Core Pages
- **Homepage** - Hero section, mission statement, statistics, and featured content
- **Events** - Upcoming and past events with detailed information and registration
- **Mentorship** - Program overview, mentor profiles, and application forms
- **Opportunities** - Internships, scholarships, and research positions
- **Resources** - Curated learning materials, career guides, and recommended books
- **About** - Organization history, team profiles, and achievements
- **Contact** - Contact form, meeting information, and FAQ

### Design & UX
- ✨ Modern, professional UI with FAU branding colors
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessibility-focused components
- 🎨 Smooth transitions and hover effects
- 🎯 Intuitive navigation with mobile menu

### Technical Highlights
- ⚡ Built with Next.js 16 App Router for optimal performance
- 🎨 Styled with Tailwind CSS v4 for modern, utility-first styling
- 🔤 TypeScript for type safety and better developer experience
- 🎭 Lucide React icons for consistent iconography
- 🚀 Optimized fonts with next/font (Geist)

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/djaramil/women-in-cse.git
cd women-in-cse
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
women-in-cse/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── events/              # Events page
│   ├── mentorship/          # Mentorship program page
│   ├── opportunities/       # Internships & scholarships
│   ├── resources/           # Learning resources
│   ├── about/               # About the organization
│   ├── contact/             # Contact form & info
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary (FAU Navy)**: `#003366`
- **Secondary (FAU Red)**: `#CC0000`
- **Accent**: `#004080`
- **Background**: White, Gray-50
- **Text**: Gray-600, Gray-700, Gray-900

### Typography
- **Headings**: Geist Sans (Bold, Semibold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

## 🛠️ Technologies Used

- **Framework**: [Next.js 16.2.1](https://nextjs.org/)
- **UI Library**: [React 19.2.4](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font Optimization**: next/font with Geist fonts

## 📝 Content Management

### Adding Events
Edit `app/events/page.tsx` and add new event objects to the `upcomingEvents` or `pastEvents` arrays:

```typescript
{
  id: 5,
  title: 'Your Event Title',
  date: 'Month Day, Year',
  time: 'Start - End Time',
  location: 'Event Location',
  description: 'Event description',
  attendees: 0,
  category: 'Workshop',
}
```

### Adding Opportunities
Edit `app/opportunities/page.tsx` to add internships, scholarships, or research positions to their respective arrays.

### Updating Team Members
Edit `app/about/page.tsx` and modify the `team` array with current leadership information.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Use TypeScript for type safety
- Ensure responsive design works on all screen sizes
- Test thoroughly before submitting PRs
- Keep accessibility in mind

## 📧 Contact

**Women in Computer Science & Engineering at FAU**
- Email: wicse@fau.edu
- Location: Engineering Building, Room 36, FAU Boca Raton
- Meetings: Wednesdays at 6:00 PM

## 📄 License

This project is maintained by the Women in Computer Science & Engineering organization at Florida Atlantic University.

## 🙏 Acknowledgments

- Florida Atlantic University
- FAU College of Engineering and Computer Science
- All WiCSE members, mentors, and supporters
- Partner companies: Google, Meta, Microsoft, Amazon

---

**Built with ❤️ by the WiCSE community at FAU**
