# Wedding Board Game Tutorials Website

A beautiful, responsive website for sharing board game tutorial videos at a wedding. Guests can scan QR codes to access tutorial videos for various board games.

## Features

- 🎨 Modern, elegant design with gradient backgrounds
- 📱 Fully responsive - works on all devices
- 🎥 YouTube video integration with modal popups
- 🎮 Sample board games included (easily customizable)
- ✨ Smooth animations and hover effects
- 🔍 QR code ready - each game can have its own QR code

## Quick Start

1. **Open the website**: Simply open `index.html` in a web browser
2. **Customize the content**: Edit the files below to personalize for your wedding
3. **Add your videos**: Replace the sample YouTube URLs with your actual tutorial videos
4. **Generate QR codes**: Create QR codes for each game that link to your website

## Customization Guide

### 1. Update Wedding Information

Edit `index.html` to update:
- Couple's names (replace `[Groom's Name]` and `[Bride's Name]`)
- Wedding date (replace `[Wedding Date]`)
- Any other personal details

### 2. Add Your Board Games

Edit `script.js` and modify the `games` array. Each game should have:

```javascript
{
    id: 1,
    title: "Game Name",
    description: "Brief description of the game",
    duration: "X min",
    difficulty: "Easy/Medium/Hard",
    youtubeUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    icon: "🎮" // Emoji or icon for the game
}
```

### 3. YouTube Video Integration

To add your YouTube videos:

1. **Get the embed URL**: 
   - Go to your YouTube video
   - Click "Share" → "Embed"
   - Copy the URL from the iframe code
   - It should look like: `https://www.youtube.com/embed/VIDEO_ID`

2. **Or convert a regular YouTube URL**:
   - Regular URL: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Embed URL: `https://www.youtube.com/embed/VIDEO_ID`

3. **Update the games array** with your embed URLs

### 4. Customize Colors and Styling

Edit `styles.css` to change:
- Color scheme (search for `#667eea` and `#764ba2` for the main gradients)
- Fonts (currently using Playfair Display and Inter)
- Layout and spacing
- Animations and effects

### 5. Add Game Images (Recommended)

The website now uses actual board game images instead of emoji icons! Here's how to add your images:

#### Option A: Use the Image Generator (Easiest)
1. Open `create-placeholder-images.html` in your browser
2. Click on any game card to generate a custom image
3. Download the generated image
4. Save it in the `images/` folder with the correct filename:
   - `catan.jpg`
   - `ticket-to-ride.jpg`
   - `pandemic.jpg`
   - `carcassonne.jpg`
   - `settlers-catan.jpg`
   - `pandemic-legacy.jpg`

#### Option B: Use Real Board Game Photos
1. Take photos of your actual board games
2. Crop them to 300x200 pixels (or similar aspect ratio)
3. Save them in the `images/` folder with the filenames above
4. Make sure the images are clear and show the game box/board well

#### Option C: Find Images Online
1. Search for board game box art (ensure you have rights to use them)
2. Download and resize to 300x200 pixels
3. Save in the `images/` folder

#### Fallback System
If an image fails to load, the website will automatically show a game controller emoji (🎮) as a fallback.

#### Image Requirements:
- **Format**: JPG or PNG
- **Size**: 300x200 pixels (or similar aspect ratio)
- **Quality**: Clear, well-lit images
- **Content**: Game box art or board setup

## Direct Game Links & QR Codes

The website now supports direct links to specific games! This is perfect for creating individual QR codes for each game.

### URL Formats

You can link directly to any game using these URL formats:

1. **By Game ID**: `https://yourwebsite.com/index.html?game=1`
2. **By Game Slug**: `https://yourwebsite.com/index.html?slug=catan`

### QR Code Strategy

For each game, create a QR code that links directly to that specific game:

- **Catan**: `https://yourwebsite.com/index.html?game=1` or `https://yourwebsite.com/index.html?slug=catan`
- **Ticket to Ride**: `https://yourwebsite.com/index.html?game=2` or `https://yourwebsite.com/index.html?slug=ticket-to-ride`
- **Pandemic**: `https://yourwebsite.com/index.html?game=3` or `https://yourwebsite.com/index.html?slug=pandemic`

### QR Code Generation Tools

- **Online QR generators**: qr-code-generator.com, qrcode-monkey.com
- **QR code apps**: Most smartphones have built-in QR code generators
- **Free online tools**: qrcode.tec-it.com, qr-code-generator.com

### How It Works

When someone scans a QR code or visits a direct link:
1. The page loads normally
2. The specific game video automatically opens in a modal
3. The URL updates to show which game is being viewed
4. When the modal is closed, the URL returns to the main page

## Sample Games Included

The website comes with sample data for popular board games:
- Catan
- Ticket to Ride
- Pandemic
- Carcassonne
- Settlers of Catan
- Pandemic Legacy

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Deployment

### Local Testing
Simply open `index.html` in any web browser.

### Web Hosting
Upload all files to any web hosting service:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Any traditional web hosting

### File Structure
```
your-wedding-website/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/ (optional)
    ├── game1.jpg
    ├── game2.jpg
    └── ...
```

## Tips for Wedding Use

1. **Test on mobile devices** - most guests will use phones
2. **Keep videos short** - 5-10 minutes is ideal for wedding guests
3. **Use simple language** - explain rules clearly and concisely
4. **Add personal touches** - mention why you love each game
5. **Consider game difficulty** - include games for different skill levels

## Support

If you need help customizing the website:
1. Check this README for common customization tasks
2. Look at the sample code for examples
3. The code is well-commented for easy understanding

## License

This project is open source and free to use for personal and commercial purposes.

---

**Happy wedding planning! 🎉**
