const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf8');

const cheerio = require('cheerio');
const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';
const safeHtml = portfolioHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

const pDataIndex = indexHtml.indexOf('const pagesData = {');
const pStaticIndex = indexHtml.indexOf('const portfolioHtmlStatic =');

if (pStaticIndex !== -1 && pDataIndex !== -1) {
    indexHtml = indexHtml.substring(0, pStaticIndex) + 'const portfolioHtmlStatic = `' + safeHtml + '`;\n\n' + indexHtml.substring(pDataIndex);
    fs.writeFileSync('index.html', indexHtml, 'utf8');
    console.log('Fixed index.html properly');
} else {
    console.log('Not found');
}
