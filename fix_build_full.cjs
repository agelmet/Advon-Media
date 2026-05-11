const fs = require('fs');
let txt = fs.readFileSync('build_full.cjs', 'utf-8');
const search = "const portfolioHtmlStatic = `\\${portfolioHtml.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\";
txt = txt.replace(search, "const portfolioHtmlStatic = `\\${portfolioHtml.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}`;");
fs.writeFileSync('build_full.cjs', txt, 'utf-8');
console.log('Fixed build_full.cjs');
