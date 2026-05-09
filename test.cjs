const fs = require('fs');
const cheerio = require('cheerio');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(indexHtml);

let scriptsContent = '';
$('script').each((i, el) => {
    let type = $(el).attr('type');
    if (!type || type === 'text/javascript' || type === 'module') {
        scriptsContent += $(el).html() + '\n';
    }
});

fs.writeFileSync('test_scripts.js', scriptsContent, 'utf8');
console.log('Test logic generated');
