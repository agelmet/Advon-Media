const fs = require('fs');
let content = fs.readFileSync('main.js', 'utf8');

content = content.replace("window.openModal = function(id) {", 
`window.openModal = function(id) {
    if(!modalOverlay) modalOverlay = document.getElementById('modal-overlay');
    if(!modalBackdrop) modalBackdrop = document.getElementById('modal-backdrop');
    if(!modalContent) modalContent = document.getElementById('modal-content');
    if(!modalOverlay || !modalBackdrop || !modalContent) return;`);
    
content = content.replace("window.closeModal = function() {", 
`window.closeModal = function() {
    if(!modalOverlay) modalOverlay = document.getElementById('modal-overlay');
    if(!modalBackdrop) modalBackdrop = document.getElementById('modal-backdrop');
    if(!modalContent) modalContent = document.getElementById('modal-content');
    if(!modalOverlay || !modalBackdrop || !modalContent) return;`);
    
fs.writeFileSync('main.js', content, 'utf8');
console.log('Made modal operations extremely safe.');
