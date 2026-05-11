const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<script src="https://cdn.tailwindcss.com"></script>\n', '');
html = html.replace('    <link rel="preconnect" href="https://fonts.googleapis.com">', '    <script src="https://cdn.tailwindcss.com"></script>\n    <link rel="preconnect" href="https://fonts.googleapis.com">');

fs.writeFileSync('index.html', html, 'utf8');
