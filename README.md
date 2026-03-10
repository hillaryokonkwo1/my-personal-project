# ✨ Personal Website - Rose Gold Edition

A beautiful, modern multi-page personal website with a rose gold/blush pink theme. Built with vanilla HTML, CSS, and JavaScript featuring smooth animations, dark mode, responsive design, and interactive galleries.

![Website Preview](https://via.placeholder.com/1200x600/FFE5EC/B76E79?text=Your+Personal+Website)

## 🌟 Features

### Design & Theme
- **Rose Gold/Blush Pink Color Palette** - Elegant and modern aesthetic
- **Dark Mode Toggle** - Switch between light and dark themes with localStorage persistence
- **Smooth Animations** - Scroll-triggered fade-ins, parallax effects, and hover interactions
- **Fully Responsive** - Mobile-first design that looks great on all devices

### Pages
1. **Home/About** - Hero section with animated gradient, personal story, and work information
2. **Interests Gallery** - Interactive card grid with categories and expandable modals
3. **Travel** - Country cards with expandable photo galleries and blog posts
4. **Contact** - Contact form with social media links

### Interactive Features
- Sticky navigation with mobile hamburger menu
- Intersection Observer for scroll animations
- Modal popups for detailed content
- Expandable country sections with image galleries
- Smooth scrolling and transitions
- Scroll-to-top button
- Progress bar showing scroll position

## 📁 Project Structure

```
My-Website/
├── index.html                 # Home/About page
├── pages/
│   ├── interests.html         # Interests gallery page
│   ├── travel.html            # Travel blog page
│   └── contact.html           # Contact form page
├── css/
│   ├── variables.css          # Design tokens (colors, spacing, typography)
│   ├── global.css             # Base styles and utilities
│   ├── components.css         # Reusable components (nav, cards, modals)
│   ├── animations.css         # Keyframes and animation utilities
│   └── pages/
│       ├── home.css           # Home page specific styles
│       ├── interests.css      # Gallery page styles
│       └── travel.css         # Travel page styles
├── js/
│   ├── nav.js                 # Navigation and mobile menu
│   ├── theme.js               # Dark mode toggle
│   ├── animations.js          # Scroll animations and effects
│   ├── gallery.js             # Interests gallery functionality
│   └── travel.js              # Travel page interactions
├── images/                    # Image assets (add your own)
│   ├── interests/             # Interest gallery images
│   └── travel/                # Travel photos by country
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Optional: A local server for development

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd My-Website
   ```

2. **Open the website**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Customize the content**
   - Replace placeholder text with your own information
   - Add your own images to the `images/` folder
   - Update social media links
   - Customize colors in `css/variables.css`

## 🎨 Customization Guide

### Changing Colors

Edit `css/variables.css` to customize the color palette:

```css
:root {
  --color-primary: #B76E79;        /* Main rose gold color */
  --color-primary-light: #E8B4B8;  /* Light accent */
  --color-accent: #D4AF37;         /* Gold accent */
  --color-background: #FFF5F7;     /* Page background */
  /* ... more variables */
}
```

### Adding Your Content

1. **About Section** (`index.html`)
   - Update text in hero section
   - Replace `[Your Name]` placeholders
   - Modify about cards with your story

2. **Interests** (`pages/interests.html`)
   - Edit interest cards data attributes
   - Add/remove cards as needed
   - Replace emoji icons with actual images

3. **Travel** (`pages/travel.html`)
   - Update country cards
   - Add your travel photos
   - Write your own blog posts

4. **Contact** (`pages/contact.html`)
   - Add your email and contact info
   - Link social media profiles
   - Integrate a form service (see below)

### Making the Contact Form Functional

The contact form is currently a placeholder. To make it work, integrate one of these services:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
```

**Option 3: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

### Adding Real Images

1. Create folders for your images:
   ```
   images/
   ├── hero-bg.jpg
   ├── profile.jpg
   ├── interests/
   │   ├── photography.jpg
   │   ├── cooking.jpg
   │   └── ...
   └── travel/
       ├── japan-1.jpg
       ├── italy-1.jpg
       └── ...
   ```

2. Replace emoji placeholders in HTML with `<img>` tags:
   ```html
   <img src="../images/interests/photography.jpg" alt="Photography" class="interest-card-image">
   ```

## 🌐 Deployment

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. Go to repository Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!
4. Supports custom domains and automatic deployments

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site is deployed!

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Poppins and Inter
- **Intersection Observer API** - Scroll animations
- **LocalStorage API** - Theme persistence

## ✨ Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Hamburger menu for mobile
- Flexible grid layouts

### Animations
- Fade-in on scroll (Intersection Observer)
- Hover effects on cards and buttons
- Smooth page transitions
- Gradient animations
- Parallax scrolling

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion respect (`prefers-reduced-motion`)
- Proper heading hierarchy

## 📝 To-Do / Future Enhancements

- [ ] Add actual images to galleries
- [ ] Integrate functional contact form
- [ ] Add blog section with multiple posts
- [ ] Include a resume/CV download option
- [ ] Add projects portfolio section
- [ ] Implement image lazy loading for performance
- [ ] Add Google Analytics (optional)
- [ ] Create custom favicon
- [ ] Add Open Graph images for social sharing
- [ ] Set up automated testing

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for personal projects. Feel free to customize it and make it your own!

## 🤝 Contributing

This is a personal website template, but suggestions are welcome! If you find bugs or have ideas for improvements:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💖 Acknowledgments

- Color palette inspired by rose gold and blush aesthetics
- Icons: Using emoji for placeholder icons (replace with custom icons or Font Awesome)
- Fonts: Google Fonts (Poppins, Inter)

## 📞 Questions or Issues?

If you have questions about customizing this template or run into issues:

1. Check the browser console for JavaScript errors
2. Verify all file paths are correct
3. Ensure you're using a modern browser
4. Try clearing your browser cache
5. Check that all CSS and JS files are properly linked

## 🎉 Ready to Launch!

Your personal website is ready to go! Here's what to do next:

1. **Personalize** - Add your content, images, and information
2. **Test** - Check all pages on different devices and browsers
3. **Deploy** - Choose a hosting platform and go live
4. **Share** - Update your social media profiles with your new website link
5. **Maintain** - Keep your content fresh and updated

---

**Made with 💖 and creativity**

*Last updated: March 2026*
