# nfrti X - Predictive Maintenance Website

**Ancient Wisdom Meets Modern AI**

A professional single-page website for nfrti X, Egypt's first end-to-end predictive maintenance solution for rotating equipment.

---

## 🎯 Project Overview

This is a fully responsive, interactive website showcasing nfrti X's AI-powered predictive maintenance platform. The site combines storytelling with modern web design to present the company's heritage, solutions, and value proposition.

---

## ✨ Features

### 🎨 Design & UX
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Custom animations for mascot interactions and content transitions
- **Interactive Slider**: Two-slide carousel for downtime costs and ROI calculator
- **Mascot Integration**: Animated mascot character with speech bubbles throughout the site

### 📊 Interactive Components
1. **ROI Calculator**: Calculate potential savings based on industry and equipment data
2. **Downtime Cost Chart**: Interactive bar chart showing industry-specific costs
3. **Contact Form**: Google Apps Script integration for form submissions
4. **Smooth Scrolling**: Section navigation with smooth scroll behavior

### 🚀 Sections
1. **Home**: Hero section with value proposition and key metrics
2. **Heritage**: Story of the ancient sage nfrti with scenic background
3. **Problem**: Interactive slider showcasing downtime costs and ROI calculator
4. **Solution**: Complete platform features and benefits
5. **Contact**: Contact form with testimonials

---

## 🛠️ Technology Stack

### Frontend Libraries (CDN)
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Chart.js**: Interactive data visualization for charts
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter & Kalam fonts for typography

### Structure
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styles with mobile-first responsive design
- **Vanilla JavaScript**: No framework dependencies, pure JS for interactions

---

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Combined stylesheet (mobile-first)
├── js/
│   └── main.js            # Combined JavaScript file
└── README.md              # Project documentation
```

---

## 🎯 Key Features Breakdown

### 1. Interactive Slider (Problem Section)
- **Slide 1**: Downtime cost chart showing costs across 7 industries
- **Slide 2**: ROI calculator with mascot animation during calculation
- Touch-friendly controls with dot navigation and arrow buttons
- Smooth transitions with mascot entrance/exit animations

### 2. ROI Calculator
- Industry-specific cost presets (FMCG, Paper, Buildings, etc.)
- Real-time calculation with animated mascot feedback
- Results displayed in user-friendly k/M notation
- Calculates current loss vs. potential 70% savings

### 3. Heritage Section
- Desktop: Scattered text boxes over background image with road mascot
- Mobile: Stacked glass-morphism text boxes with full background
- Responsive mascot positioning adapts to screen size

### 4. Responsive Design Strategy
- **Mobile (<768px)**: Stacked layout with mascots next to titles
- **Tablet (768-1023px)**: Mixed layout with centered content
- **Desktop (1024px+)**: Full two-column layouts with all mascots visible

---

## 🎨 Design Highlights

### Color Palette
- **Primary Green**: `#017E3A` (nfrti brand color)
- **Accent Yellow**: `#FBBF03` (CTA hover state)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Kalam (handwritten, friendly style)
- **Body**: Inter (clean, professional, excellent readability)

### Animations
- **Floating Mascot**: 3s infinite float animation
- **Slider Transitions**: 0.8s smooth slide animations
- **Mascot Entrance**: Left/right slide entrances for mascots
- **Number Flash**: ROI calculator counting animation

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Strategy |
|------------|-------|-----------------|
| Mobile | <768px | Single column, mascots in titles |
| Tablet | 768-1023px | Mixed, some two-column |
| Desktop | 1024-1199px | Full two-column layouts |
| Large Desktop | 1200-1439px | Optimized spacing |
| XL Desktop | 1440px+ | Max width containers |

---

## 🔗 External Integrations

### Google Apps Script Form
- Contact form submissions sent to Google Sheets
- Endpoint: `https://script.google.com/macros/s/AKfycbyeLOW1IYFWLvkEPs36tadQ6xadJ4LDmac3CBCkMF818PWZxmJc6vfmQiWjzLzksrYV6A/exec`
- No-cors mode with success/error handling

### Social Media Links
- LinkedIn: [nfrtix](https://eg.linkedin.com/company/nfrtix)
- Facebook: [nfrtiX](https://www.facebook.com/nfrtiX/)
- Instagram: [@nfrtix](https://www.instagram.com/nfrtix/)
- X (Twitter): [@nfrtiX](https://x.com/nfrtiX)
- YouTube: [Channel](https://www.youtube.com/channel/UC2_htcw3PK3o6dg2iQznHfQ)

---

## 🚀 Performance Optimizations

1. **Lazy Loading**: Images loaded with `loading="lazy"` attribute
2. **Deferred JavaScript**: Scripts loaded with `defer` attribute
3. **CSS Inlining**: Critical CSS inlined in HTML head
4. **Font Preconnect**: Google Fonts with preconnect for faster loading
5. **Optimized Images**: External image URLs from reliable CDNs

---

## ♿ Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation support (Arrow keys for slider)
- Reduced motion support via media query
- Focus states for all interactive elements
- Alt text for all images

---

## 🎭 Interactive Elements

### Header Behavior
- Fixed position on Home section only
- Fades out when scrolling past Home section
- Mobile hamburger menu with smooth animations

### Mascot Interactions
1. **Header Mascot**: Click to trigger "Let's connect!" and auto-scroll to contact
2. **Solution Mascot**: Click for speech bubble with form direction
3. **Slider Mascot**: Animates during ROI calculation with changing numbers

### Section Navigation
- Down arrow buttons on each section (desktop only)
- Auto-scroll to next section on click
- Smooth scroll behavior throughout

---

## 📊 Chart Configuration

### Downtime Cost Chart (Chart.js)
- Type: Horizontal Bar Chart
- Data: 7 industries with hourly downtime costs
- Colors: Neutral gray with green tooltips
- Animation: 2s easeOutQuart entrance
- Responsive: Maintains aspect ratio on resize

---

## 🎨 Custom CSS Features

### Glass-Morphism Effects
- Heritage text boxes on mobile
- Semi-transparent backgrounds with backdrop blur
- Border highlights for depth

### Neumorphism Cards
- Industry testimonial cards
- Soft shadows with inset effects
- Hover states with enhanced shadows

### Gradient Buttons
- CTA buttons with hover text swap
- Smooth color transitions
- Avatar badges in testimonials

---

## 🔧 Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support (including iOS)
- **Edge**: ✅ Full support
- **Opera**: ✅ Full support

### Fallbacks
- CSS Grid with flexbox fallback
- Backdrop-filter with solid backgrounds as fallback
- Transform animations with transition fallback

---

## 📝 Content Sections

### 1. Home Section
- Hero headline with value proposition
- Two-column layout (text + mascot)
- CTA buttons (Talk to Us, Learn More)
- Key metrics badges (10x ROI, -70% breakdowns)

### 2. Heritage Section
- Ancient sage nfrti story
- Three text boxes with company narrative
- Full-screen background with mascot on road
- Mobile: Glass-morphism cards, Desktop: Scattered layout

### 3. Problem Section (Slider)
- **Slide 1**: Industry downtime costs bar chart
- **Slide 2**: ROI calculator with live calculations
- Navigation dots and arrow buttons
- Mascot animations synchronized with slides

### 4. Solution Section
- Platform overview
- Five key benefits with checkmarks
- IIoT sensor description
- Full-width mascot display (desktop)

### 5. Contact Section
- Two-column layout (testimonials + form)
- Five input fields (First Name, Last Name, Email, Company, Interest)
- Message textarea
- Success/error state handling
- Mobile: Form first, testimonials second

---

## 🎯 Call-to-Action Flow

1. **Home CTA**: "Talk to Us" / "Request a Demo" → Scrolls to Contact
2. **Header Mascot**: Click → Show speech + Auto-scroll to Contact
3. **Section Down Arrows**: Click → Smooth scroll to next section
4. **Solution Section**: "Learn More" guides to features
5. **ROI Calculator**: "Calculate ROI" → Shows potential savings

---

## 📈 Analytics Integration Ready

The site is structured for easy analytics integration:
- Section tracking via IDs
- Button click tracking via classes
- Form submission tracking
- Slider interaction tracking
- ROI calculator usage tracking

To integrate, add your analytics code before `</body>` tag.

---

## 🔒 Security Considerations

- **Form Submission**: Uses Google Apps Script (secure, server-side)
- **No Inline Event Handlers**: All JS in external file
- **CORS Handling**: No-cors mode for form submission
- **Input Validation**: Client-side validation before submission
- **XSS Prevention**: No user input rendered directly to DOM

---

## 🚀 Deployment

### To Deploy:
1. Use the **Publish tab** in the interface
2. One-click deployment to live URL
3. All assets are properly linked with relative paths
4. CDN resources load from external sources

### File Requirements:
- `index.html` (main file)
- `css/style.css` (stylesheet)
- `js/main.js` (scripts)

---

## 📞 Support & Contact

For questions or support regarding this website:
- **Email**: Via contact form on site
- **LinkedIn**: [nfrtix Company Page](https://eg.linkedin.com/company/nfrtix)
- **Social Media**: Links in footer

---

## 📜 License

© 2025 nfrti X. All rights reserved.

---

## 🎉 Credits

- **Design & Development**: Built with modern web standards
- **Libraries**: Tailwind CSS, Chart.js, Font Awesome
- **Fonts**: Google Fonts (Inter, Kalam)
- **Icons**: Font Awesome Free
- **Images**: External CDN hosted images

---

## 🔄 Version History

- **v1.0** (2025-01-08): Initial launch
  - Full responsive design
  - Interactive slider with ROI calculator
  - Contact form integration
  - Mascot animations
  - Chart.js integration

---

## 🎨 Future Enhancements (Optional)

1. **Blog Section**: Add insights on predictive maintenance
2. **Case Studies**: Detailed customer success stories
3. **Video Integration**: Product demo videos
4. **Multi-language**: Arabic translation option
5. **Live Chat**: Customer support integration
6. **Animation Library**: More mascot animations
7. **Dark Mode**: Optional dark theme toggle

---

**Ready to deploy! Use the Publish tab to make your website live.**
