const fs = require('fs');
const path = require('path');

function updateFile(file) {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Update FAQs
    const newFaqsStr = `const faqs = {
            el: [
                { question: 'Τι είναι η Advon Media;', answer: 'Είμαστε ένα ψηφιακό marketing agency που ειδικεύεται σε στρατηγική, social media και περιεχόμενο. Δουλεύουμε κυρίως με τοπικές επιχειρήσεις και ελεύθερους επαγγελματίες — ψυχολόγους, θεραπευτές, οδοντίατρους, παιδίατρους, φυσικοθεραπευτές, coaches κλπ.' },
                { question: 'Ποιες υπηρεσίες προσφέρετε;', answer: 'Προσφέρουμε τρεις βασικές υπηρεσίες:<br>1. Κατασκευή Ιστοσελίδας<br>2. Ανέπαφη Βάση Αξιολογήσεων (NFC)<br>3. Διαχείριση Social Media' },
                { question: 'Γιατί η κατασκευή ιστοσελίδας είναι δωρεάν; Ποιο είναι το catch;', answer: 'Δεν υπάρχει catch. Πληρώνεις μόνο το hosting — 10,83€ τον μήνα. Θέλουμε να προσθέσουμε ιστοσελίδες στο πορτφόλιο μας.' },
                { question: 'Τι σημαίνει «hosting» και γιατί κοστίζει €10,83/μήνα;', answer: 'Το hosting είναι το "ενοίκιο" για τον χώρο στον server. Καλύπτει server χώρο, ασφάλεια, backups και συνεχή λειτουργία.' },
                { question: 'Μπορώ να σταματήσω το hosting όποτε θέλω;', answer: 'Ναι. Δεν υπάρχει ελάχιστη περίοδος, ούτε ποινή ακύρωσης.' },
                { question: 'Πόσο διαρκεί η παράδοση μιας ιστοσελίδας;', answer: 'Από τη στιγμή που έχουμε λάβει όλο το υλικό, παραδίδουμε σε 5-10 εργάσιμες ημέρες.' },
                { question: 'Χρειάζομαι ιστοσελίδα αν έχω ήδη σελίδα στα social media;', answer: 'Ναι. Η ιστοσελίδα φέρνει πελάτες από τη Google και δίνει απόλυτο επαγγελματισμό και αξιοπιστία.' },
                { question: 'Τι είναι η Ανέπαφη Βάση Αξιολογήσεων (NFC);', answer: 'Φυσική κάρτα όπου ο πελάτης αγγίζει το κινητό του και πάει κατευθείαν στη σελίδα αξιολογήσεων στη Google. Κοστίζει 25€ εφάπαξ.' },
                { question: 'Πώς μπορώ να επικοινωνήσω μαζί σας;', answer: 'Στείλτε μας email στο angelos@advonmedia.com ή κλείστε ένα δωρεάν ραντεβού.' }
            ],
            en: [
                { question: 'What is Advon Media?', answer: 'We are a digital marketing agency specializing in strategy, social media, and content. We work primarily with local businesses and freelancers.' },
                { question: 'What services do you offer?', answer: 'We offer three main services:<br>1. Website Construction<br>2. Contactless Review Stand (NFC)<br>3. Social Media Management' },
                { question: 'Why is website creation free? What\\'s the catch?', answer: 'There is no catch. You only pay for hosting — €10.83 per month. We want to build our portfolio.' },
                { question: 'What does "hosting" mean and why does it cost €10.83/month?', answer: 'Hosting is the "rent" for server space. It covers server space, security, backups, and continuous operation.' },
                { question: 'Can I stop hosting whenever I want?', answer: 'Yes. There is no minimum period or cancellation penalty.' },
                { question: 'How long does website delivery take?', answer: 'Once we have received all material, we deliver in 5-10 working days.' },
                { question: 'Do I need a website if I already have a social media page?', answer: 'Yes. A website brings clients from Google and provides total professionalism and reliability.' },
                { question: 'What is the Contactless Review Stand (NFC)?', answer: 'A physical card where the client taps their phone and goes directly to your Google reviews page. It costs €25 one-time.' },
                { question: 'How can I contact you?', answer: 'Send us an email at angelos@advonmedia.com or book a free appointment.' }
            ]
        };`;

    content = content.replace(/const faqs = \{[\s\S]*?\n        \};\n/, newFaqsStr + '\n');

    // 2. Fix the Nav translation
    content = content.replace(/'Υπηρεσίες <i/g, '`${t.nav.services} <i');
    content = content.replace(/>Κατασκευή Ιστοσελίδας<\/a>/g, '>${isEn ? "Website Creation" : "Κατασκευή Ιστοσελίδας"}</a>');
    content = content.replace(/>Ανέπαφες Αξιολογήσεις<\/a>/g, '>${isEn ? "NFC Reviews" : "Ανέπαφες Αξιολογήσεις"}</a>');
    content = content.replace(/>Διαχείριση Social Media<\/a>/g, '>${isEn ? "Social Media Management" : "Διαχείριση Social Media"}</a>');
    content = content.replace(/>Πορτφόλιο<span/g, '>${t.nav.portfolio}<span');
    content = content.replace(/>Αξιολογήσεις<span/g, '>${t.nav.reviews}<span');
    content = content.replace(/>FAQ<span/g, '>${t.nav.faq}<span');
    content = content.replace(/>Επικοινωνία<span/g, '>${t.nav.contact}<span');
    
    // mobile nav fix
    content = content.replace(/>Αρχική<\/a>/g, '>${isEn ? "Home" : "Αρχική"}</a>');
    content = content.replace(/>Υπηρεσίες<\/span>/g, '>${t.nav.services}</span>');
    content = content.replace(/>Πορτφόλιο<\/a>/g, '>${t.nav.portfolio}</a>');
    content = content.replace(/>Αξιολογήσεις<\/a>/g, '>${t.nav.reviews}</a>');
    content = content.replace(/>FAQ<\/a>/g, '>${t.nav.faq}</a>');
    content = content.replace(/>Επικοινωνία<\/a>/g, '>${t.nav.contact}</a>');
    
    // 3. Inject missing Reviews:
    const specificReviews = `
            { image: DEFAULT_AVATAR + 'Χριστόφορος+Παπ', name: 'Χριστόφορος Παπ', rating: 5, text: 'Άμεση ανταπόκριση σε αυτά που ήθελα να γίνουν για την ιστοσελίδα μου, είμαι πολύ ευχαριστημένος με τη δουλειά τους', textEn: 'Immediate response to what I wanted to be done for my website, I am very satisfied with their work' },
            { image: DEFAULT_AVATAR + 'maria+baloti', name: 'maria baloti', rating: 5, text: 'Υπέροχη συνεργασία! Μεγάλη συνέπεια! Ευχαριστώ', textEn: 'Wonderful collaboration! Great consistency! Thank you' },
            { image: DEFAULT_AVATAR + 'Constantina+Skourla', name: 'Constantina Skourla', rating: 5, text: 'Εξαιρετική συνεργασία. Κωνσταντίνα Σκουρλά, Ψυχολόγος- Ψυχοθεραπεύτρια', textEn: 'Excellent collaboration. Constantina Skourla, Psychologist- Psychotherapist' },
            { image: DEFAULT_AVATAR + 'Marina', name: 'Marina', rating: 5, text: 'Είχαμε μια πολύ καλή συνεργασία! Ευχαριστώ πολύ παιδιά!', textEn: 'We had a very good collaboration! Thank you very much guys!' },
            `;

    if (content.includes('const allReviews = [')) {
        content = content.replace('const allReviews = [', 'const allReviews = [\n' + specificReviews);
    }
    
    // fix text description:
    content = content.replace(
        "Στατιστικά μιλώντας, το 94% των ερωτηθέντων απάντησαν πως οι συνεργασία μας ήταν άψογη.",
        "Δείτε τι λένε οι πελάτες μας για τις ψηφιακές λύσεις που προσφέρουμε. Η ικανοποίησή σας είναι η μεγαλύτερη ανταμοιβή μας."
    );
    content = content.replace(
        "Our clients love us, and we think you will too. See what they have to say.",
        "See what our clients say about the digital solutions we offer. Your satisfaction is our greatest reward."
    );

    // Make sure we have 5.0 (75+)
    let oldStats = `
                    <div class="flex items-center gap-2 mb-4">
                        <div class="flex">
                            ${Array(5).fill('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#FBBC05]"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" /></svg>').join('')}
                        </div>
                        <span class="text-white font-black text-xl">5.0</span>
                        <span class="text-gray-400 font-medium">(75+)</span>
                    </div>`;
    if (!content.includes('<span class="text-white font-black text-xl">5.0</span>')) {
        content = content.replace('<h2 class="reveal text-5xl', oldStats + '\n<h2 class="reveal text-5xl');
    }
    
    // Also change the text inside `repeatedReviews.map` for the reviews:
    content = content.replace(/\$\{review\.text\}/g, '${isEn && review.textEn ? review.textEn : review.text}');

    fs.writeFileSync(fullPath, content, 'utf8');
}

updateFile('main.js');
updateFile('index.html');
