# 🚀 Quick Start Guide

Welcome to your new personal website! Follow these simple steps to get started.

## ✅ What's Included

Your website has 4 pages:
- **Home** (index.html) - About you and your story
- **Interests** (pages/interests.html) - Your hobbies in a gallery
- **Travel** (pages/travel.html) - Your travel adventures with blog posts
- **Contact** (pages/contact.html) - Ways to get in touch

## 📝 Step 1: View Your Website

1. Open File Explorer and navigate to this folder
2. Double-click `index.html` to open it in your browser
3. Click through all the pages to see what's there
4. Try the dark mode toggle (moon/sun icon) in the navigation
5. Resize your browser to see the mobile responsive design

## ✏️ Step 2: Add Your Personal Information

### Update the Home Page (`index.html`)

Find and replace these placeholders:
- `[Your Name]` → Your actual name
- `[Your Hometown/Country]` → Where you're from
- `[Your Job Title]` → Your profession
- Update the hero description and about section with your story
- Replace skill tags with your actual skills

### Update the Navigation Brand

In all HTML files, find:
```html
<a href="..." class="navbar-brand">✨ My Space</a>
```
Change "My Space" to your preferred name or initials.

### Update the Footer

In all HTML files, find:
```html
© 2026 [Your Name]. Made with 💖 and creativity.
```
Replace `[Your Name]` with your name.

## 🎨 Step 3: Customize Your Interests

Open `pages/interests.html` and edit the interest cards:

1. Find each `<div class="interest-card">` section
2. Update `data-title` with your interest name
3. Update `data-description` with your detailed description
4. Update the card body text
5. Add more cards or remove ones you don't need (just copy/paste the entire card div)

**Pro tip:** Keep the same structure but change the content!

## 🌍 Step 4: Add Your Travel Stories

Open `pages/travel.html`:

1. Update the travel stats (countries visited, cities, continents)
2. For each country card:
   - Change the country name and flag emoji
   - Update the visit date and duration
   - Replace the blog post text with your actual experience
   - Adjust the number of gallery items as needed
3. Add more countries or remove ones you haven't visited

## 📧 Step 5: Update Contact Information

Open `pages/contact.html`:

1. Replace `your.email@example.com` with your real email
2. Update phone number (or remove if you don't want to share)
3. Update your location
4. Link your social media profiles:
   ```html
   <a href="https://instagram.com/yourusername" class="social-card">
   ```

## 🖼️ Step 6: Add Your Images (Optional)

Currently using emoji placeholders. To add real images:

1. Create an `images` folder in your project
2. Add subfolders: `interests/` and `travel/`
3. Add your photos to these folders
4. Replace emoji placeholders:

**Before:**
```html
<div class="interest-card-image">📸</div>
```

**After:**
```html
<img src="../images/interests/photography.jpg" alt="Photography" class="interest-card-image">
```

## 🎨 Step 7: Customize Colors (Optional)

Want different colors? Edit `css/variables.css`:

```css
:root {
  --color-primary: #B76E79;        /* Change this to your favorite color */
  --color-primary-light: #E8B4B8;  /* A lighter version */
  --color-accent: #D4AF37;         /* Accent color for highlights */
}
```

Try these alternatives:
- **Lavender**: `#9B7EBD`, `#C5B4E3`
- **Sage Green**: `#87AE73`, `#B8D4A8`
- **Coral**: `#FF6B6B`, `#FFBABA`
- **Teal**: `#4A9E9A`, `#7EC4C1`

## 🚀 Step 8: Publish Your Website

### Option A: GitHub Pages (Recommended - Free!)

1. Create a GitHub account if you don't have one
2. Create a new repository (call it "my-website" or your username)
3. Upload your files or use Git:
   ```bash
   git init
   git add .
   git commit -m "My website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
4. Go to repo Settings → Pages → Select "main" branch → Save
5. Your site will be live at `https://yourusername.github.io/your-repo`

### Option B: Netlify (Super Easy!)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your entire project folder
4. Done! Your site is live instantly

### Option C: Run Locally

If you just want to test locally:
```bash
# In VS Code, right-click index.html → "Open with Live Server"
# OR use Python:
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 🔧 Troubleshooting

**Navigation not working?**
- Make sure you're opening from the correct folder
- Check that all file paths are correct (especially if you moved files)

**Dark mode not persisting?**
- Some browsers block localStorage on local files
- Deploy to a server or use a local server

**Styles not loading?**
- Check browser console (F12) for errors
- Verify all CSS files are in the `css/` folder
- Make sure paths in `<link>` tags are correct

**Mobile menu not working?**
- Check browser console for JavaScript errors
- Make sure all JS files are properly linked

## 📚 Next Steps

✅ Personalize all content
✅ Add your images
✅ Test on mobile devices
✅ Share with friends for feedback
✅ Deploy to the internet
✅ Update your social media with your new website link!

## 💡 Tips

1. **Start Simple** - Get the text right first, add fancy images later
2. **Test Often** - Check every change in the browser
3. **Mobile First** - Most visitors will be on phones
4. **Keep It Updated** - Add new travel stories and interests as you go
5. **Be Yourself** - Let your personality shine through!

## 🆘 Need Help?

- Check the full README.md for detailed information
- Look at the browser console (F12) for error messages
- Google any CSS or JavaScript questions
- Most issues are simple typos or incorrect file paths

## 🎉 You're Ready!

Your website is complete and ready to customize. Take it step by step, and don't rush. Have fun making it yours!

**Happy customizing! 💖**
