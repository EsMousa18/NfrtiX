# NfrtiX
# nfrti X - Predictive Maintenance Website

### **1. Home Section**
- a banner with company value proposition
- Main headline in Kalam font: "Prevent Costly Downtime / Predict Equipment Failures"
- Description: "Egypt's first end-to-end **predictive maintenance** solution for rotating equipment"
- Value proposition: "Scalable - Reliable - Cost-effective"
- Call-to-action buttons (Talk to Us, Learn More)
- Key metrics display (10x ROI, -70% Equipment Breakdowns)
- Interactive mascot with speech bubble on click

### **2. Heritage Section**
- Story of the ancient sage nfrti and the prophecy
- Title "Who's the maintenance sage nfrti?" positioned above the content
- Custom background image showcasing Egyptian heritage with pyramids and road
- **Desktop View**: 
  - Strategically positioned text boxes overlaid on background image
  - Text elements positioned within white spaces of the background
  - Interactive mascot overlay on the road
- **Mobile/Tablet View** (Enhanced):
  - Expandable section with automatic height adjustment
  - Text boxes stacked vertically as full-width cards
  - **Full-width background image** extending from left to right edge (edge-to-edge)
  - Mascot positioned on the road within the background image
  - Larger, more readable text boxes (the font size is 0.9-0.95rem)
  - Improved spacing and padding for better readability
  - Users can zoom into both text and image independently
  - **Seamless connection** to the section below with no padding/margin at bottom
  - Connects ancient wisdom with modern AI technology

### **3. Challenge Section**
- **Slide 1**: Industry Downtime Costs Chart
  -  bar chart showing costs across 7 industries
  - Data visualization using Chart.js
  
- **Slide 2**: ROI Calculator
  - Input fields: Number of Pumps, Downtime Hours, Cost per Hour, Industry
  - Real-time calculation of potential savings
  - Industry-specific cost presets
  - Results display with annual loss, savings, and ROI multiple

- Slider navigation with numbered dots and arrow buttons
- Smooth transitions between slides

### **4. Solution Section**
- Overview of nfrti X platform capabilities
- Key benefits with checkmarks
- Interactive mascot with customized speech bubble
- Green background theme

### **5. Awards & Recognition Section**
- Manutech Challenge Winner
- Imhotep Innovation Center partnership
- Microsoft Azure Credits ($150K)
- AUC CND Funding

### **6. Contact Section**
- Industry testimonials from Atlasco Egypt and Flowtech
- Contact form with Google Apps Script integration
- Form fields: Name, Email, Company, Interest, Message
- Success/Error message handling
- Social media links (LinkedIn, Facebook, Instagram, X, YouTube)

### **7. Responsive Design**
- Mobile-first approach
- Hamburger menu for mobile devices
- Responsive grid layouts
- Optimized for all screen sizes

### **Libraries & Tools**
- **Tailwind CSS**: Utility-first CSS framework
- **Chart.js**: Data visualization for charts
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

**Note**: The website automatically uses minified `.min.css` and `.min.js` files for optimal performance. Original files are kept for development and updates.

## Design Features

### **Color Scheme**
- **Primary Green**: `#2E8B57` (nfrti green)
- **Yellow Accents**: `#FCD34D` (for highlights)
- **White Background**

### **Interactive Elements**
- Clickable mascots with speech bubbles
- Hover effects on buttons and cards
- Smooth scroll navigation
- Form validation with visual feedback

### **Animations**
- Floating mascot animation (CSS keyframes)
- Slider transitions
- Button hover effects
- Form submission states

### **Google Apps Script Form**
- Form submissions are sent to Google Sheets
- No-cors mode for seamless submission
- Automatic success/error handling
- Form endpoint: `https://script.google.com/macros/s/AKfycbyeLOW1IYFWLvkEPs36tadQ6xadJ4LDmac3CBCkMF818PWZxmJc6vfmQiWjzLzksrYV6A/exec`

### **ROI Calculator Logic**
- **Formula**: Annual Loss = Pump Count × Downtime Hours × Hourly Cost
- **Savings**: 70% reduction in downtime assumed
- **nfrti Cost Estimate**: $300 installation + $100/year per sensor × 3 sensors per pump
- **ROI Multiple**: Savings ÷ nfrti Cost

#### **Desktop Breakpoints:**
| Resolution | Container Max | Content Max | Notes |
|------------|--------------|-------------|-------|
| 1024-1439px | 1200px | 1200px | Standard desktop |
| 1440-1599px | 1400px | 1300px | Large desktop |
| 1600-1919px | 1500px | 1400px | XL desktop |
| 1920px+ | 1600px | 1500px | Ultra-wide (locked) |


#### **1. Image Optimization**
- Lazy loading implemented on all images (`loading="lazy"`)
- Removed unused images (`mascot-home-hero.png` - 70KB saved)
- Optimized image loading strategy for faster page load

#### **2. JavaScript Optimization**
-  **Minified JS Files Created**:
  - `main.min.js` (4.9KB - 63% reduction)
  - `challenge-slider.min.js` (1.5KB - 70% reduction)
-  **Deferred JavaScript** loading for non-blocking execution
-  **Total JS Size Reduction: 64%** (18KB → 6.4KB)

##  Contact & Social Media

- **LinkedIn**: https://eg.linkedin.com/company/nfrtix
- **Facebook**: https://www.facebook.com/nfrtiX/
- **Instagram**: https://www.instagram.com/nfrtix/
- **X (Twitter)**: https://x.com/nfrtiX
- **YouTube**: https://www.youtube.com/channel/UC2_htcw3PK3o6dg2iQznHfQ


## License

© 2025 nfrti X. All rights reserved.



