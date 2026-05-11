const fs = require('fs');

function fixCanvas(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // First let's remove the block if it exists
    let regexBlock = /const canvas = document\.getElementById\('star-canvas'\);\s*if \(canvas\) \{\s*const ctx = canvas\.getContext\('2d'\);/g;
    
    let isReplaced = false;
    
    if (regexBlock.test(content)) {
        content = content.replace(regexBlock, `const canvas = document.getElementById('star-canvas');
        const ctx = canvas ? canvas.getContext('2d') : null;`);
        
        // Remove the closing bracket of the if block
        content = content.replace(/window\.addEventListener\('resize', initStars\);\s*\}/g, `window.addEventListener('resize', initStars);`);
        isReplaced = true;
    }
    
    // Add null guards to initStars
    let initStarsRegex = /function initStars\(\) \{\s*width = window\.innerWidth;/g;
    if (initStarsRegex.test(content)) {
        content = content.replace(initStarsRegex, `function initStars() {
            if (!canvas || !ctx) return;
            width = window.innerWidth;`);
        isReplaced = true;
    }

    // Add null guards to animateStars
    let animateStarsRegex = /function animateStars\(\) \{\s*ctx\.clearRect\(0, 0, width, height\);/g;
    if (animateStarsRegex.test(content)) {
        content = content.replace(animateStarsRegex, `function animateStars() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, width, height);`);
        isReplaced = true;
    }

    if (isReplaced) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed ' + file);
    }
}

fixCanvas('main.js');
fixCanvas('index.html');
fixCanvas('kataskevi-istoselidas/index.html');
fixCanvas('google-reviews-nfc/index.html');
fixCanvas('diaxeirisi-social-media/index.html');
fixCanvas('contact/index.html');
fixCanvas('faq/index.html');
fixCanvas('blog/index.html');
fixCanvas('privacy-policy/index.html');
fixCanvas('terms-of-use/index.html');
fixCanvas('cookies-policy/index.html');
