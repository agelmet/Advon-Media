const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const ids = [
  'main-content', 'desktop-nav', 'mobile-nav-content', 'lang-btn', 'mobile-lang-btn',
  'hero-content', 'stats-grid', 'services-header', 'services-grid', 'services-footer',
  'portfolio-header', 'reviews-header', 'reviews-grid', 'reviews-footer', 'faq-header',
  'faq-container', 'contact-container', 'footer-content', 'mobile-menu', 'mobile-menu-btn',
  'portfolio-grid', 'prev-btn', 'next-btn', 'pagination-dots', 'modal-overlay',
  'modal-backdrop', 'modal-content', 'modal-title', 'modal-image-container', 'modal-body',
  'star-canvas', 'cursor-glow'
];
ids.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    console.log(`Missing ID: ${id}`);
  }
});
