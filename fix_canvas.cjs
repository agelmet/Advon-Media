const fs = require('fs');

function wrapCanvasLogic(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    const startRegex = /const canvas = document\.getElementById\('star-canvas'\);\s*if \(!canvas\) return;\s*const ctx = canvas\.getContext\('2d'\);/;
    
    if (startRegex.test(content)) {
        content = content.replace(startRegex, 
`const canvas = document.getElementById('star-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');`
        );
        
        content = content.replace(/window\.addEventListener\('resize', initStars\);/, 
`window.addEventListener('resize', initStars);
        }`
        );
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed canvas logic in ' + file);
    }
}
wrapCanvasLogic('main.js');
wrapCanvasLogic('index.html');
wrapCanvasLogic('kataskevi-istoselidas/index.html');
wrapCanvasLogic('google-reviews-nfc/index.html');
wrapCanvasLogic('diaxeirisi-social-media/index.html');
wrapCanvasLogic('contact/index.html');
wrapCanvasLogic('faq/index.html');
wrapCanvasLogic('blog/index.html');
wrapCanvasLogic('privacy-policy/index.html');
wrapCanvasLogic('terms-of-use/index.html');
wrapCanvasLogic('cookies-policy/index.html');
