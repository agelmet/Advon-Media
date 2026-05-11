const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

let indexHtml = fs.readFileSync('/app/applet/index.html', 'utf-8');

const match = indexHtml.match(/<script>\s*\n([\s\S]*?)\n\s*<\/script>\n<script type="module" src="\/index.tsx"><\/script>/);
if (!match) {
    console.error("No script match");
    process.exit(1);
}
let inlineJs = match[1];

inlineJs = inlineJs.replace(/<a href="\/" class="relative group py-2 hover:text-white transition-colors text-shadow-sm">Αρχική<span/g,
    '<a href="/" class="relative group py-2 hover:text-white transition-colors text-shadow-sm">${isEn ? "Home" : "Αρχική"}<span');

inlineJs = inlineJs.replace(/<a href="#" class="hover:text-white transition-colors text-shadow-sm flex items-center gap-1 cursor-default">Υπηρεσίες <i/g,
    '<a href="#" class="hover:text-white transition-colors text-shadow-sm flex items-center gap-1 cursor-default">${t.nav.services} <i');

const pagesDataIndex = inlineJs.indexOf('const pagesData = {');
const oldPagesDataEnd = inlineJs.indexOf('function generatePageHtml(path, lang, pt) {');

if (pagesDataIndex !== -1 && oldPagesDataEnd !== -1) {
    let pagesDataStr = inlineJs.substring(pagesDataIndex, oldPagesDataEnd);
    if (!pagesDataStr.includes("'/blog': {")) {
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
        pagesDataStr = pagesDataStr.replace(/};?\s*$/, `    },\n${blogData}};\n`);
        inlineJs = inlineJs.substring(0, pagesDataIndex) + pagesDataStr + inlineJs.substring(oldPagesDataEnd);
    }
}

if (!inlineJs.includes("if (path === '/blog') {")) {
    const injectBlog = `    } else if (path === '/blog') {
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
    const elsePattern = /} else {\s*\/\/[^\n]*\s*return '';\s*}/;
    inlineJs = inlineJs.replace(elsePattern, injectBlog + `    } else {
        return '';
    }`);
}

inlineJs = inlineJs.replace(/const dynamicPaths = \[\'\/kataskevi-istoselidas\', \'\/google-reviews-nfc\', \'\/diaxeirisi-social-media\', \'\/contact\'\];/g, 
    "const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact', '/blog'];");

const virtualDOM = cheerio.load(indexHtml);
let portfolioHtml = virtualDOM('#portfolio').prop('outerHTML') || '';
if (!inlineJs.includes('const portfolioHtmlStatic')) {
    inlineJs = inlineJs.replace('const pagesData = {', `const portfolioHtmlStatic = \`${portfolioHtml.replace(/\`/g, '\\\`').replace(/\$/g, '\\\$')}\`;\n\nconst pagesData = {`);
} else {
    inlineJs = inlineJs.replace(/const portfolioHtmlStatic = `[\s\S]*?`;/, `const portfolioHtmlStatic = \`${portfolioHtml.replace(/\`/g, '\\\`').replace(/\$/g, '\\\$')}\`;`);
}

const newIndexHtml = indexHtml.replace(/<script>\s*\n([\s\S]*?)\n\s*<\/script>\n<script type="module" src="\/index.tsx"><\/script>/, 
    `<script>\n${inlineJs}\n</script>\n<script type="module" src="/index.tsx"></script>`);

fs.writeFileSync('/app/applet/index.html', newIndexHtml, 'utf-8');

const pagesDataMatch = inlineJs.match(/(const pagesData = [\s\S]*?};)/);
const genPageHtmlMatch = inlineJs.match(/(function generatePageHtml[\s\S]*?return `<section class="min-h-\[50vh\] pt-40 pb-20 relative">\${html}<\/section>`;\n})/);
const portfolioStaticMatch = inlineJs.match(/(const portfolioHtmlStatic = [\s\S]*?;)/);

if (pagesDataMatch && genPageHtmlMatch) {
    const evalStr = (portfolioStaticMatch ? portfolioStaticMatch[1] : '') + '\n' + pagesDataMatch[1] + '\n' + genPageHtmlMatch[1];
    eval(evalStr);

    function generateStaticPage(p) {
        const vDOM = cheerio.load(newIndexHtml);
        const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
        const htmlOutput = generatePageHtml(p, 'el', mockT);
        
        if (htmlOutput) {
            vDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
        }

        if (p !== '/') {
            vDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
            
            if (p === '/contact') {
                const contactOuter = vDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
                vDOM('#contact').remove();
                vDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
                    <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
                       ${contactOuter}
                    </section>`);
            } else {
                vDOM('#contact').remove();
            }
        }

        const tp = path.join('/app/applet', p.replace(/^\//, ''));
        if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
        fs.writeFileSync(path.join(tp, 'index.html'), vDOM.html(), 'utf-8');
    }

    ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact', '/blog'].forEach(generateStaticPage);
    console.log("Success generated all");
} else {
    console.log("Match failed", !!pagesDataMatch, !!genPageHtmlMatch);
}
