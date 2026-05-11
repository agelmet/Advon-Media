import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
};

const translations = {
  el: {
    nav: {
      home: 'Αρχική',
      services: 'Υπηρεσίες',
      portfolio: 'Portfolio',
      reviews: 'Reviews',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Επικοινωνία',
    },
    home: {
      badge: 'ADVON MEDIA',
      title: 'Επαγγελματική Κατασκευή Ιστοσελίδων',
      titleHighlight: 'Επαγγελματική Κατασκευή Ιστοσελίδων',
      titleSuffix: ' στην Ελλάδα',
      description: 'Αυξήστε τις πωλήσεις σας με premium Web Design και στοχευμένες στρατηγικές Digital Marketing. Κατασκευάζουμε γρήγορες, ασφαλείς και βελτιστοποιημένες SEO ιστοσελίδες για επιχειρήσεις σε όλη την Ελλάδα.',
      btnServices: 'ΥΠΗΡΕΣΙΕΣ',
      btnPortfolio: 'PORTFOLIO',
      btnBook: 'ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ',
      stats: [
        { num: '3+', label: 'ΧΡΟΝΙΑ ΕΜΠΕΙΡΙΑΣ' },
        { num: '120+', label: 'ΕΥΧΑΡΙΣΤΗΜΕΝΟΙ ΠΕΛΑΤΕΣ' },
        { num: '100%', label: 'ΕΠΙΤΥΧΙΑ' },
        { num: '75+', label: '5-ΑΣΤΕΡΕΣ ΑΞΙΟΛΟΓΗΣΕΙΣ' }
      ]
    },
    services: {
      badge: 'ΥΠΗΡΕΣΙΕΣ',
      title: 'Λύσεις Που Αποδίδουν',
      noCommitment: 'Χωρίς δεσμεύσεις - Ακύρωση ανά πάσα στιγμή',
      learnMore: 'Μάθετε Περισσότερα',
      items: [
        {
          title: 'Κατασκευή Ιστοσελίδας',
          price: 'ΔΩΡΕΑΝ',
          priceNote: '(μόνο 10.83€/μήνα φιλοξενία + δωρεάν domain)',
          shortDesc: 'Επαγγελματική ιστοσελίδα που βρίσκεται ψηλά στη Google.',
          features: [
            'Προσαρμοσμένος Σχεδιασμός UI/UX για μέγιστες μετατροπές',
            'Βελτιστοποίηση On-Page SEO για την 1η σελίδα της Google',
            '100% Mobile Responsive & βελτιστοποίηση Core Web Vitals',
            'Γρήγορη παράδοση σε 5-10 ημέρες'
          ],
          ctaText: 'ΞΕΚΙΝΗΣΤΕ ΔΩΡΕΑΝ'
        },
        {
          title: 'Stand Ανέπαφων Αξιολογήσεων',
          price: '25€',
          priceNote: 'εφάπαξ',
          shortDesc: '50+ νέες αξιολογήσεις μηνιαίως. Ανεβείτε στην κορυφή της Google σε 3 μήνες.',
          features: [
            'Αύξηση Αξιολογήσεων Google',
            'Βελτίωση Τοπικού SEO',
            'Εύκολο στη χρήση (NFC)',
            'Χωρίς μηνιαία συνδρομή'
          ],
          ctaText: 'ΑΓΟΡΑΣΤΕ ΤΩΡΑ'
        },
        {
          title: 'Διαχείριση Social Media',
          price: '87€/μήνα',
          priceNote: '',
          shortDesc: 'Επαγγελματικές δημοσιεύσεις, έρευνα hashtag, copywriting. Δωρεάν δοκιμή 7 ημερών.',
          features: [
            '3 δημοσιεύσεις/εβδομάδα',
            'Έρευνα Hashtag',
            'Copywriting',
            'Μηνιαία Αναφορά'
          ],
          ctaText: 'ΔΩΡΕΑΝ ΔΟΚΙΜΗ'
        }
      ]
    },
    portfolio: {
      badge: 'PORTFOLIO',
      title: 'Δείτε τη Δουλειά Μας',
      visit: 'Επίσκεψη'
    },
    contact: {
      badge: 'ΕΠΙΚΟΙΝΩΝΙΑ | 5.0 (75+)',
      title: 'Ας Συνεργαστούμε',
      desc: 'Συμπληρώστε τη φόρμα και ένας εκπρόσωπος θα επικοινωνήσει μαζί σας μέσω email ή τηλεφώνου την ίδια μέρα.',
      formName: 'ΟΝΟΜΑ / ΕΤΑΙΡΕΙΑ',
      formEmail: 'EMAIL',
      formPhone: 'ΤΗΛΕΦΩΝΟ',
      formMessage: 'ΜΗΝΥΜΑ / ΥΠΗΡΕΣΙΑ ΠΟΥ ΣΑΣ ΕΝΔΙΑΦΕΡΕΙ',
      formSubmit: 'ΑΠΟΣΤΟΛΗ',
      bookTitle: 'Κλείστε Ραντεβού',
      bookDesc: 'Επιλέξτε την ημέρα και ώρα που σας βολεύει για μια δωρεάν συμβουλευτική κλήση.',
      emailTitle: 'Email',
      igTitle: 'Στείλτε Μήνυμα'
    },
    blog: {
      badge: 'ADVON MEDIA BLOG',
      title: 'Διαβάστε τα Νέα μας',
      posts: [
        {
            title: 'Η Σημασία του SEO το 2026',
            description: 'Μάθετε γιατί οι τεχνικές SEO είναι κρίσιμες για την ανάπτυξη της επιχείρησής σας.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Διαχείριση Social Media για Επαγγελματίες',
            description: 'Πώς να αυξήσετε την απήχησή σας στο Instagram με τις σωστές στρατηγικές.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Τάσεις Web Design που θα κυριαρχήσουν',
            description: 'Οι νεότερες τάσεις στον σχεδιασμό ιστοσελίδων που αυξάνουν τις μετατροπές.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        }
      ]
    },
    contactPage: {
      title: 'Επικοινωνήστε Μαζί Μας',
      subtitle: 'Κάντε scroll προς τα κάτω για να συμπληρώσετε τη φόρμα επικοινωνίας.'
    },
    footer: {
      rights: '© 2026 Advon Media. Με επιφύλαξη παντός δικαιώματος.'
    },
    reviews: {
      badge: 'ΑΞΙΟΛΟΓΗΣΕΙΣ',
      title: 'Τι Λένε Οι Πελάτες Μας',
      seeAll: 'ΟΛΕΣ ΟΙ ΑΞΙΟΛΟΓΗΣΕΙΣ',
      verified: 'Επαληθευμένος Πελάτης'
    },
    faq: {
      badge: 'FAQ',
      title: 'Συχνές Ερωτήσεις',
      items: [
        { question: 'Τι είναι η Advon Media;', answer: 'Είμαστε ένα ψηφιακό agency που ειδικεύεται στο Web Design και το Digital Marketing.' },
        { question: 'Ποιες υπηρεσίες προσφέρετε;', answer: 'Προσφέρουμε κατασκευή ιστοσελίδων, Stand Αξιολογήσεων (NFC) και Διαχείριση Social Media.' },
        { question: "Γιατί η κατασκευή της ιστοσελίδας είναι δωρεάν; Ποια είναι η παγίδα;", answer: 'Δεν υπάρχει παγίδα! Κατασκευάζουμε την ιστοσελίδα δωρεάν· πληρώνετε μόνο ένα μικρό μηνιαίο ποσό για τη φιλοξενία (hosting).' },
        { question: 'Τι σημαίνει "hosting" και γιατί κοστίζει 10.83€/μήνα;', answer: 'Φιλοξενία (hosting) είναι ο χώρος στον server όπου "ζουν" τα αρχεία της ιστοσελίδας σας. Χωρίς αυτό, το site σας δεν θα ήταν προσβάσιμο στο διαδίκτυο.' },
        { question: 'Μπορώ να διακόψω το hosting όποτε θέλω;', answer: 'Ναι! Δεν υπάρχουν δεσμεύσεις ή μακροχρόνια συμβόλαια. Μπορείτε να ακυρώσετε τη φιλοξενία σας ανά πάσα στιγμή.' },
        { question: 'Πόσος χρόνος χρειάζεται για την παράδοση της ιστοσελίδας;', answer: 'Συνήθως 5-10 ημέρες, ανάλογα με την πολυπλοκότητα.' },
        { question: 'Χρειάζομαι ιστοσελίδα αν έχω ήδη σελίδα στα social media;', answer: 'Ναι! Μια ιστοσελίδα σας δίνει τον πλήρη έλεγχο της μάρκας σας, καλύτερη κατάταξη στο SEO και φαίνεστε πιο επαγγελματίες στους υποψήφιους πελάτες.' },
        { question: 'Τι είναι το Stand Ανέπαφων Αξιολογήσεων (NFC);', answer: 'Είναι ένα φυσικό σταντ που οι πελάτες μπορούν να ακουμπήσουν με το κινητό τους για να αφήσουν άμεσα μια αξιολόγηση 5 αστέρων στο Google για την επιχείρησή σας.' },
        { question: 'Πώς μπορώ να επικοινωνήσω μαζί σας;', answer: 'Μπορείτε να επικοινωνήσετε μέσω της παρακάτω φόρμας, στέλνοντας email στο angelos@advonmedia.com ή μέσω της σελίδας μας στο Instagram.' }
      ]
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      reviews: 'Reviews',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      badge: 'ADVON MEDIA',
      title: 'Professional Website Creation',
      titleHighlight: 'Professional Website Creation',
      titleSuffix: ' in Greece',
      description: 'Increase your sales with premium Web Design and targeted Digital Marketing strategies. We build blazing fast, secure, and SEO-optimized websites for businesses all across Greece.',
      btnServices: 'SERVICES',
      btnPortfolio: 'PORTFOLIO',
      btnBook: 'BOOK APPOINTMENT',
      stats: [
        { num: '3+', label: 'YEARS OF EXPERIENCE' },
        { num: '120+', label: 'SATISFIED CLIENTS' },
        { num: '100%', label: 'SUCCESS' },
        { num: '75+', label: '5-STAR REVIEWS' }
      ]
    },
    services: {
      badge: 'SERVICES',
      title: 'Solutions That Deliver',
      noCommitment: 'No commitment - Cancel Anytime',
      learnMore: 'Learn More',
      items: [
        {
          title: 'Website Creation',
          price: 'FREE',
          priceNote: '(only 10.83€/mo hosting + free domain)',
          shortDesc: 'Professional website that ranks high on Google.',
          features: [
            'Custom UI/UX Design for maximum conversions',
            'On-Page SEO Optimization for Google 1st page',
            '100% Mobile Responsive & Core Web Vitals optimized',
            'Fast delivery in 5-10 days'
          ],
          ctaText: 'GET STARTED FREE'
        },
        {
          title: 'Contactless Review Stand',
          price: '25€',
          priceNote: 'one-time',
          shortDesc: '50+ new reviews monthly. Reach the top of Google in 3 months.',
          features: [
            'Increase Google Reviews',
            'Improve Local SEO',
            'Easy to use (NFC)',
            'No monthly fee'
          ],
          ctaText: 'BUY NOW'
        },
        {
          title: 'Social Media Management',
          price: '87€/mo',
          priceNote: '',
          shortDesc: 'Professional posts, hashtag research, copywriting. 7-day free trial.',
          features: [
            '3 posts/week',
            'Hashtag research',
            'Copywriting',
            'Monthly Report'
          ],
          ctaText: 'FREE TRIAL'
        }
      ]
    },
    portfolio: {
      badge: 'PORTFOLIO',
      title: 'See Some of Our Work',
      visit: 'Visit Website'
    },
    contact: {
      badge: 'CONTACT | 5.0 (75+)',
      title: 'Let\'s Collaborate',
      desc: 'Fill out the form and a representative will contact you via email or phone within the same day.',
      formName: 'NAME / COMPANY',
      formEmail: 'EMAIL',
      formPhone: 'PHONE NUMBER',
      formMessage: 'MESSAGE / SERVICE YOU ARE INTERESTED IN',
      formSubmit: 'SEND',
      bookTitle: 'Book Appointment',
      bookDesc: 'Choose the day and time that suits you for a free consultation call.',
      emailTitle: 'Email',
      igTitle: 'Message Us'
    },
    blog: {
      badge: 'ADVON MEDIA BLOG',
      title: 'Read Our News',
      posts: [
        {
            title: 'The Importance of SEO in 2026',
            description: 'Learn why SEO techniques are critical for the growth of your business.',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Social Media Management for Professionals',
            description: 'How to increase your reach on Instagram with the right strategies.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Web Design Trends to Dominate',
            description: 'The latest trends in web design that increase conversions.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        }
      ]
    },
    contactPage: {
      title: 'Get In Touch',
      subtitle: 'Scroll down to express your interest our reach out to us directly.'
    },
    footer: {
      rights: '© 2026 Advon Media. All rights reserved.'
    },
    reviews: {
      badge: 'REVIEWS',
      title: 'What Our Clients Say',
      seeAll: 'SEE ALL REVIEWS',
      verified: 'Verified Client'
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { question: 'What is Advon Media?', answer: 'We are a digital agency specializing in Web Design and Digital Marketing.' },
        { question: 'What services do you offer?', answer: 'We offer Website Creation, Contactless Review Stands (NFC), and Social Media Management.' },
        { question: "Why is website creation free? What's the catch?", answer: 'There is no catch! We build the website for free; you only pay a small monthly fee for hosting.' },
        { question: 'What does "hosting" mean and why does it cost €10.83/month?', answer: 'Hosting is the server space where your website files live online. Without it, your site wouldn\'t be accessible on the internet.' },
        { question: 'Can I stop hosting whenever I want?', answer: 'Yes! There are no long-term contracts. You can cancel your hosting at any time.' },
        { question: 'How long does website delivery take?', answer: 'Usually between 5 to 10 days, depending on the complexity.' },
        { question: 'Do I need a website if I already have a social media page?', answer: 'Yes! A website gives you full ownership over your brand, better SEO ranking, and looks more professional to potential clients.' },
        { question: 'What is the Contactless Review Stand (NFC)?', answer: 'It is a physical stand that customers can tap with their phone to instantly leave a 5-star Google review for your business.' },
        { question: 'How can I contact you?', answer: 'You can contact us via the form below, by emailing angelos@advonmedia.com, or through our Instagram page.' }
      ]
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('el');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

