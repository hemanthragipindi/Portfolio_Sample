# ⚡ QUICK REFERENCE CARD

Save this for quick lookups!

---

## 🚀 Get Started (Right Now!)

```bash
cd "C:\Users\ADMIN\OneDrive\Desktop\portfolio"
npm run dev
```

Visit: http://localhost:3000

---

## 📝 Edit Your Content

**File:** `src/data/portfolioData.js`

```javascript
// Your basic info
name: "Your Name"
role: "Your Job Title"
email: "your@email.com"

// Your links
socialLinks: [{ ... }]

// Your skills
skills: { frontend: [...], backend: [...] }

// Your projects
projects: [{ ... }]

// Your experience
experience: [{ ... }]
```

---

## 🎨 Change Colors

**File:** `index.html` (line 16)

```html
--color-accent: #3b82f6;  <!-- Change this to your color -->
```

Popular colors:
- Blue: `#3b82f6`
- Purple: `#a855f7`
- Pink: `#ec4899`
- Teal: `#14b8a6`

---

## 🖼️ Add Images

1. Create folders:
   - `public/images/`
   - `public/projects/`

2. Add images

3. Update paths in `portfolioData.js`

---

## 📁 File Structure

```
portfolio/
├── src/
│   ├── data/
│   │   └── portfolioData.js      ⭐ YOUR CONTENT
│   ├── components/               ← UI parts (8 files)
│   ├── sections/                 ← Page sections (9 files)
│   ├── App.jsx                   ← Main component
│   ├── main.jsx                  ← Entry point
│   └── index.css                 ← Global styles
├── public/                       ← Add images here
├── index.html                    ← Update title/meta
├── package.json                  ← Dependencies
└── README.md                     ← Documentation
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| **QUICK_START.md** | 5-min setup |
| **INDEX.md** | Navigation |
| **README.md** | Full docs |
| **FILE_REFERENCE.md** | File guide |
| **CHECKLIST.md** | Launch list |
| **SUMMARY.md** | Overview |

---

## 🎯 Setup Checklist

- [ ] `npm run dev` → Works?
- [ ] Edit `portfolioData.js` → Your info
- [ ] Add images → `public/` folder
- [ ] Change colors → `index.html`
- [ ] Test mobile → F12 DevTools
- [ ] Test dark mode → Toggle button
- [ ] `npm run build` → Success?
- [ ] Deploy → Vercel/Netlify

---

## 🚀 Deploy (Choose One)

### Vercel (5 minutes)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy! 🎉

### Netlify (5 minutes)
1. Push to GitHub
2. Go to netlify.com
3. Connect repository
4. Deploy! 🎉

---

## 🔑 Key Commands

```bash
# Start dev server (hot-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clear everything and reinstall
rm -r node_modules package-lock.json
npm install
```

---

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

All sections are responsive!

---

## 🎨 Component Reference

### Reusable Components
- `Button.jsx` → Customizable button
- `Navbar.jsx` → Navigation with mobile menu
- `Footer.jsx` → Footer
- `ProjectCard.jsx` → Project display
- `SkillCard.jsx` → Skill card
- `TestimonialCard.jsx` → Testimonial
- `ExperienceItem.jsx` → Timeline item
- `SectionHeading.jsx` → Section title

### Page Sections
- `Hero.jsx` → Intro
- `About.jsx` → Your story
- `Skills.jsx` → Skills grid
- `Projects.jsx` → Projects grid
- `Experience.jsx` → Timeline
- `Education.jsx` → Education
- `Achievements.jsx` → Stats
- `Testimonials.jsx` → Testimonials
- `Contact.jsx` → Contact form

---

## 🔗 Form Integration

Contact form ready for:
- EmailJS
- Formspree
- Web3Forms
- Custom backend

See `SETUP_GUIDE.md` for code.

---

## 🎨 Icon Names (Lucide React)

Use at: https://lucide.dev

Common icons:
- `Zap` → Lightning bolt
- `Code` → Code brackets
- `Server` → Server
- `Database` → Database
- `Github` → GitHub
- `Linkedin` → LinkedIn
- `Mail` → Email
- `ExternalLink` → External link

---

## 🐛 Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| Port in use | `npm run dev -- --port 3001` |
| Styles broken | Clear cache, reinstall |
| Images missing | Check path starts with `/` |
| Dark mode broken | Clear localStorage |
| Build fails | Check console, check imports |

---

## 📊 What's Inside

✅ 8 Reusable Components  
✅ 9 Full Page Sections  
✅ Dark/Light Mode  
✅ Fully Responsive  
✅ Smooth Animations  
✅ Contact Form  
✅ SEO Optimized  
✅ Accessibility Ready  
✅ Production Code  
✅ Complete Docs  

---

## 🎯 Next Steps

1. **NOW:** `npm run dev`
2. **SOON:** Edit `portfolioData.js`
3. **THIS WEEK:** Add images & deploy
4. **THIS MONTH:** Share with world!

---

## 💡 Pro Tips

- Use hot-reload during development (changes auto-save)
- Test mobile size while developing (F12 → toggle mobile)
- Optimize images before uploading (TinyPNG)
- Backup your content regularly
- Use Git to track changes
- Deploy early, iterate often

---

## 🔄 Update Workflow

1. Make changes locally
2. Test with `npm run dev`
3. Commit to Git
4. Push to GitHub
5. Vercel/Netlify auto-deploys
6. Done! 🎉

---

## 📞 Need Help?

| Question | Answer |
|----------|--------|
| How to start? | `npm run dev` |
| Where to edit? | `src/data/portfolioData.js` |
| Change colors? | `index.html` line 16 |
| Add images? | `public/` folder |
| Deploy? | Vercel or Netlify |
| Contact form? | See SETUP_GUIDE.md |

---

## ✅ You're All Set!

Your portfolio is **complete, installed, and ready to go**.

Everything works. Just customize it! 🚀

---

**Bookmark this card for quick reference!**

Print it out or save it in your notes.

Happy building! 💪
