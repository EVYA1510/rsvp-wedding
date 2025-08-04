# Wedding RSVP Website 💍

A beautiful, modern wedding RSVP website for Evyatar and Shoval's wedding. Built with HTML, CSS, and JavaScript, optimized for Vercel deployment.

## Features ✨

- **Modern Design**: Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- **Countdown Timer**: Real-time countdown to the wedding date with dynamic updates
- **Interactive RSVP Form**:
  - Attendance status selection
  - Guest count input (for attendees)
  - Optional blessing/message field
- **Beautiful Animations**:
  - Fade-in/out transitions
  - Loading states
  - Success animations with heart beat effect
  - Hover effects and micro-interactions
- **Responsive Design**: Works perfectly on all devices
- **Hebrew RTL Support**: Proper right-to-left text direction
- **Google Sheets Integration**: RSVP responses are automatically saved to Google Sheets
- **Calendar Integration**: One-click Google Calendar event addition
- **Navigation Links**: Direct links to venue location

## File Structure 📁

```
rsvp-wedding/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS with animations
├── script.js           # JavaScript functionality
├── invitation.png      # Wedding invitation image
├── vercel.json         # Vercel deployment configuration
└── README.md          # This file
```

## Deployment 🚀

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. The project will automatically deploy with the optimized configuration
3. All files are in the root directory for proper Vercel serving

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve with a local server: `python -m http.server 8000`

## Customization 🎨

### Wedding Details

- **Date**: September 9, 2025
- **Time**: 19:00 (7:00 PM)
- **Venue**: אולם הפרדס, רחובות (Pardes Hall, Rehovot)

### Google Sheets Integration

The form submits to a Google Apps Script endpoint. To set up your own:

1. Create a Google Sheet
2. Set up Google Apps Script
3. Update the fetch URL in `script.js`

### Styling

- Colors: Pink and purple gradient theme
- Fonts: Varela Round (body), Playfair Display (headings)
- Animations: Custom CSS keyframes and Animate.css

## Features in Detail 🔍

### Countdown Timer

- Updates every minute
- Shows days, hours, or minutes remaining
- Special message when wedding day arrives
- Animated with floating and sparkle effects

### RSVP Form

- Dynamic guest count field (appears only for attendees)
- Form validation and error handling
- Loading states and success animations
- Beautiful thank you message with heart beat animation

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Proper RTL layout for Hebrew

## Browser Support 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Optimizations ⚡

- Minimal dependencies (only Tailwind CSS CDN)
- Optimized images
- Efficient animations
- Clean, semantic HTML
- Proper caching headers

## Security 🔒

- XSS protection headers
- Content type security
- Frame options protection
- Clean URLs configuration

---

Made with ❤️ for Evyatar and Shoval's special day!
