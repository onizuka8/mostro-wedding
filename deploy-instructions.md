# How to Publish Your Wedding Website for Free

## Option 1: Netlify (Easiest - Recommended)

### Step 1: Prepare Your Files
1. Make sure all your files are ready:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (you can use GitHub, Google, or email)
3. Once logged in, click "Add new site" → "Deploy manually"
4. Drag and drop your entire folder (or zip it first)
5. Wait for deployment (usually 30 seconds)
6. Your site will be live at a URL like: `https://amazing-name-123456.netlify.app`

### Step 3: Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. You can buy a domain through Netlify or use your own
4. Examples: `john-and-jane-wedding.com` or `our-game-tutorials.com`

## Option 2: GitHub Pages (Free & Professional)

### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Create Repository
1. Click "New repository"
2. Name it: `wedding-games` or `mostro-wedding`
3. Make it public
4. Don't initialize with README (we already have one)

### Step 3: Upload Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your files
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository "Settings"
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be at: `https://yourusername.github.io/wedding-games`

## Option 3: Vercel (Best Performance)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket

### Step 2: Deploy
1. Click "New Project"
2. Import your GitHub repository (if using GitHub)
3. Or drag and drop your files
4. Click "Deploy"
5. Your site will be live instantly

## Option 4: Surge.sh (Quick & Simple)

### Step 1: Install Surge
```bash
npm install --global surge
```

### Step 2: Deploy
```bash
cd /path/to/your/wedding-website
surge
```

### Step 3: Follow Prompts
1. Enter your email
2. Create a password
3. Choose a subdomain (e.g., `mostro-wedding.surge.sh`)
4. Your site is live!

## 🌐 **Custom Domain Options**

### Free Subdomain Examples:
- `mostro-wedding.netlify.app`
- `yourusername.github.io/wedding-games`
- `mostro-wedding.vercel.app`
- `mostro-wedding.surge.sh`

### Paid Custom Domain (Optional):
- `john-and-jane-wedding.com` (~$10-15/year)
- `our-game-tutorials.com` (~$10-15/year)
- `wedding-games-2024.com` (~$10-15/year)

## 📱 **QR Code Strategy After Deployment**

Once your site is live, create QR codes for each game:

### Example URLs:
- **Catan**: `https://your-site.netlify.app?game=1`
- **Ticket to Ride**: `https://your-site.netlify.app?game=2`
- **Pandemic**: `https://your-site.netlify.app?game=3`

### QR Code Tools:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)
- [QR Code Scanner](https://www.qrcode-scanner.com/)

## 🎯 **Recommended Approach**

1. **Start with Netlify** - easiest for beginners
2. **Test everything** - make sure all links work
3. **Create QR codes** - one for each game
4. **Consider custom domain** - if you want a professional URL
5. **Share with family** - get feedback before the wedding

## 🔧 **Troubleshooting**

### Common Issues:
- **Images not loading**: Check file paths
- **Videos not playing**: Make sure YouTube URLs are correct
- **Mobile issues**: Test on different devices
- **QR codes not working**: Verify URLs are correct

### Support:
- Netlify: Excellent documentation and support
- GitHub: Large community, lots of help available
- Vercel: Great performance, good support

---

**Choose Netlify for the easiest experience, or GitHub Pages if you want to learn something new!**
