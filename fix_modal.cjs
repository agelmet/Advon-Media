const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const modalHtml = `
    <div id="modal-overlay" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6">
        <div id="modal-backdrop" class="absolute inset-0 bg-space-black/90 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>
        
        <div id="modal-content" class="relative w-full max-w-2xl bg-deep-void border border-electric-cyan/20 rounded-2xl shadow-[0_0_50px_rgba(71,200,245,0.15)] opacity-0 scale-95 transition-all duration-300 max-h-[90vh] flex flex-col">
            
            <div class="p-6 border-b border-electric-cyan/10 flex justify-between items-center">
                <h3 id="modal-title" class="text-2xl font-black font-display text-white"></h3>
                <button onclick="closeModal()" class="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            
            <div class="p-6 overflow-y-auto custom-scrollbar">
                <div id="modal-image-container" class="mb-6 hidden"></div>
                <div id="modal-body" class="text-gray-300 space-y-4 font-light leading-relaxed"></div>
                
                <div class="mt-8 flex justify-end">
                    <button onclick="closeModal()" class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

// If modal is missing, insert before </body> or the last script
if (!html.includes('id="modal-overlay"')) {
    html = html.replace('</body>', modalHtml + '\n</body>');
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Modal HTML injected.');
} else {
    console.log('Modal already exists.');
}
