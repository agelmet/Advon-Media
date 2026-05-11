const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

let indexHtml = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(indexHtml);

// Fix logo link
$('a.group[href="#"]').attr('href', '/');

// Get home reviews
let $kataskevi = cheerio.load(fs.readFileSync('kataskevi-istoselidas/index.html', 'utf-8'));
const portfolioHtml = $kataskevi('#portfolio').prop('outerHTML');

// Wait, the reviews section in index.html is still there. 
let reviewsHtml = $('#reviews').prop('outerHTML') || $kataskevi('#reviews').prop('outerHTML');

let jsContent = $('script').filter((i, el) => $(el).html().includes('function renderApp()')).html();

const pagesDataJs = `
const portfolioHtmlStatic = `\${portfolioHtml.replace(/\`/g, '\\\`').replace(/\$/g, '\\\$')}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

)}`;

const pagesData = {
    '/kataskevi-istoselidas': {
        el: {
            title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
            price: 'ΔΩΡΕΑΝ',
            priceNote: '(μόνο 10.83€/μήνα hosting και δώρο το domain name)',
            cta: 'Ξεκινήστε Τώρα',
            cards: [
                { icon: 'gift', title: 'Δεν είναι μάρκετινγκ τρικ', desc: 'Όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι <strong class="text-white">εντελώς δωρεάν</strong>.' },
                { icon: 'server', title: 'Μικρό Κόστος Hosting', desc: 'Το μόνο κόστος που δεν μπορούμε να καλύψουμε είναι η φιλοξενία και το domain name (περίπου 10.83€/μήνα). Εμείς αναλαμβάνουμε όλες τις διαδικασίες!' },
                { icon: 'briefcase', title: 'Χτίζουμε το Πορτφόλιο μας', desc: 'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται, ώστε στο μέλλον να έχουμε ανταγωνιστικές τιμές.' },
                { icon: 'trending-up', title: 'Αυξήστε τις Πωλήσεις', desc: 'Αναβαθμίστε την επαγγελματική σας παρουσία και μετατρέψτε τους επισκέπτες σε αφοσιωμένους πελάτες.' },
                { icon: 'search', title: 'SEO & Κατάταξη', desc: 'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας που κατακτά υψηλότερες θέσεις στη Google είναι αναγκαιότητα.' },
                { icon: 'layout-template', title: 'Ψηφιακή Βιτρίνα', desc: 'Λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα 24/7 στους επισκέπτες.' }
            ]
        },
        en: {
            title: 'Free Website Creation',
            price: 'FREE',
            priceNote: '(only 10.83€/month hosting + free domain)',
            cta: 'Start Now',
            cards: [
                { icon: 'gift', title: 'Not a marketing trick', desc: 'The creation that normally costs 700-2000€+ is <strong class="text-white">completely free</strong>.' },
                { icon: 'server', title: 'Low Hosting Cost', desc: 'The only cost we cannot cover is the hosting and domain name (about 10.83€/month). We handle the process for you!' },
                { icon: 'briefcase', title: 'Building our Portfolio', desc: 'We do this to add as many websites as possible to our portfolio, so we can charge higher rates in the future.' },
                { icon: 'trending-up', title: 'Increase Sales', desc: 'Upgrade your professional presence online and turn visitors into loyal clients.' },
                { icon: 'search', title: 'SEO & Rankings', desc: 'A well-designed website helps you achieve higher positions in search engines.' },
                { icon: 'layout-template', title: 'Digital Storefront', desc: 'It acts as your digital storefront, offering easy access to information 24/7.' }
            ]
        }
    },
    '/google-reviews-nfc': {
        el: {
            title: 'Ανέπαφη Βάση Αξιολογήσεων',
            price: '25€',
            priceNote: 'εφάπαξ (Χωρίς μηνιαία συνδρομή)',
            cta: 'Αγορά Τώρα',
            descTop: 'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Χάνετε πελάτες;</strong> Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της. Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
                '<strong class="text-white">Κυριαρχήστε στα Google Results.</strong> Η Google θέλει να παρέχει τα πιο στοχευμένα και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
                '<strong class="text-white">Η λύση στην ξεχασιά.</strong> Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε. Με την ανέπαφη βάση μας αποκτάτε τουλάχιστον 50 νέες κριτικές κάθε μήνα εύκολα!',
                '<strong class="text-white">Μαθηματικά:</strong> 8 πελάτες/ημέρα x 20 μέρες = 160. Ακόμα και 50 να αφήσουν κριτική, έχετε 150 νέες σε 3 μήνες.'
            ]
        },
        en: {
            title: 'Contactless Review Stand',
            price: '25€',
            priceNote: 'one-time fee (No monthly subscription)',
            cta: 'Buy Now',
            descTop: 'Reach the top of Google and get 150 new reviews in less than 3 months.',
            image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6724bf7a4eb48eb705a7b389.gif',
            list: [
                '<strong class="text-white">Losing clients?</strong> The first thing people do when searching for a business is check its reviews. With few reviews, you likely lose to competitors.',
                '<strong class="text-white">Dominate Google Results.</strong> Google prioritizes businesses with higher and more valid reviews in local search results.',
                '<strong class="text-white">The solution to forgetfulness.</strong> Customers forget to leave a review when asked. Our contactless stand makes it instantaneous and frictionless!',
                '<strong class="text-white">The Math:</strong> 8 customers/day x 20 days = 160. Even if only 50 leave a review, you get 150 new reviews in 3 months.'
            ]
        }
    },
    '/diaxeirisi-social-media': {
        el: {
            title: 'Διαχείριση Social Media',
            price: '87€/μήνα',
            priceNote: '7 Ημέρες δωρεάν δοκιμή. No contracts.',
            cta: 'Δωρεάν Δοκιμή',
            featuresTitle: 'Τι περιλαμβάνει:',
            whyTitle: 'Γιατί να Μας Επιλέξετε:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Επαγγελματικά Posts:</strong><br/>Χρησιμοποιούμε εργαλεία αξίας 300+€ (Photoshop, Canvas Pro, Photoroom κ.ά).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Έρευνα Hashtags:</strong><br/>Στοχευμένα hashtags για να βρεθείτε μπροστά σε νέο κοινό.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Κειμενογραφία:</strong><br/>Copywriting που οδηγεί σε πωλήσεις και ραντεβού.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Επαγγελματικό Bio:</strong><br/>Στήσιμο ενός βιογραφικού προφίλ.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Αναφορές Προόδου:</strong><br/>Μηνιαία ανάλυση ανάπτυξης & αλληλεπίδρασης.' },
                { icon: 'send', text: '<strong class="text-white text-base">Απόλυτη Άνεση:</strong><br/>Μας στέλνετε φώτο, κάνουμε τα πάντα (ή δημιουργούμε δικά μας).' }
            ],
            why: [
                { icon: 'shield-check', title: 'Χωρίς Ρίσκο', text: 'Μόνο 87€ το μήνα με εγγύηση επιστροφής χρημάτων. Αν δεν ικανοποιηθείτε, επιστρέφουμε τα χρήματα χωρίς ερωτήσεις.' },
                { icon: 'palette', title: 'Προσωποποιημένα', text: 'Προσαρμόζουμε το περιεχόμενο σύμφωνα με την ταυτότητα της επιχείρησής σας.' },
                { icon: 'unlock', title: 'Καμία Δέσμευση', text: 'Διακόψτε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια και μικρά γράμματα.' }
            ]
        },
        en: {
            title: 'Social Media Management',
            price: '87€/month',
            priceNote: '7-Days free trial. No contracts.',
            cta: 'Free Trial',
            featuresTitle: 'What is included:',
            whyTitle: 'Why Choose Us:',
            features: [
                { icon: 'image', text: '<strong class="text-white text-base">Professionally Edited Posts:</strong><br/>We use top-tier tools worth 300+€ (Photoshop, Canva Pro, Photoroom, etc).' },
                { icon: 'hash', text: '<strong class="text-white text-base">Hashtag Research:</strong><br/>Targeted hashtags to bring you in front of new audiences.' },
                { icon: 'pen-tool', text: '<strong class="text-white text-base">Professional Copywriting:</strong><br/>Copy designed to convert readers into clients.' },
                { icon: 'user-check', text: '<strong class="text-white text-base">Profile Setup:</strong><br/>Crafting a professional and converting profile bio.' },
                { icon: 'bar-chart', text: '<strong class="text-white text-base">Analytics Reports:</strong><br/>Monthly analysis of your growth and interactions.' },
                { icon: 'send', text: '<strong class="text-white text-base">Ultimate Comfort:</strong><br/>Just send us your photos or we create original engaging designs.' }
            ],
            why: [
                { icon: 'shield-check', title: 'Risk Free', text: 'Only 87€/month with money-back guarantee. Not happy? Get a refund no questions asked.' },
                { icon: 'palette', title: 'Personalized Service', text: 'Content strictly tailored to your business identity and style.' },
                { icon: 'unlock', title: 'No Commitment', text: "Cancel anytime. We don't lock you in long term contracts." }
            ]
        }
    },
    '/contact': {
        el: {
            title: 'Επικοινωνία',
            desc: 'Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να απογειώσουμε την επιχείρησή σας.',
        },
        en: {
            title: 'Contact Us',
            desc: 'We are here to answer all your questions and skyrocket your business.',
        }
    }
};

function generatePageHtml(path, lang, pt) {
    let html = '';
    const data = pagesData[path][lang];
    if (path === '/kataskevi-istoselidas') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 px-6">
            \${data.cards.map((c, i) => \`
                <div class="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 \${(i === 0 || i === 1) ? 'md:col-span-1 lg:col-span-1' : ''} shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-electric-cyan/20">
                    <div class="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="\${c.icon}" class="w-8 h-8 text-electric-cyan"></i>
                    </div>
                    <h3 class="text-2xl font-black font-display text-white mb-4 tracking-wide">\${c.title}</h3>
                    <p class="text-gray-300 text-lg leading-relaxed">\${c.desc}</p>
                </div>
            \`).join('')}
        </div>
        <div class="text-center max-w-7xl mx-auto px-6 mb-20">
            <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
        \${portfolioHtmlStatic}
        \`;
    } else if (path === '/google-reviews-nfc') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8">
                <p class="text-2xl font-bold font-display text-white mb-8 leading-tight">\${data.descTop}</p>
                <div class="space-y-4">
                    \${data.list.map((item) => \`
                        <div class="flex items-start gap-4 glass-panel p-6 rounded-3xl group hover:border-electric-cyan/40 transition-colors shadow-xl">
                            <div class="p-3 rounded-full bg-electric-cyan/10 shrink-0 group-hover:bg-electric-cyan/20 transition-colors">
                                <i data-lucide="check" class="w-6 h-6 text-electric-cyan"></i>
                            </div>
                            <p class="text-gray-300 leading-relaxed text-lg">\${item}</p>
                        </div>
                    \`).join('')}
                </div>
                <div class="pt-8">
                    <a href="#contact" class="inline-flex items-center gap-3 px-10 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(71,200,245,0.5)]">
                        \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            <div class="order-1 md:order-2 flex justify-center perspective-1000">
                <div class="relative group transform hover:rotate-y-12 transition-transform duration-700">
                    <div class="absolute -inset-4 bg-electric-cyan/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src="\${data.image}" class="relative w-full max-w-md rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" alt="NFC Stand">
                </div>
            </div>
        </div>
        \`;
    } else if (path === '/diaxeirisi-social-media') {
        html = \`
        <div class="text-center mb-16 px-6">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.services : 'SERVICES'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <div class="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span class="font-black text-electric-cyan">\${data.price}</span>
                <span class="text-gray-400 font-medium">\${data.priceNote}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-20 space-y-16">
            
            <div class="bg-[#050a0e]/40 p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-sm">
                <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.featuresTitle}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    \${data.features.map(f => \`
                        <div class="glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-all shadow-lg hover:shadow-electric-cyan/10">
                            <i data-lucide="\${f.icon}" class="w-12 h-12 text-electric-cyan drop-shadow-md"></i>
                            <p class="text-gray-400 text-sm leading-relaxed">\${f.text}</p>
                        </div>
                    \`).join('')}
                </div>
            </div>
            
            <div class="relative rounded-[3rem] p-1 overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-r from-electric-cyan/40 via-purple-500/40 to-electric-cyan/40 animate-shimmer bg-[length:200%_auto]"></div>
                <div class="relative bg-[#050a0e] rounded-[calc(3rem-4px)] p-10 md:p-16 backdrop-blur-xl">
                    <h3 class="text-3xl font-black font-display text-white mb-12 text-center">\${data.whyTitle}</h3>
                    <div class="grid md:grid-cols-3 gap-10">
                        \${data.why.map(w => \`
                            <div class="text-center group border border-white/5 bg-white/[0.02] p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
                                <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-electric-cyan to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(71,200,245,0.4)]">
                                    <i data-lucide="\${w.icon}" class="w-10 h-10 text-[#050a0e]"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white mb-4">\${w.title}</h4>
                                <p class="text-gray-400 text-sm leading-relaxed">\${w.text}</p>
                            </div>
                        \`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="text-center pt-8">
                <a href="#contact" class="inline-flex items-center gap-3 px-12 py-5 bg-electric-cyan text-[#050a0e] font-black text-lg uppercase tracking-[0.1em] rounded-xl hover:bg-white transition-all shadow-[0_0_40px_rgba(71,200,245,0.5)] hover:scale-105">
                    \${data.cta} <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
        \`;
    } else if (path === '/contact') {
        html = \`
        <div class="text-center mb-16 px-6 max-w-7xl mx-auto">
            <span class="text-electric-cyan text-xs font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_15px_rgba(71,200,245,0.6)]">\${pt.nav ? pt.nav.contact : 'CONTACT'}</span>
            <h1 class="text-5xl md:text-7xl font-black font-display mb-6 text-white drop-shadow-xl">\${data.title}</h1>
            <p class="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">\${data.desc}</p>
        </div>
        \`;
    } else {
        // Keeps it identical for blog/faq/legal, since they don't break translation flows necessarily.
        return '';
    }
    
    return \`<section class="min-h-[50vh] pt-40 pb-20 relative">\${html}</section>\`;
}
`;

// Insert the js definitions globally. We do it right before `const translations = {`
const trIndex = jsContent.indexOf('const translations = {');
if (trIndex === -1) {
    console.error('Cannot find translations object?');
} else {
    jsContent = jsContent.slice(0, trIndex) + pagesDataJs + '\n\n        ' + jsContent.slice(trIndex);
}

// Ensure `main` updates `#page-content` in JS too dynamically:
const renderEnd = jsContent.lastIndexOf('observeElements();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;
if (renderEnd !== -1) {
    jsContent = jsContent.slice(0, renderEnd) + injectDynamic + '\n            ' + jsContent.slice(renderEnd);
}

$('script').filter((i, el) => $(el).html().includes('function renderApp()')).html(jsContent);

// Add global fix for translation missing in logo
// Actually we leave logo as is, it has <img ...>
// We DO NOT write index.html here anymore.

// Now, we generate the static files by interpreting pagesDataJs and calling generatePageHtml
eval(pagesDataJs);

// Helper
function generateStaticPage(p) {
    const virtualDOM = cheerio.load(fs.readFileSync('index.html', 'utf-8'));
    // Build html text with default 'el'
    const mockT = { nav: { services: 'Υπηρεσίες', contact: 'Επικοινωνία' } };
    const htmlOutput = generatePageHtml(p, 'el', mockT);
    
    // Inject #reviews after main-content if not present
    if (virtualDOM('#reviews').length === 0 && reviewsHtml) {
        virtualDOM('main#main-content').after('<section id="reviews">' + reviewsHtml + '</section>');
    }
    
    if (htmlOutput) {
        // Strip the existing <div id="page-content">...</div> in the generic index.html
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>`);
    }

    if (p !== '/') {
        // If not home, ensure home's own hero and portfolio don't bleed.
        // Actually our base template is index.html. So we MUST wipe out the specific home stuff inside `main#main-content`.
        // The above replace already wipes `main-content`.
        // What about `#hero`, `#stats`, `#services`, etc? They are directly inside the body.
        virtualDOM('main#main-content').siblings('section, div:not(#reviews):not(#contact):not(footer):not(header):not(#mobile-menu):not(#toast-container)').remove();
    }
    
    // We also need to fix contact section inside `/contact` to NOT display the generic contact block at the bottom again!
    // Or we just let the generic footer contact exist on all pages. The user said:
    // "footer menu, the reviews and the contact section are in ALL pages exactly the same"
    // "and that there is a completely seperate page of contact with just the contact options and menus"
    // Wait, if /contact has the contact section twice, that's weird. We'll hide it for /contact.
    if (p === '/contact') {
        const contactOuter = virtualDOM('#contact-container').prop('outerHTML') || '<div id="contact-container" class="max-w-7xl mx-auto px-6 text-center relative z-10"></div>';
        virtualDOM('#contact').remove();
        virtualDOM('main#main-content').html(`<div id="page-content">${htmlOutput}</div>
            <section id="contact" class="py-10 relative bg-gradient-to-b from-transparent to-[#0a1418]">
               ${contactOuter}
            </section>`);
    }

    const tp = path.join(__dirname, p);
    if (!fs.existsSync(tp)) fs.mkdirSync(tp, { recursive: true });
    fs.writeFileSync(path.join(tp, 'index.html'), virtualDOM.html(), 'utf-8');
}

['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'].forEach(generateStaticPage);

// Important fallback, we modify the original homepage to ensure it keeps its sections inside main.
// Actually, earlier I made it single `<main id="main-content"> <div id="page-content"></div> <footer> </main>`. That's already the case for the base `index.html` if I had changed it...? No! My index.html still has `#hero`, `#services` etc dynamically created logic.
// wait, `index.html` has all its sections hard-coded. So `generateStaticPage` above wiping sections `siblings` works beautifully.

console.log("Pages regenerated globally and completely translated");

