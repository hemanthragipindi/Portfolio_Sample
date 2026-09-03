# 🚀 Quick Start Guide

Your portfolio is ready to go! Here's everything you need to know:

## What You Have

✅ Complete React portfolio website with:
- Dark/Light theme toggle
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- 11 sections: Hero, About, Skills, Projects, Experience, Education, Achievements, Testimonials, Contact, Footer
- Production-ready code
- Easy customization

## Installation & Running

### Step 1: Install Dependencies
```bash
cd "C:\Users\ADMIN\OneDrive\Desktop\portfolio"
npm install
```

This will install all required packages (takes 2-5 minutes).

### Step 2: Start Development Server
```bash
npm run dev
```

Open your browser to `http://localhost:3000` - your portfolio is live! 🎉

### Step 3: Make Changes
Edit files and see changes instantly with hot-reload.

## Essential Customization (Do This First!)

### 1. Update Your Information
**File:** `src/data/portfolioData.js`

```javascript
// Lines 2-11: Personal Info
export const personalInfo = {
  name: "YOUR NAME HERE",
  role: "YOUR JOB TITLE",
  email: "your.email@example.com",
  location: "Your City, Country",
  bio: "I design and build digital experiences that make an impact.",
  introduction: "Your introduction text here...",
  tagline: "Your tagline here",
};
```

### 2. Update Social Links
**File:** `src/data/portfolioData.js` (Lines 14-31)

```javascript
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME",
    icon: "Github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_PROFILE",
    icon: "Linkedin",
  },
];
```

### 3. Add Your Skills
**File:** `src/data/portfolioData.js` (Lines 34-57)

```javascript
export const skills = {
  frontend: [
    { name: "React", icon: "Zap" },
    { name: "JavaScript", icon: "Code" },
    // Add your skills...
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    // Add your skills...
  ],
  tools: [
    { name: "Git", icon: "GitBranch" },
    // Add your tools...
  ],
};
```

### 4. Add Your Projects
**File:** `src/data/portfolioData.js` (Lines 60-130)

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What your project does...",
    image: "/projects/your-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    role: "Your Role",
    outcome: "Key result or achievement",
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo",
  },
  // Add more projects...
];
```

### 5. Add Your Experience
**File:** `src/data/portfolioData.js` (Lines 133-200)

```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    jobTitle: "Your Job Title",
    startDate: "Jan 2022",
    endDate: "Present",
    responsibilities: [
      "What you did...",
      "What you accomplished...",
    ],
    achievements: [
      "Specific achievement...",
    ],
  },
];
```

## Customizing Appearance

### Change Colors
**File:** `index.html` (Around line 16)

```html
<style>
  :root {
    --color-primary: #1f2937;      /* Dark gray - main text */
    --color-secondary: #374151;    /* Lighter gray */
    --color-accent: #3b82f6;       /* Blue - highlighted elements */
  }
</style>
```

**Popular color combinations:**
- Blue (Current): `#3b82f6`
- Purple: `#a855f7`
- Pink: `#ec4899`
- Teal: `#14b8a6`
- Orange: `#f97316`

### Change Font
**File:** `src/index.css` (Line 9)

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
}
```

Add any Google Font or web font here.

### Change Tailwind Theme
**File:** `tailwind.config.js`

Customize colors, spacing, typography, and more.

## Adding Images

### Profile Picture
1. Create or download your profile image
2. Place it in `public/images/profile.jpg`
3. In `src/sections/About.jsx`, the placeholder will show

### Project Images
1. Add images to `public/projects/`
2. Update `portfolioData.js` with image paths
3. Example: `/projects/my-project.jpg`

### Icon Reference
All icons are from Lucide React. Find icon names at:
https://lucide.dev/

Used in skills and other places. Examples:
- `Zap` → Lightning bolt
- `Code` → Code brackets
- `Server` → Server icon
- `Database` → Database icon
- `Palette` → Palette/design
- `GitBranch` → Git branch

## Deployment (Choose One)

### Vercel (Recommended - Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click Deploy
6. Your site is live! 🎉

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build command: `npm run build`
6. Publish folder: `dist`
7. Deploy!

### Your Own Server
```bash
npm run build
```
Upload the `dist` folder to your server.

## Add Contact Form Integration

The contact form currently shows a success message when submitted (front-end only).

### To actually send emails:

**Option A: EmailJS (Free)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create email template
3. Get Service ID, Template ID, Public Key
4. In `src/sections/Contact.jsx`, find the handleSubmit function
5. Replace placeholder with EmailJS code:

```javascript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

**Option B: Formspree (Simple)**
1. Go to [formspree.io](https://formspree.io)
2. Create new form, get Form ID
3. In Contact.jsx:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**Option C: Web3Forms (No Backend)**
1. Visit [web3forms.com](https://web3forms.com)
2. Get access key
3. Follow their React documentation

## Project Structure

```
portfolio/
├── public/                 ← Put your images here
│   └── favicon.svg
├── src/
│   ├── components/        ← Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ExperienceItem.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── SectionHeading.jsx
│   ├── sections/          ← Full page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js   ← ⭐ MAIN FILE TO EDIT
│   ├── App.jsx            ← Main component
│   ├── main.jsx           ← Entry point
│   └── index.css          ← Global styles
├── index.html             ← Update title & meta tags
├── package.json           ← Dependencies
├── vite.config.js         ← Vite configuration
├── tailwind.config.js     ← Tailwind configuration
└── README.md              ← Full documentation
```

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code (if you add ESLint)
npm run lint
```

## Customization Checklist

- [ ] Update personal info in portfolioData.js
- [ ] Add your profile picture
- [ ] Update social links
- [ ] Add your skills
- [ ] Add your projects (with images)
- [ ] Add your work experience
- [ ] Add your education
- [ ] Update testimonials
- [ ] Change accent color
- [ ] Update page title in index.html
- [ ] Update meta description
- [ ] Add favicon
- [ ] Test on mobile device
- [ ] Test dark/light mode
- [ ] Test all links work
- [ ] Deploy to Vercel/Netlify

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- --port 3001
```

**Styles not showing?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Images not loading?**
- Check image path starts with `/`
- Image should be in `public/` folder
- Example: `/projects/my-image.jpg`

**Theme toggle not working?**
- Clear browser cache
- Check localStorage in browser DevTools

## Need More Help?

1. **Full Documentation:** See `README.md`
2. **Detailed Setup:** See `SETUP_GUIDE.md`
3. **React Docs:** https://react.dev
4. **Tailwind CSS:** https://tailwindcss.com/docs
5. **Framer Motion:** https://www.framer.com/motion/

## What's Next?

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Update all data in `portfolioData.js`
4. ✅ Add your images to `public/`
5. ✅ Customize colors and fonts
6. ✅ Test everything works
7. ✅ Deploy to Vercel
8. ✅ Share with the world! 🎉

---

**You've got this! Your portfolio is going to be amazing.** 🚀

Questions? Check the README.md or SETUP_GUIDE.md for more detailed instructions.
