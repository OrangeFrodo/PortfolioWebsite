# 🚀 Quick Start Guide

## See Your New Portfolio in 30 Seconds

```bash
cd /home/orangefrodo/Documents/Dev/PortfolioWebsite
npm start
```

Opens at: **http://localhost:3000**

---

## ✏️ What to Update Right Now

### 1. **Add Your Certificates** (5 min)

**File:** `src/components/pages/certificates.tsx`

**Find this:**
```typescript
const certificates: Certificate[] = [
    {
        name: "Certificate Name 1",
        issuer: "Issuing Organization",
        date: "Month Year",
        description: "Brief description...",
        link: "#"
    },
```

**Replace with YOUR certificates:**
```typescript
{
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "April 2026",
    description: "Demonstrates proficiency in developing applications on AWS.",
    link: "https://verify-link.com"
}
```

---

### 2. **Update Hero Section** (2 min)

**File:** `src/components/pages/heroSection.tsx`

**Current:**
```typescript
developerName = "Jakub Daxner"
currentPosition = "unemployed"
hobbies = ["Gym", "Movies", "Books", "Philosophy"]
```

**Update to match reality!**

---

### 3. **Check Your Skills** (3 min)

**File:** `src/components/pages/skills.tsx`

Update the percentage values if needed:
```typescript
{ name: "React", bgcolor: "#FF9800", completed: 72 },
```

---

### 4. **Verify Projects** (2 min)

**File:** `src/components/content.json`

Make sure your project details are current:
- Links work
- Descriptions are accurate
- Images exist

---

## 🎨 Quick Customizations

### Change Orange to Another Color

**File:** `src/components/pages/stylesPages.css`

**Find:**
```css
:root {
  --primary-orange: #FF9800;
  --primary-yellow: #FFC107;
```

**Change to your color:**
```css
:root {
  --primary-orange: #YOUR_COLOR;
  --primary-yellow: #LIGHTER_SHADE;
```

---

### Change Logo/Emoji

**File:** `src/components/navbar-2.tsx`

**Current:**
```tsx
<a href="#/" className="header__content__logo">Portfolio</a>
```

**In CSS (navbar.scss):**
```scss
&__logo {
    &::before {
        content: '🦊';  // Change this emoji
```

---

### Update Contact Info

**File:** `src/components/pages/contact.tsx`

```typescript
const contactItems = [
    {
        icon: "📧",
        label: "Email",
        value: "YOUR_EMAIL@gmail.com",
        link: "mailto:YOUR_EMAIL@gmail.com"
    },
```

---

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

Creates optimized files in `build/` folder.

---

## 🚢 Deploy Options

### Option 1: Netlify (Easiest)
1. Go to https://netlify.com
2. Drag & drop your `build/` folder
3. Done! ✅

### Option 2: Vercel
1. Go to https://vercel.com
2. Import from GitHub
3. Auto-deploys on push ✅

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
npm run deploy
```

---

## 📋 Pre-Launch Checklist

### Content
- [ ] Certificates updated with real data
- [ ] Hero section info is current
- [ ] Skills percentages are accurate
- [ ] Projects have working links
- [ ] Contact info is correct

### Testing
- [ ] Open on laptop/desktop (Chrome, Firefox, Safari)
- [ ] Test on phone (responsive)
- [ ] Click all navigation links
- [ ] Verify all project links work
- [ ] Check certificate links
- [ ] Test contact links (email, GitHub)

### Polish
- [ ] Scroll through entire page smoothly
- [ ] Check animations work
- [ ] Hover effects feel good
- [ ] Mobile menu works
- [ ] No console errors (F12)

### Deploy
- [ ] Build runs without errors (`npm run build`)
- [ ] Choose hosting platform
- [ ] Deploy
- [ ] Test live site
- [ ] Share with friends for feedback

---

## 🐛 Troubleshooting

### "npm start" fails
```bash
rm -rf node_modules
npm install
npm start
```

### Port 3000 in use
```bash
PORT=3001 npm start
```

### Build fails
Check console for specific error. Usually:
- Syntax error in code
- Missing import
- Typo in JSX

### Animations not smooth
- Clear browser cache
- Try different browser
- Check if hardware acceleration is on

---

## 💡 Tips

### Development
- Keep `npm start` running while editing
- Changes appear instantly (hot reload)
- Check browser console for errors (F12)

### Content
- Keep descriptions concise
- Use professional language
- Proofread everything
- Get someone to review it

### Performance
- Optimize images before adding
- Use WebP format when possible
- Keep total page size under 5MB

---

## 📞 Need Help?

### Common Questions

**Q: How do I add more certificates?**
A: Just add more objects to the `certificates` array in `certificates.tsx`

**Q: Can I change the orange color?**
A: Yes! Update CSS variables in `stylesPages.css` (see above)

**Q: How do I add more projects?**
A: Update `content.json` and `listOfProjects.tsx`

**Q: Mobile menu not working?**
A: Check `navbar-2.tsx` - the toggle function should work

---

## 🎯 Next Steps After Launch

1. **Share Your Portfolio**
   - LinkedIn profile
   - GitHub README
   - Resume/CV
   - Email signature

2. **Monitor Performance**
   - Google Analytics (optional)
   - PageSpeed Insights
   - Check on different devices

3. **Keep Updated**
   - Add new projects
   - Update skills
   - Add new certificates
   - Refresh content regularly

4. **Get Feedback**
   - Show to friends
   - Post in communities
   - Ask for honest feedback
   - Iterate and improve

---

## 🎉 You're Ready!

Your portfolio is:
- ✅ Professional
- ✅ Animated
- ✅ Responsive
- ✅ Modern
- ✅ Ready to impress

**Now go get that job! 💼🚀**

---

*Built with 🦊 by Max*
