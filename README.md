# Bigyan Aryal's Portfolio Website

A fully static, production-ready personal portfolio website for Bigyan Aryal - Computer Engineering Student & AI Enthusiast.

## 👨‍🎓 About

This portfolio showcases my journey as a Computer Engineering student at Paschimanchal Campus, IOE, TU, Pokhara. It features my projects in deep learning, computer vision, NLP, and web development with Django.

## 🎯 Features

- **Fully Static**: No backend required, just HTML, CSS, and JavaScript
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Modern UI**: Clean, minimalist design with smooth animations
- **Project Showcase**: Interactive project cards with detailed modals
- **Experience Timeline**: Visual timeline of professional experience
- **Contact Form**: Mock form submission (easily replaceable with Formspree or other services)
- **SEO Optimized**: Includes JSON-LD schema markup
- **Performance Optimized**: Lazy loading, smooth scrolling, and efficient animations

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS via CDN
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Inter and Fira Code fonts
- **CSS3**: Custom animations and transitions

## 📁 Project Structure

```
bigyan08.github.io/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── data.js             # Projects and experience data
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Open Directly in Browser

Simply open `index.html` in any modern web browser.

### Option 2: Local Development Server

Using Python:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx serve
```

Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📝 Customization Guide

### Update Personal Information

Edit `index.html`:
- Hero section: Update name, role, and tagline (lines 90-108)
- About section: Update biography text (lines 113-135)

### Modify Projects

Edit `data.js` - the `projects` array:
```javascript
{
    id: 1,
    title: "Your Project Title",
    shortDescription: "Brief description",
    fullDescription: "Detailed description",
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    demo: null, // or "https://demo-url.com"
    image: "📝", // Emoji or image URL
    details: [
        "Feature 1",
        "Feature 2"
    ]
}
```

### Update Experience

Edit `data.js` - the `experiences` array:
```javascript
{
    id: 1,
    date: "2024 - Present",
    title: "Your Position",
    description: "Description of your role and achievements"
}
```

### Modify Skills

Edit `index.html` - Skills section (lines 143-181):
- Add/remove skill categories
- Add/remove individual skills

### Change Color Scheme

Edit the Tailwind config in `index.html` (lines 12-25):
```javascript
colors: {
    primary: '#1e40af',  // Change primary color
    secondary: '#64748b', // Change secondary color
}
```

### Contact Form Integration

Replace the mock form handler in `script.js` (lines 162-190) with:

**Option A: Formspree**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
});
```

**Option B: Web3Forms**
```javascript
const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY',
        ...formData
    })
});
```

### Add Your Resume

1. Add `resume.pdf` to the project root
2. Update the resume link in `script.js` (lines 270-277):
```javascript
window.location.href = '/resume.pdf';
```

### Update Social Links

Edit `index.html` - Social links section (lines 305-320):
- GitHub: Line 306
- LinkedIn: Line 313

## 🎨 Customizing Styles

### Custom CSS

All custom styles are in `styles.css`. Key sections:
- Skill tags (lines 21-43)
- Project cards (lines 45-80)
- Timeline (lines 133-169)
- Modal animations (lines 172-184)

### Tailwind Classes

Modify Tailwind classes directly in `index.html` for quick styling changes.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Images**: Replace emoji placeholders with actual project images
2. **Fonts**: Consider self-hosting fonts for better performance
3. **Tailwind**: Use the Tailwind CLI to generate a minimal CSS file
4. **Minification**: Minify HTML, CSS, and JS before deployment

## 🌐 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main) and folder (root)
4. Your site will be available at `https://username.github.io`

### Netlify

1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Deploy settings: none needed (static site)

### Vercel

```bash
npm i -g vercel
vercel
```

### Other Hosts

Upload all files to any static hosting service (AWS S3, Cloudflare Pages, etc.)

## 🔧 Advanced Customization

### Add Project Images

1. Create an `images` folder
2. Add project screenshots
3. Update `data.js`:
```javascript
image: "images/project-name.jpg"
```
4. Update `renderProjects()` in `script.js` to use `<img>` instead of emoji

### Add Blog Section

1. Create a `blog` array in `data.js`
2. Add a blog section in `index.html`
3. Add rendering logic in `script.js`

### Add Animations

Use the existing animation classes:
- `.fade-in` - Fade in from bottom
- Add more in `styles.css`

### Analytics Integration

Add before closing `</head>` tag in `index.html`:

**Google Analytics**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Contact

- **Email**: bigyan8aryal@gmail.com
- **GitHub**: [@bigyan08](https://github.com/bigyan08)
- **LinkedIn**: [Bigyan Aryal](https://www.linkedin.com/in/bigyan-aryal-2b4869295/)
- **Location**: Tilottama-7, Rupandehi, Nepal

---

Built with ❤️ using HTML, Tailwind CSS, and JavaScript
