const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/We don\\'t/g, "We do not");
html = html.replace(/We don\\'t/g, "We do not");
html = html.replace(/We don't/g, "We do not");
fs.writeFileSync('index.html', html, 'utf8');
console.log('done');
