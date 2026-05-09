const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);
$('script').remove();

const katHtml = fs.readFileSync('kataskevi-istoselidas/index.html', 'utf8');
const $kat = cheerio.load(katHtml);
let portfolioHtml = $kat('#portfolio').prop('outerHTML') || '<section id="portfolio"></section>';

const buildJs = fs.readFileSync('build_full.cjs', 'utf8');
const firstPagesData = buildJs.indexOf('const pagesData = {');

// Find the end of function generatePageHtml
let firstEndIndex = buildJs.indexOf('}</section>\\`;', firstPagesData);
if (firstEndIndex === -1) firstEndIndex = buildJs.indexOf('}</section>`', firstPagesData);

if (firstEndIndex === -1) {
    console.error("Could not find the end of pagesData inside build_full.cjs");
    process.exit(1);
}

// Extract the string literal up to the end of the function body
let endOfFunc = buildJs.indexOf('}', firstEndIndex + 10);
let pagesDataBlock = buildJs.substring(firstPagesData, endOfFunc + 1);

// We need to decode the escapes used to protect against the enclosing backtick inside build_full.cjs!
// In build_full.cjs it was `\${...}`, so `\\\${` etc isn't needed here. We just undo the template string literal escaping.
const decoded = eval("`" + pagesDataBlock.replace(/`/g, '\\`').replace(/\$/g, '\\$') + "`");
// actually eval is unsafe with the raw block... Let me just replace the specific escape sequences
pagesDataBlock = pagesDataBlock.replace(/\\\\`/g, '`').replace(/\\\\\\$/g, '$'); // adjust depending on how it was escaped

// The best way to extract it is from test_scripts.js that already did it!
// Ah! test_scripts.js actually has it starting perfectly at const pagesData = {
