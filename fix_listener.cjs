const fs = require('fs');

function fixRuntime(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace listener with safe listener
    const oldStr = "modalBackdrop.addEventListener('click', closeModal);";
    const newStr = "if(modalBackdrop) { modalBackdrop.addEventListener('click', closeModal); } else { window.addEventListener('DOMContentLoaded', () => { const mb = document.getElementById('modal-backdrop'); if(mb) mb.addEventListener('click', closeModal); }); }";
    
    // But modalBackdrop might be defined above it. Let's see:
    
    // Just find document.getElementById('modal-backdrop') and ensure subsequent operations are safe.
    // Instead, a better way is to move the modal HTML in index.html to BEFORE the 1st <script> tag before </body>
    
    content = content.replace(/const modalOverlay = document.getElementById\('modal-overlay'\);\n        const modalBackdrop = document.getElementById\('modal-backdrop'\);\n        const modalContent = document.getElementById\('modal-content'\);/g, 
"let modalOverlay = document.getElementById('modal-overlay');\nlet modalBackdrop = document.getElementById('modal-backdrop');\nlet modalContent = document.getElementById('modal-content');\nwindow.addEventListener('DOMContentLoaded', () => { \n  modalOverlay = document.getElementById('modal-overlay');\n  modalBackdrop = document.getElementById('modal-backdrop');\n  modalContent = document.getElementById('modal-content');\n  if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);\n});");
    
    content = content.replace("modalBackdrop.addEventListener('click', closeModal);", "/* listener moved to DOMContentLoaded */");
    
    fs.writeFileSync(file, content, 'utf8');
}

fixRuntime('index.html');
fixRuntime('kataskevi-istoselidas/index.html');
fixRuntime('dist/index.html');
fixRuntime('diaxeirisi-social-media/index.html');
fixRuntime('google-reviews-nfc/index.html');

console.log('Fixed listeners.');
