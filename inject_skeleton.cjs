const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const skeleton = `
<section id="hero" class="relative pt-32 pb-20 flex items-center min-h-screen overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center" id="hero-content"></div>
</section>

<section id="stats" class="py-12 bg-electric-cyan/5 border-y border-electric-cyan/10 relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8" id="stats-grid"></div>
</section>

<section id="services" class="py-24 relative overflow-hidden bg-[#050a0e]">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16 reveal" id="services-header"></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" id="services-grid"></div>
        <div id="services-footer"></div>
    </div>
</section>

<section id="portfolio" class="py-10 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1418] to-transparent z-0 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 relative z-10 w-[calc(100vw-3rem)] md:w-full">
        <div class="reveal text-center mb-20" id="portfolio-header"></div>
        <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 min-h-[400px]"></div>
        <div class="reveal flex justify-center items-center gap-6">
            <button id="prev-btn" class="p-3 rounded-full border border-electric-cyan/40 bg-[#050a0e] hover:bg-electric-cyan hover:text-[#050a0e] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#050a0e] disabled:hover:text-electric-cyan shadow-[0_0_15px_rgba(71,200,245,0.1)]"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
            <div id="pagination-dots" class="flex gap-2"></div>
            <button id="next-btn" class="p-3 rounded-full border border-electric-cyan/40 bg-[#050a0e] hover:bg-electric-cyan hover:text-[#050a0e] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#050a0e] disabled:hover:text-electric-cyan shadow-[0_0_15px_rgba(71,200,245,0.1)]"><i data-lucide="chevron-right" class="w-6 h-6"></i></button>
        </div>
    </div>
</section>

<section id="reviews" class="py-24 bg-[#0a1418] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16 reveal" id="reviews-header"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="reviews-grid"></div>
    </div>
</section>

<section id="faq" class="py-24 bg-[#050a0e] relative">
    <div class="max-w-4xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16 reveal" id="faq-header"></div>
        <div class="space-y-4" id="faq-container"></div>
    </div>
</section>

<section id="contact" class="py-24 relative bg-gradient-to-b from-transparent to-[#0a1418]">
    <div class="max-w-7xl mx-auto px-6 text-center relative z-10" id="contact-container"></div>
</section>
`;

if (html.includes('<div id="page-content"></div>')) {
    html = html.replace('<div id="page-content"></div>', '<div id="page-content">' + skeleton + '</div>');
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Skeleton injected!');
} else {
    console.log('page-content not found or already has content!');
}
