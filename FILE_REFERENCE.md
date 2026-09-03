# 📋 Portfolio Project - File Reference Guide

## 📁 Project Structure & File Locations

### 🚀 START HERE
1. **Read:** `QUICK_START.md` ← Begin here!
2. **Read:** `INSTALLATION_HELP.md` ← If npm install has issues
3. **Run:** `npm install`
4. **Run:** `npm run dev`

---

## 📄 Documentation Files

| File | Purpose |
|------|---------|
| **QUICK_START.md** | 👈 Start here! Quick setup and customization guide |
| **SETUP_GUIDE.md** | Detailed installation and customization instructions |
| **README.md** | Full project documentation |
| **INSTALLATION_HELP.md** | Troubleshooting for npm install issues |
| **THIS FILE** | File reference and navigation |

---

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and npm scripts |
| `vite.config.js` | Vite dev server and build config |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins (Tailwind) |
| `.gitignore` | Files to ignore in version control |
| `.env.example` | Environment variables template |

---

## 📝 Core Application Files

### Entry Point
| File | Purpose |
|------|---------|
| `index.html` | HTML entry point - update title & meta tags here |
| `src/main.jsx` | React app entry point |
| `src/App.jsx` | Main App component with theme management |
| `src/index.css` | Global styles and Tailwind imports |

### Data (⭐ MOST IMPORTANT)
| File | Purpose |
|------|---------|
| **`src/data/portfolioData.js`** | ⭐ **ALL your content goes here!** |
| | • Personal information |
| | • Social media links |
| | • Skills |
| | • Projects |
| | • Work experience |
| | • Education |
| | • Testimonials |
| | • Navigation links |

---

## 🧩 React Components

### Reusable Components (`src/components/`)
| File | Purpose |
|------|---------|
| `Button.jsx` | Reusable button with variants (primary, secondary, ghost) |
| `Navbar.jsx` | Navigation bar with mobile menu & theme toggle |
| `Footer.jsx` | Footer with links and social media |
| `SectionHeading.jsx` | Section title and subtitle component |
| `SkillCard.jsx` | Individual skill display card |
| `ProjectCard.jsx` | Project showcase card with hover effects |
| `ExperienceItem.jsx` | Work experience timeline item |
| `TestimonialCard.jsx` | Client testimonial display |

### Page Sections (`src/sections/`)
| File | Purpose |
|------|---------|
| `Hero.jsx` | Hero section with name, role, CTA buttons |
| `About.jsx` | About section with profile image placeholder |
| `Skills.jsx` | Skills organized by category (Frontend/Backend/Tools) |
| `Projects.jsx` | Featured projects grid (6 projects) |
| `Experience.jsx` | Work experience timeline |
| `Education.jsx` | Education and certifications |
| `Achievements.jsx` | Stats section with animated counters |
| `Testimonials.jsx` | Client testimonials grid |
| `Contact.jsx` | Contact form + contact information |

---

## 🖼️ Assets

### Public Folder (`public/`)
| Item | Purpose |
|------|---------|
| `favicon.svg` | Website favicon |
| `images/` | (create) Store profile photos here |
| `projects/` | (create) Store project screenshots here |

---

## 🎯 Quick Customization Checklist

### 1. Edit Personal Data
**File:** `src/data/portfolioData.js`
- [ ] Update `personalInfo` object (name, role, email, etc.)
- [ ] Update `socialLinks` (GitHub, LinkedIn, etc.)
- [ ] Update `skills` arrays
- [ ] Update `projects` array
- [ ] Update `experience` array
- [ ] Update `education` array
- [ ] Update `testimonials` array

### 2. Update Styling
**File:** `index.html`
- [ ] Change accent color in CSS variables
- [ ] Update page title
- [ ] Update meta description

**File:** `src/index.css`
- [ ] Customize font if desired
- [ ] Add custom CSS if needed

### 3. Add Images
- [ ] Create `public/images/` folder
- [ ] Add profile photo as `profile.jpg`
- [ ] Create `public/projects/` folder
- [ ] Add project images

### 4. Test Locally
- [ ] Run `npm run dev`
- [ ] Test on mobile
- [ ] Check dark/light mode
- [ ] Verify all links

### 5. Deploy
- [ ] Push to GitHub
- [ ] Deploy to Vercel or Netlify
- [ ] Test live site

---

## 🎨 Color Customization Reference

### Where to Change Colors

**Main Accent Color:** 
- File: `index.html` line 16
- Variable: `--color-accent: #3b82f6;`

**Primary Color (dark text in light mode, light text in dark mode):**
- File: `index.html` line 14
- Variable: `--color-primary: #1f2937;`

**Secondary Color:**
- File: `index.html` line 15
- Variable: `--color-secondary: #374151;`

**Additional Colors:**
- Edit in `tailwind.config.js`
- Modify `theme.extend.colors`

### Popular Color Palettes

Blue (Current):
```
Primary: #1f2937
Secondary: #374151
Accent: #3b82f6
```

Purple:
```
Accent: #a855f7
```

Pink:
```
Accent: #ec4899
```

Teal:
```
Accent: #14b8a6
```

Orange:
```
Accent: #f97316
```

---

## 🔧 Editing the Navbar

**File:** `src/components/Navbar.jsx`
- Change logo text
- Add/remove menu items (but also update `portfolioData.js`)
- Customize theme button style

**File:** `src/data/portfolioData.js`
- Update `navLinks` array to add/remove menu items

---

## 📝 Editing Each Section

### Hero Section
**File:** `src/sections/Hero.jsx`
- Template already uses data from `portfolioData.js`
- Update text in `personalInfo` object

### About Section
**File:** `src/sections/About.jsx`
- Shows profile image placeholder
- Edit text inside the component
- Replace with actual image

### Skills
**File:** `src/sections/Skills.jsx`
- Pulls from `skills` object in `portfolioData.js`
- Change icons: lucide-react icon names
- Add/remove skills in data file

### Projects
**File:** `src/sections/Projects.jsx`
- Pulls from `projects` array in `portfolioData.js`
- Add up to 6 projects
- Update project images and links

### Experience
**File:** `src/sections/Experience.jsx`
- Timeline displays `experience` array from data
- Edit work history in data file

### Contact Form
**File:** `src/sections/Contact.jsx`
- Form has frontend validation
- Placeholder for backend integration
- See `SETUP_GUIDE.md` for email service setup

---

## 🚀 npm Scripts

```bash
# Start development server (auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Add more scripts in package.json as needed
```

---

## 📱 Responsive Breakpoints

All sections are responsive across:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px  
- Desktop: 1025px+

Breakpoints defined in `tailwind.config.js`

---

## 🔐 Environment Variables

**File:** `.env.example`

Optional variables for form integration:
- `VITE_EMAILJS_*` - EmailJS configuration
- `VITE_FORMSPREE_ID` - Formspree ID
- `VITE_WEB3FORMS_KEY` - Web3Forms key

Copy `.env.example` to `.env.local` to use.

---

## 📚 External Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Lucide Icons: https://lucide.dev
- Vercel Deploy: https://vercel.com
- Netlify Deploy: https://netlify.com

---

## 🎯 Common Tasks

### Add a new skill
1. Open `src/data/portfolioData.js`
2. Add to `skills` object (frontend/backend/tools)
3. Use icon from https://lucide.dev

### Add a new project
1. Add object to `projects` array in `portfolioData.js`
2. Add image to `public/projects/`
3. Update `image` path in project object

### Change button styles
1. Edit `src/components/Button.jsx`
2. Modify `variants` object
3. Update component props when using buttons

### Add a new section
1. Create file in `src/sections/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add `<YourSection />` to render
4. Add navigation link in `portfolioData.js`

### Deploy changes
```bash
npm run build
git add .
git commit -m "Your changes"
git push  # Vercel/Netlify auto-deploys
```

---

## ✅ Pre-Deployment Checklist

- [ ] All content updated in `portfolioData.js`
- [ ] All images added and paths correct
- [ ] `npm run build` succeeds
- [ ] No console errors in dev tools
- [ ] Mobile responsive verified
- [ ] Dark/light mode works
- [ ] All links functional
- [ ] Meta tags updated
- [ ] Favicon present
- [ ] Contact form configured (if desired)
- [ ] Spelling and grammar checked

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| npm install fails | See `INSTALLATION_HELP.md` |
| Styles not loading | Clear cache, rebuild with `npm install && npm run dev` |
| Images not showing | Check paths start with `/`, verify in `public/` |
| Port 3000 in use | Run `npm run dev -- --port 3001` |
| Dark mode not working | Clear browser cache and localStorage |
| Build fails | Check console for errors, ensure all imports valid |

---

## 📞 Support Resources

1. **Quick Start:** Read `QUICK_START.md` first
2. **Detailed Setup:** See `SETUP_GUIDE.md`
3. **Installation Issues:** Check `INSTALLATION_HELP.md`
4. **Full Docs:** Read `README.md`
5. **Code Issues:** Check component files for inline comments

---

**Your portfolio is complete and ready!** 🎉

Start with `QUICK_START.md` and follow the customization checklist.

Good luck! 🚀
