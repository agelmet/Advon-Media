const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// Clean up all scripts except the vite setup one if needed, but vite module is just script src=/index.tsx
let otherScripts = '';
$('script').each((i, el) => {
    let src = $(el).attr('src');
    if (src === '/index.tsx' || src === 'https://cdn.tailwindcss.com') {
        otherScripts += $.html(el) + '\n';
    }
});
$('script').remove();

const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';

// get test_scripts and extract line 5 to 318
const testScripts = fs.readFileSync('test_scripts.js', 'utf8');
const lines = testScripts.split('\\n');

// Find start of pagesData
let startIndex = lines.findIndex(l => l.includes('const pagesData = {'));
let endIndex = lines.findIndex(l => l === '}'); // final bracket of generatePageHtml
// actually we can just find 'function generatePageHtml' and find its closing bracket
let foundFunc = false;
let bracketCount = 0;
for(let i = startIndex; i < lines.length; i++) {
    if (lines[i].includes('function generatePageHtml')) {
        foundFunc = true;
    }
    if (foundFunc) {
        if (lines[i].includes('{')) bracketCount += lines[i].split('{').length - 1;
        if (lines[i].includes('}')) bracketCount -= lines[i].split('}').length - 1;
        if (bracketCount === 0) {
            endIndex = i;
            break;
        }
    }
}

let pagesDataBlock = lines.slice(startIndex, endIndex + 1).join('\\n');

const scriptSafePortfolio = portfolioHtml.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$');

let pureScript = `
        // --- TRANSLATION & DATA ---
        const portfolioHtmlStatic = \`${scriptSafePortfolio}\`;

${pagesDataBlock}
`;

let mainJs = fs.readFileSync('main.js', 'utf8');
const renderEnd = mainJs.lastIndexOf('renderApp();');
const injectDynamic = `
            const pathname = window.location.pathname.replace(/\\/$/, '') || '/';
            const dynamicPaths = ['/kataskevi-istoselidas', '/google-reviews-nfc', '/diaxeirisi-social-media', '/contact'];
            
            const pc = document.getElementById('page-content');
            if (pc && dynamicPaths.includes(pathname)) {
                pc.innerHTML = generatePageHtml(pathname, currentLang, t);
                if (window.lucide) window.lucide.createIcons();
            }
`;
if (renderEnd !== -1) {
    mainJs = mainJs.slice(0, renderEnd) + injectDynamic + '\\n            ' + mainJs.slice(renderEnd);
}

const finalScriptHtml = `
    <script>
${pureScript}

${mainJs}
    </script>
${otherScripts}
`;

let finalHtml = '<!DOCTYPE html>\\n<html lang="el" class="scroll-smooth">\\n' + $('html').html() + '\\n</html>';
finalHtml = finalHtml.replace('</body>', finalScriptHtml + '</body>');

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('Successfully rebuilt index.html perfectly!');

