const fs = require('fs');

let content = fs.readFileSync('main.js', 'utf8');

content = content.replace(/const modalOverlay = document.getElementById\('modal-overlay'\);\n        const modalBackdrop = document.getElementById\('modal-backdrop'\);\n        const modalContent = document.getElementById\('modal-content'\);/g, 
"let modalOverlay = document.getElementById('modal-overlay');\nlet modalBackdrop = document.getElementById('modal-backdrop');\nlet modalContent = document.getElementById('modal-content');\nwindow.addEventListener('DOMContentLoaded', () => { \n  modalOverlay = document.getElementById('modal-overlay');\n  modalBackdrop = document.getElementById('modal-backdrop');\n  modalContent = document.getElementById('modal-content');\n  if(modalBackdrop) modalBackdrop.addEventListener('click', closeModal);\n});");
    
content = content.replace("modalBackdrop.addEventListener('click', closeModal);", "/* listener moved to DOMContentLoaded */");

fs.writeFileSync('main.js', content, 'utf8');

console.log('Fixed main.js');
