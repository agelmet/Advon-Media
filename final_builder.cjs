const fs = require('fs');
const cheerio = require('cheerio');

// Load index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Load build_full.cjs
const buildJs = fs.readFileSync('build_full.cjs', 'utf8');
const pagesDataStart = buildJs.indexOf('const pagesDataJs = `');
const pagesDataEnd = buildJs.lastIndexOf('`;\n\n// Insert');
let pagesDataJs = buildJs.substring(pagesDataStart + 21, pagesDataEnd);
// fix the exact escaped characters
pagesDataJs = pagesDataJs.replace(/\\`/g, '`').replace(/\\\$/g, '$');

// get portfolio from kataskevi
const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';

// substitute the literal portfolioHtml inside pagesDataJs
pagesDataJs = pagesDataJs.replace("`\\${portfolioHtml.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}`", '`' + portfolioHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`');

const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons(); // Reactivate icons
            }
`;

let mainJs = fs.readFileSync('main.js', 'utf8');
const renderEnd = mainJs.lastIndexOf('renderApp();');
if (renderEnd !== -1) {
    mainJs = mainJs.slice(0, renderEnd) + injectDynamic + '\n            ' + mainJs.slice(renderEnd);
}

// Now replace the entire <script> block in index.html with the reconstructed code
const $ = cheerio.load(indexHtml);
$('script').each((i, el) => {
    if ($(el).html().includes('renderApp') || $(el).html().includes('TRANSLATION & DATA')) {
        $(el).remove();
    }
});

let finalHtml = '<!DOCTYPE html>\n<html lang="el" class="scroll-smooth">\n' + $('html').html() + '\n</html>';

const scriptTag = `
    <script>
        // --- TRANSLATION & DATA ---
${pagesDataJs}

${mainJs}
    </script>
`;
finalHtml = finalHtml.replace('</body>', scriptTag + '</body>');

// modal
if (!finalHtml.includes('id="modal-overlay"')) {
    const modalHtml = `
    <div id="modal-overlay" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6">
        <div id="modal-backdrop" class="absolute inset-0 bg-space-black/90 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
        <div id="modal-content" class="relative w-full max-w-2xl bg-deep-void border border-electric-cyan/20 rounded-2xl shadow-[0_0_50px_rgba(71,200,245,0.15)] opacity-0 scale-95 transition-all duration-300 max-h-[90vh] flex flex-col">
            <div class="p-6 border-b border-electric-cyan/10 flex justify-between items-center">
                <h3 id="modal-title" class="text-2xl font-black font-display text-white"></h3>
                <button onclick="closeModal()" class="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <div class="p-6 overflow-y-auto custom-scrollbar">
                <div id="modal-image-container" class="mb-6 hidden"></div>
                <div id="modal-body" class="text-gray-300 space-y-4 font-light leading-relaxed"></div>
                <div class="mt-8 flex justify-end">
                    <button onclick="closeModal()" class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    finalHtml = finalHtml.replace(scriptTag, modalHtml + '\n' + scriptTag);
}

fs.writeFileSync('index.html', finalHtml, 'utf8');

// Also update clean_index.cjs to never break anything again
fs.writeFileSync('clean_index.cjs', `
const fs = require('fs');
console.log('clean_index.cjs is a no-op now. Use node final_builder.cjs instead if you need to rebuild.');
`, 'utf8');

console.log('Restored pagesData logic properly into index.html');
