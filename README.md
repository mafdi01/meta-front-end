# meta-front-end
Projects made for [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) at Coursera


## Mangata & Gallo | Luxury Jewelry E-commerce

A responsive, high-end jewelry storefront developed as part of the **Meta Front-End Developer Professional Certificate**. This project showcases modern CSS layouts, semantic HTML5, and performance-optimized asset management for a fictional Austin-based brand.

**Live Demo:** [View Project](https://mafdi01.github.io/meta-front-end/mangata-and-gallo/index.html)

---

### 💎 Project Overview
**Mangata & Gallo** is a luxury jewelry brand specializing in special occasions such as weddings and anniversaries. Founded and led by Mariana Gallo, a master diamond cutter, the business operates an online storefront and an Austin-based atelier.

#### Key Features
- **Responsive Grid System:** Utilizes CSS Grid and Flexbox to ensure a seamless experience from mobile to desktop.
- **Visual Branding:** Implements a "Carbon Black" and "Champagne Gold" color palette to reflect a luxury aesthetic.
- **Performance Optimization:** Integrated Unsplash API parameters to serve responsive.
- **Accessible Navigation:** Semantic HTML5 structure with fragment identifiers for direct section linking.

---

### 🛠️ Technical Implementation

#### 1. Optimized Hero Overlays
Instead of using heavy, pre-edited image files, I utilized a CSS "scrim" technique to ensure text readability over high-resolution imagery:
```css
background: linear-gradient(#1a1a1b99, #1a1a1b99), url('...');
```

#### 2. Intrinsic Grid Layouts
The product gallery uses a modern "auto-fit" approach. This creates a fluid layout that adapts to the viewport width without requiring dozens of media queries:
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

#### 3. Smart Asset Management
To optimize the Largest Contentful Paint (LCP), images are requested with dynamic width and quality parameters: 

- w=1600: Constrains width for banner performance.

- auto=format: Serves next-gen formats (WebP/AVIF) based on browser support.

### How to Run Locally
1. Clone the repository:
git clone [https://github.com/mafdi01/meta-front-end.git](https://github.com/mafdi01/meta-front-end.git)

2. Navigate to the project folder:
cd mangata-and-gallo

3. Open index.html in your browser (Note: Use relative paths for CSS resolution).