# Portfolio Setup Guide 🚀

## Quick Start (3 Steps)

### Step 1: Install & Run
```bash
cd portfolio
npm install
npm run dev
```
Visit `http://localhost:3000` - your portfolio is live!

### Step 2: Customize Your Data
Edit `src/data/portfolioData.js` and update:

1. **Personal Info** (Line 2-10)
   ```javascript
   name: "Your Name",
   role: "Your Job Title",
   email: "your.email@example.com",
   location: "Your City, Country",
   ```

2. **Social Links** (Line 13-30)
   ```javascript
   url: "https://github.com/yourusername",
   url: "https://linkedin.com/in/yourprofile",
   ```

3. **Skills** (Line 33-57)
   - Add/remove from `frontend`, `backend`, `tools`

4. **Projects** (Line 60-130)
   - Replace with your actual projects
   - Update `liveUrl` and `githubUrl`

5. **Experience** (Line 133-200)
   - Your work history

6. **Education** (Line 203-235)
   - Your degrees and certifications

7. **Testimonials** (Line 294-335)
   - Add client/colleague testimonials

### Step 3: Add Your Images
Replace placeholder images:
- Profile photo: Create `/public/images/profile.jpg`
- Project images: Create `/public/projects/` folder
- Update image paths in `portfolioData.js`

## Customization Guide

### Change Colors
Edit in `index.html`:
```html
<style>
  :root {
    --color-primary: #your-color;
    --color-accent: #your-accent;
  }
</style>
```

### Update Hero Section
In `src/data/portfolioData.js`:
```javascript
bio: "Your headline here",
introduction: "Your intro paragraph",
```

### Modify Navigation Links
In `src/data/portfolioData.js`:
```javascript
export const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  // Add or remove links
];
```

### Custom Font
In `src/index.css`, update the font-family

## Deploy to Production

### Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Deploy! 🎉

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build settings:
   - Command: `npm run build`
   - Publish: `dist`
6. Deploy!

### GitHub Pages
```bash
# Update vite.config.js base path first
npm run build
# Push to GitHub
```

## Add Contact Form Integration

Choose one:

### EmailJS (Easiest)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your Service ID and Template ID
3. In `src/sections/Contact.jsx`, uncomment EmailJS code
4. Add your IDs

### Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Get your form ID
4. In `Contact.jsx`, update the endpoint

### Web3Forms
1. Visit [web3forms.com](https://web3forms.com)
2. Get your access key
3. Add to Contact.jsx

## SEO Optimization

### Update Page Title & Meta
In `index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name" />
<meta property="og:description" content="Your description" />
```

### Add Favicon
Place your favicon at `public/favicon.svg`

## Performance Checklist

- [ ] Optimize all images (use tools like TinyPNG)
- [ ] Update all placeholder content
- [ ] Test on mobile devices
- [ ] Check performance with Lighthouse
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check dark/light mode toggle
- [ ] Verify responsive design

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Styles not loading?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Need to add a new section?**
1. Create file in `src/sections/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to main section
4. Update navigation in `portfolioData.js`

## File Structure Reminder
```
portfolio/
├── src/
│   ├── components/      ← Reusable UI parts
│   ├── sections/        ← Page sections
│   ├── data/
│   │   └── portfolioData.js  ← EDIT THIS FILE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/              ← Add images here
├── package.json
├── README.md
└── index.html
```

## Need Help?

1. Check `README.md` for detailed documentation
2. Review component files for structure
3. Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
4. Framer Motion: [framer.com/motion](https://www.framer.com/motion)

## Next Steps

1. ✅ Update `portfolioData.js` with your info
2. ✅ Add your images to `public/`
3. ✅ Customize colors and fonts
4. ✅ Test on mobile
5. ✅ Deploy to Vercel or Netlify
6. ✅ Add contact form integration
7. ✅ Share your portfolio! 🎉

---

**Happy building! Your portfolio is ready to impress. 🚀**
