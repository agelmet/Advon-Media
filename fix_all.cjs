const fs = require('fs');
const cheerio = require('cheerio');

// Grab the HTML skeleton from kataskevi
const skeletonHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');

// The script inside index.html is expected to start with:
//         // --- TRANSLATION & DATA ---
// So let's extract the head and the body, and put the script properly.

const \$ = cheerio.load(skeletonHtml);
\$('#main-content').empty();
\$('#main-content').html('<div id="page-content"></div>');

// Remove the injected inline script for now
\$('script').last().remove(); // remove module index.tsx
\$('script').last().remove(); // remove the big inline script

// Instead of string manipulation, let's build index.html string carefully:
let htmlStr = \$('html').prop('outerHTML'); // wait, cheerio might drop DOCTYPE

let finalHtml = '<!DOCTYPE html>\n<html lang="el" class="scroll-smooth">\n' + \$('html').html() + '\n</html>';

// But wait, the scripts were at the bottom.
// We need to inject main.js as the script.
const mainJs = fs.readFileSync('main.js', 'utf8');

const scriptTag = '\n    <script>\n        // --- TRANSLATION & DATA ---\n' + mainJs + '\n    </script>\n<script type="module" src="/index.tsx"></script>\n</body>\n';

finalHtml = finalHtml.replace('</body>', scriptTag);

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Restored index.html completely.');

// Just to make sure, let's ensure it has modal overlay
let finalContent = fs.readFileSync('index.html', 'utf8');
if (!finalContent.includes('id="modal-overlay"')) {
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
    finalContent = finalContent.replace(scriptTag, modalHtml + '\n' + scriptTag);
    fs.writeFileSync('index.html', finalContent, 'utf8');
    console.log('Added modal html to index.html');
}

// Now let's fix build_full.cjs so it works correctly
// let jsContent = Script started, output log file is 'typescript'.
# 
Script done..filter((i, el) => .html().includes('function renderApp()')).html();
// This will find the correct script now, because we put main.js inside index.html,
// BUT main.js does NOT contain function renderApp() !!!
// Oh wait, does main.js contain function renderApp()?
