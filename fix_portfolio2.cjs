const fs = require('fs');
const path = require('path');

function fixPortfolio(file) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');

    // Hide portfolio except on specific pages
    if (!content.includes('const path = window.location.pathname;')) {
        let hideLogic = `
            const path = window.location.pathname;
            const el_portfolio_section = document.getElementById('portfolio');
            if (el_portfolio_section) {
                if (path === '/kataskevi-istoselidas' || path === '/kataskevi-istoselidas/' || path.startsWith('/portfolio')) {
                    el_portfolio_section.style.display = 'block';
                } else {
                    el_portfolio_section.style.display = 'none';
                }
            }
`;
        content = content.replace('// --- 5. Portfolio Header ---', hideLogic + '\n            // --- 5. Portfolio Header ---');
    }

    // Replace Links to portfolio
    content = content.replace(/\/kataskevi-istoselidas#portfolio/g, '/portfolio');
    content = content.replace(/href="#portfolio"/g, 'href="/portfolio"');

    // Also the footer nav:
    content = content.replace(/<a href="\/portfolio" class="hover:text-electric-cyan transition-colors">/g, '<a href="/portfolio" class="hover:text-electric-cyan transition-colors">');

    fs.writeFileSync(fullPath, content, 'utf8');
}

fixPortfolio('main.js');
fixPortfolio('index.html');
