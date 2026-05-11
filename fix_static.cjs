const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf8');

const cheerio = require('cheerio');
const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';
const safeHtml = portfolioHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

indexHtml = indexHtml.replace(/const portfolioHtmlStatic =[\s\S]*?\}\\`;\n\nconst pagesData/, 'const portfolioHtmlStatic = `' + safeHtml + '`;\n\nconst pagesData');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Fixed index.html statically.');

// ALSO let's fix build_full.cjs so if anyone runs it, it doesn't break
let buildFull = fs.readFileSync('build_full.cjs', 'utf8');
buildFull = buildFull.replace(/const portfolioHtmlStatic =[\s\S]*?const pagesData/, 'const portfolioHtmlStatic = `' + safeHtml + '`;\n\nconst pagesData');
fs.writeFileSync('build_full.cjs', buildFull, 'utf8');

