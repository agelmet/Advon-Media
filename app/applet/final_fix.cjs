const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

let indexHtml = fs.readFileSync('index.html', 'utf-8');

// We will extract the inline js block, fix it, and then regenerate everything.
const match = indexHtml.match(/<script>\s*\n(.*?)\n\s*<\/script>\n<script type="module" src="\/index.tsx"><\/script>/ms);
if (!match) {
    console.error("Could not find inline script match in index.html");
    process.exit(1);
}

let inlineJs = match[1];

// Fix Navigation translations (desktop)
inlineJs = inlineJs.replace(/<a href="\/" class="relative group py-2 hover:text-white transition-colors text-shadow-sm">Αρχική<span/g,
    '<a href="/" class="relative group py-2 hover:text-white transition-colors text-shadow-sm">${isEn ? "Home" : "Αρχική"}<span');

inlineJs = inlineJs.replace(/<a href="#" class="hover:text-white transition-colors text-shadow-sm flex items-center gap-1 cursor-default">Υπηρεσίες /g,
    '<a href="#" class="hover:text-white transition-colors text-shadow-sm flex items-center gap-1 cursor-default">${t.nav.services} ');

// Insert Blog Data into pagesData
const pagesDataIndex = inlineJs.indexOf('const pagesData = {');
const oldPagesDataEnd = inlineJs.indexOf('function generatePageHtml(path, lang, pt) {');
if (pagesDataIndex !== -1 && oldPagesDataEnd !== -1) {
    let pagesDataStr = inlineJs.substring(pagesDataIndex, oldPagesDataEnd);
    
    const blogData = `
    '/blog': {
        el: {
            title: 'Διαβάστε τα Νέα μας',
            badge: 'ADVON MEDIA BLOG',
            posts: [
                {
                    title: 'Η Σημασία του SEO το 2026',
                    description: 'Μάθετε γιατί οι τεχνικές SEO είναι κρίσιμες για την ανάπτυξη της επιχείρησής σας.',
                    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 0
                },
                {
                    title: 'Social Media Management για Επαγγελματίες',
                    description: 'Πώς να αυξήσετε την απήχησή σας στο Instagram με τις σωστές στρατηγικές.',
                    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 100
                },
                {
                    title: 'Web Design Trends που θα κυριαρχήσουν',
                    description: 'Οι τελευταίες τάσεις στον σχεδιασμό ιστοσελίδων που αυξάνουν τις μετατροπές.',
                    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 200
                }
            ]
        },
        en: {
            title: 'Read Our News',
            badge: 'ADVON MEDIA BLOG',
            posts: [
                {
                    title: 'The Importance of SEO in 2026',
                    description: 'Learn why SEO techniques are critical for the growth of your business.',
                    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 0
                },
                {
                    title: 'Social Media Management for Professionals',
                    description: 'How to increase your reach on Instagram with the right strategies.',
                    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 100
                },
                {
                    title: 'Web Design Trends to Dominate',
                    description: 'The latest trends in web design that increase conversions.',
                    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                    delay: 200
                }
            ]
        }
    },
`;
    // Insert blogData into pagesData
    // We can replace the end of the object '    '/contact': {' ... '    }\n};'
    // To be safe:
    pagesDataStr = pagesDataStr.replace(/};?\s*$/, `    },\n${blogData}};\n`);
    inlineJs = inlineJs.substring(0, pagesDataIndex) + pagesDataStr + inlineJs.substring(oldPagesDataEnd);
}

// Update generatePageHtml to include block for /blog
const genPageHtmlIndex = inlineJs.indexOf('function generatePageHtml(path, lang, pt) {');
const htmlDefMatches = inlineJs.indexOf('return `<section class="min-h-[50vh] pt-40 pb-20 relative">${html}</section>`;');
if (genPageHtmlIndex !== -1 && htmlDefMatches !== -1) {
    const injectBlog = `
    } else if (path === '/blog') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${data.badge}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20">
            <div class="grid md:grid-cols-3 gap-8">
                \${data.posts.map(p => \`
                    <a href="#" class="reveal glass-panel p-4 rounded-3xl hover:border-electric-cyan/40 transition-colors group block" style="transition-delay: \${p.delay}ms">
                        <div class="aspect-video w-full mb-6 overflow-hidden rounded-2xl relative">
                            <div class="absolute inset-0 bg-electric-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                            <img src="\${p.image}" alt="\${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        </div>
                        <div class="p-4">
                            <h2 class="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-electric-cyan transition-colors leading-snug">\${p.title}</h2>
                            <p class="text-gray-400 leading-relaxed">\${p.description}</p>
                        </div>
                    </a>
                \`).join('')}
            </div>
        </div>
        \`;
`;
    // Find the last 'else if (path === \'/contact\') {' block and insert after it, inside the else branch
    const elsePattern = /} else {\s*\/\/[^\n]*\s*return '';\s*}/;
    inlineJs = inlineJs.replace(elsePattern, injectBlog + `
    } else {
        return '';
    }`);
}

// Ensure /blog is in dynamicPaths
inlineJs = inlineJs.replace(/const dynamicPaths = \[\'\/kataskevi-istoselidas\', \'\/google-reviews-nfc\', \'\/diaxeirisi-social-media\', \'\/contact\'\];/g, 
    "const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact', '/blog'];");

// In build_full.cjs portfolioHtmlStatic was evaluated because it needed the HTML of portfolio.
// Let's get the portfolio section from index.html if possible.
const virtualDOM = cheerio.load(indexHtml);
let portfolioHtml = virtualDOM('#portfolio').prop('outerHTML') || '';
// Escape variables for the static injection
// Wait, in my previous replacement, the pagesDataJs was evaluated.
// Since here we are running within node, we can just replace the string portfolioHtmlStatic.
// But wait! `#portfolio` logic is already inside index.html and `inline.js` generated by `build_full.cjs` earlier!
// Let's check if portfolioHtmlStatic is defined in inlineJS.
if (!inlineJs.includes('const portfolioHtmlStatic')) {
    // If it's missing, add it before pagesData
    inlineJs = inlineJs.replace('const pagesData = {', `const portfolioHtmlStatic = \`${portfolioHtml.replace(/\`/g, '\\\`').replace(/\$/g, '\\\$')}\`;\n\nconst pagesData = {`);
} else {
    // Update it
    inlineJs = inlineJs.replace(/const portfolioHtmlStatic = `[\s\S]*?`;/, `const portfolioHtmlStatic = \`${portfolioHtml.replace(/\`/g, '\\\`').replace(/\$/g, '\\\$')}\`;`);
}

// Re-embed the inline JS back into index.html text
const newIndexHtml = indexHtml.replace(/<script>\s*\n(.*?)\n\s*<\/script>\n<script type="module" src="\/index.tsx"><\/script>/ms, 
    `<script>\n${inlineJs}\n</script>\n<script type="module" src="/index.tsx"></script>`);

fs.writeFileSync('index.html', newIndexHtml, 'utf-8');

console.log("Updated index.html successfully with blog and fixes.");

// We won't eval inlineJs directly to avoid DOM errors.
// Instead, we will construct a clean environment for 'eval'ing pagesData and generatePageHtml only.
const pagesDataMatch = inlineJs.match(/(const pagesData = [\s\S]*?};)/);
const genPageHtmlMatch = inlineJs.match(/(function generatePageHtml[\s\S]*?return `<section class="min-h-\[50vh\] pt-40 pb-20 relative">\${html}<\/section>`;\n})/);
const portfolioStaticMatch = inlineJs.match(/(const portfolioHtmlStatic = [\s\S]*?;)/);

if (!pagesDataMatch || !genPageHtmlMatch) {
    console.error("Could not extract definitions to eval");
    process.exit(1);
}

const evalStr = (portfolioStaticMatch ? portfolioStaticMatch[1] : '') + '\n' + pagesDataMatch[1] + '\n' + genPageHtmlMatch[1];
eval(evalStr);

// Generate all pages!
function generateStaticPage(p) {
    const vDOM = cheerio.load(newIndexHtml);
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    if (htmlOutput) {
        vDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        vDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    if (p === '/contact') {
        const contactOuter = vDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        vDOM('#contact').remove();
        vDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), vDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact', '/blog'].forEach(generateStaticPage);

console.log("All static pages successfully regenerated!");
