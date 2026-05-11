const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace literal '\\n' with actual newline
html = html.replace(/\\n            renderApp\(\)/g, '\n            renderApp()');

fs.writeFileSync('index.html', html, 'utf8');

const cheerio = require('cheerio');
const $ = cheerio.load(html);

let scriptsContent = '';
$('script').each((i, el) => {
    let type = $(el).attr('type');
    if (!type || type === 'text/javascript' || type === 'module') {
        scriptsContent += $(el).html() + '\n';
    }
});

fs.writeFileSync('test_scripts_new.js', scriptsContent, 'utf8');
