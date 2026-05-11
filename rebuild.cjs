const fs = require('fs');
const cheerio = require('cheerio');

// 1. Get pure index.html without ANY scripts
let html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);
$('script').remove();

// 2. Get the real pagesData string
const buildJs = fs.readFileSync('build_full.cjs', 'utf8');
const pagesDataStart = buildJs.indexOf('const pagesData = {');
const endFuncIndex = buildJs.lastIndexOf('function generatePageHtml');
// we need to find where function generatePageHtml ends...
// let's just use string parsing to extract exactly the pagesData and function
let generateFuncEnd = buildJs.indexOf('}\n`;', endFuncIndex);

if (generateFuncEnd === -1) {
    generateFuncEnd = buildJs.indexOf('`;', endFuncIndex);
}

// wait, to be perfectly safe, let's just read from a fresh run that I know stops EXACTLY at the final return 
