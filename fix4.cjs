const fs = require('fs');
let buildJs = fs.readFileSync('build_full.cjs', 'utf8');

const replacement = "const portfolioHtmlStatic = `\\${portfolioHtml.replace(/\\`/g, '\\\\\\`').replace(/\\$/g, '\\\\\\$')}`;";

buildJs = buildJs.replace(/const portfolioHtmlStatic = [^\n]*/, () => replacement);
fs.writeFileSync('build_full.cjs', buildJs, 'utf8');
