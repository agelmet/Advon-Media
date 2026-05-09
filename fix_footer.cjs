const fs = require('fs');
const path = require('path');

function fixFooter(file) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');

    content = content.replace(
        '<a href="/privacy-policy" class="hover:text-electric-cyan transition-colors">Πολιτική Απορρήτου</a>',
        '<a href="/privacy-policy" class="hover:text-electric-cyan transition-colors">${isEn ? "Privacy Policy" : "Πολιτική Απορρήτου"}</a>'
    );
    
    content = content.replace(
        '<a href="/cookies-policy" class="hover:text-electric-cyan transition-colors">Πολιτική Cookies</a>',
        '<a href="/cookies-policy" class="hover:text-electric-cyan transition-colors">${isEn ? "Cookies Policy" : "Πολιτική Cookies"}</a>'
    );
    
    content = content.replace(
        '<a href="/terms-of-use" class="hover:text-electric-cyan transition-colors">Όροι Χρήσης</a>',
        '<a href="/terms-of-use" class="hover:text-electric-cyan transition-colors">${isEn ? "Terms of Use" : "Όροι Χρήσης"}</a>'
    );

    fs.writeFileSync(fullPath, content, 'utf8');
}

fixFooter('main.js');
fixFooter('index.html');
