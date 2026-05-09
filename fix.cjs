const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let newHtml = html.replace(/Cancel anytime.*?long term contracts\./g, "Cancel anytime. We do not lock you in long term contracts.");

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('done');
