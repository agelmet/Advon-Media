const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf8');

const kataskeviHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $ = cheerio.load(kataskeviHtml);
const portfolioOuter = $('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';

// the text we are trying to replace starts with: const portfolioHtmlStatic = 
// and ends with }`
const regex = /const portfolioHtmlStatic = `\$\{portfolioHtml[^\n]*/;
html = html.replace(regex, 'const portfolioHtmlStatic = `' + portfolioOuter.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`;');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed portfolioHtml. rebuilding full..');
