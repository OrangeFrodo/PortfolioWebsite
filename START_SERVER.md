# How to Start Your Portfolio

## Development Mode

```bash
cd /home/orangefrodo/Documents/Dev/PortfolioWebsite
npm start
```

This will:
- Start the development server
- Open your browser at `http://localhost:3000`
- Enable hot reloading (changes appear instantly)

## Production Build

To create an optimized production build:

```bash
npm run build
```

Then serve it:

```bash
npx serve -s build
```

## What to Update

### 1. **Add Your Certificate Details**
Edit: `src/components/pages/certificates.tsx`

Replace the placeholder certificate data with your actual certificates:

```typescript
const certificates: Certificate[] = [
    {
        name: "Your Certificate Name",
        issuer: "Organization Name",
        date: "Month Year",
        description: "What you learned/achieved",
        link: "https://verify-link.com" // optional
    },
    // Add your second certificate
];
```

### 2. **Add Certificate Images (Optional)**
If you want to add images to your certificates:
- Place images in `public/images/certificates/`
- Update the certificate component to include an image field

### 3. **Update Content.json**
Make sure your project details in `src/components/content.json` are up to date.

### 4. **Test Everything**
- Check all sections scroll smoothly
- Verify animations work on different screen sizes
- Test on mobile (responsive design)
- Check all links work

## Enjoy Your New Portfolio! 🚀
