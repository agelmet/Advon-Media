const fs = require('fs');
const cheerio = require('cheerio');

const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML');
if (!portfolioHtml) portfolioHtml = '';

const safeHtml = portfolioHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/const portfolioHtmlStatic =.*?;/, 'const portfolioHtmlStatic = `' + safeHtml + '`;');
fs.writeFileSync('index.html', indexHtml, 'utf8');

let mainJs = fs.readFileSync('main.js', 'utf8');
mainJs = mainJs.replace(/const portfolioHtmlStatic =.*?;/, 'const portfolioHtmlStatic = `' + safeHtml + '`;');
fs.writeFileSync('main.js', mainJs, 'utf8');

let buildFull = fs.readFileSync('build_full.cjs', 'utf8');
buildFull = buildFull.replace(/const portfolioHtmlStatic =.*?;/, "const portfolioHtmlStatic = `\\${portfolioHtml.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}`;");
fs.writeFileSync('build_full.cjs', buildFull, 'utf8');

console.log('Fixed portfolioHtml references globally.');
