import { PortfolioItem, Review, FaqItem, ServiceType, ServiceData } from './types';
import { Globe, Star, Instagram } from 'lucide-react';

const DEFAULT_AVATAR = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export const portfolioItems: PortfolioItem[] = [
  // First Page Items (Requested Order)
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45b3d5f853873a9c68.jpg', url: 'https://angelikivrettou.gr', name: 'Αγγελική Βρεττού ΣΥΣΤΗΜΙΚΗ ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ MSC', nameEn: 'Angeliki Vrettou Systemic Psychotherapist MSC' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45b3d5f8cc953a9c69.jpg', url: 'https://mitsi-psychologist.gr', name: 'ERIOLA MITSI Ψυχολόγος & Γνωσιακή Συμπεριφορική Ψυχοθεραπεύτρια', nameEn: 'Eriola Mitsi Psychologist & CBT Therapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d4711e496f556.jpg', url: 'https://mantzioroupsychologist.gr', name: 'Χριστίνα Μαντζιώρου ΨΥΧΟΛΟΓΟΣ - ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ', nameEn: 'Christina Mantziorou Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45d614c9af3d3c0a07.jpg', url: 'https://highsoulbody.gr', name: 'ΔΑΝΑΗ ΑΛΕΞΑΝΔΡΙΔΟΥ Ολιστική Ψυχοθεραπεύτρια', nameEn: 'Danai Alexandridou Holistic Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d4794ec96f555.jpg', url: 'https://psychodev.gr', name: 'Σπύρος Αναγνώστου ΨΥΧΟΛΟΓΟΣ', nameEn: 'Spyros Anagnostou Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45d614c9ac5b3c0a02.jpg', url: 'https://giannakopoulou-psychologist.gr', name: 'ΜΑΡΙΑ ΓΙΑΝΝΑΚΟΠΟΥΛΟΥ Ψυχολόγος- Ψυχοθεραπεύτρια', nameEn: 'Maria Giannakopoulou Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d47854e96f553.jpg', url: 'https://chanioti-psychotherapy.gr', name: 'ΑΝΝΑ ΧΑΝΙΩΤΗ ΨΥΧΟΘΕΡΑΠΕΙΑ & ΣΥΜΒΟΥΛΕΥΤΙΚΗ', nameEn: 'Anna Chanioti Psychotherapy & Counseling' },
  
  // Previous First Page Items
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d97732b551c7381a45.jpg', url: 'https://giouliskondra-therapy.gr/home', name: 'Σκόνδρα Παναγιούλα – Ψυχολόγος', nameEn: 'Skondra Panagioula - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d918c33528d435252f.jpg', url: 'https://farantakis-psychotherapist.gr/home', name: 'Φαραντάκης Γιάννης - Ψυχολόγος', nameEn: 'Farantakis Giannis - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d918c33576a4352530.jpg', url: 'https://menetian-psychologist.gr', name: 'Μενετιάν Λοράνς - Ψυχολόγος', nameEn: 'Menetian Lorans - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d913fe2b4ebda2afef.jpg', url: 'https://giotakarampetsou.gr', name: 'Καραμπέτσου Παναγιώτα - Ψυχολόγος', nameEn: 'Karampetsou Panagiota - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d926ea6442a7a91af5.jpg', url: 'https://fatourou-ioulia-psychologos.gr', name: 'Φατούρου Ιουλία - Ψυχολόγος', nameEn: 'Fatourou Ioulia - Psychologist' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/11.jpg?raw=true', url: 'https://talamagka-psychologos.gr/home', name: 'Ταλαμάγκα Ελπίδα - Ψυχολόγος', nameEn: 'Talamagka Elpida - Psychologist' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/22.jpg?raw=true', url: 'https://roza-psychologist.gr', name: 'Χαρουτιουνιάν Ρόζα - Ψυχολόγος', nameEn: 'Haroutiounian Roza - Psychologist' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/33.jpg?raw=true', url: 'https://zampelis-psychology.gr', name: 'Ζαμπέλης Στέφανος - Ψυχολόγος', nameEn: 'Zampelis Stefanos - Psychologist' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/44.jpg?raw=true', url: 'https://nakou-psychologos.gr', name: 'Νάκου Δήμητρα - Ψυχολόγος', nameEn: 'Nakou Dimitra - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff573cc5fde7d814b0c.png', url: 'https://rhodesdentist.gr', name: 'Γλυνός Γεώργιος - Οδοντίατρος', nameEn: 'Glynos Georgios - Dentist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff57002eeb8d74c581c.png', url: 'https://apartmentsin-greece.gr', name: 'Αθήνα + Κρήτη - Διαμερίσματα', nameEn: 'Athens + Crete - Apartments' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff5be2f992fd50c4409.png', url: 'https://pediatrician-ioannisloukas.gr/en', name: 'Λουκάς Ιωάννης - Παιδίατρος', nameEn: 'Loukas Ioannis - Pediatrician' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb3e45df05181238c1.jpeg', url: 'https://loulou-physiotherapy.gr', name: 'Λουλού Χρυσάνθη - Φυσικοθεραπεύτρια', nameEn: 'Loulou Chrysanthi - Physiotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb7e579816e94176ed.jpeg', url: 'https://sofiavassiliadou-psyxiatros.gr', name: 'Βασιλειάδου Σοφία - Ψυχίατρος', nameEn: 'Vassiliadou Sofia - Psychiatrist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb5d191555856d1f45.jpeg', url: 'https://pappa-psyxologos.gr', name: 'Παππά Εμμανουέλα - Ψυχολόγος', nameEn: 'Pappa Emmanuela - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb10e4602f322522a4.jpeg', url: 'https://oikonomou-psyxologos.gr', name: 'Οικονόμου Χρυσούλα - Ψυχολόγος', nameEn: 'Oikonomou Chrysoula - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb5bfb334b18eec0a9.jpeg', url: 'https://stylianidou-psyxologos.gr', name: 'Στυλιανίδου Σοφία - Ψυχολόγος', nameEn: 'Stylianidou Sofia - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdbdf45434ecfb96d36.jpeg', url: 'https://tsekourakis-physiotherapy.gr', name: 'Τσεκουράκης Χρόνης - Φυσικοθεραπευτής', nameEn: 'Tsekourakis Chronis - Physiotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419ad87b047b548b858.jpeg', url: 'https://smaragdadimitra.gr', name: 'Δημητρά Σμαράγδα - Ψυχολόγος', nameEn: 'Dimitra Smaragda - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/690314195170a503ad1b3a49.jpeg', url: 'https://antamian-physiotherapy.gr', name: 'Ανταμιάν Ερμιόνη - Φυσικοθεραπεύτρια', nameEn: 'Antamian Ermioni - Physiotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419ad87b0376a48b859.jpeg', url: 'https://dorasizopoulou.gr', name: 'Σιζοπούλου Θεοδώρα - Ψυχολόγος', nameEn: 'Sizopoulou Theodora - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/690314195170a593181b3a4a.jpeg', url: 'https://zoetherapy.gr', name: 'Ανδρεαδάκη Ζωή - Ψυχολόγος', nameEn: 'Andreadaki Zoe - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419762d2cf9e43378e1.jpeg', url: 'https://memagiagkini-psyxologos.gr', name: 'Γιαγκίνη Μέμα - Ψυχολόγος', nameEn: 'Giagkini Mema - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc78adcfe610.jpeg', url: 'https://tsialiafa-dentalcare.gr', name: 'Τσιαλιάφα Ελένη - Οδοντίατρος', nameEn: 'Tsialiafa Eleni - Dentist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc95f3cfe5fb.jpeg', url: 'https://chatzistratis-paidiatros.gr', name: 'Χατζηστρατής Στράτος - Παιδίατρος', nameEn: 'Chatzistratis Stratos - Pediatrician' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf4c35d613678773f5.jpeg', url: 'https://occludent.gr', name: 'Φασούλα Μαρία - Οδοντίατρος', nameEn: 'Fasoula Maria - Dentist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc0857cfe5fc.jpeg', url: 'https://papathomas-vision.gr', name: 'Θωμάς Παπαθωμάς - Οφθαλμίατρος', nameEn: 'Thomas Papathomas - Ophthalmologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf337bbf261a42bbc3.jpeg', url: 'https://kk-dental.gr', name: 'Κωνσταντινίδης Κωνσταντίνος - Οδοντίατρος', nameEn: 'Konstantinidis Konstantinos - Dentist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf4c35d6bcaf8773f6.jpeg', url: 'https://mysmile-prosthodontics.gr', name: 'Μορδοχάι Νικήτας - Οδοντίατρος', nameEn: 'Mordochai Nikitas - Dentist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff5e811867d962b0b12.png', url: 'https://wonderfulspecs.gr', name: 'WonderfulSpecs - Οπτικά', nameEn: 'WonderfulSpecs - Optics' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff57d6e345146f91a82.png', url: 'https://astra-paidiatros.gr', name: 'Αστρά Ελένη - Παιδίατρος', nameEn: 'Astra Eleni - Pediatrician' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/672106acbe2f9908390c468b.png', url: 'https://barampouti-ofthalmiatros.gr', name: 'Μπαραμπούτη Φαίη - Οφθαλμίατρος', nameEn: 'Barampouti Faye - Ophthalmologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972bc1bea3590d2fcd5.jpeg', url: 'https://eye-orl.gr', name: 'Οφθαλμίατρος + Ωτορινολαρυγγολόγος', nameEn: 'Ophthalmologist + ENT' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972e3c40936dec8067b.jpeg', url: 'https://davou-ofthalmiatros.gr', name: 'Δάβου Σταυρούλα - Οφθαλμίατρος', nameEn: 'Davou Stavroula - Ophthalmologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c29725cb3bb547ceacc82.jpeg', url: 'https://vouza-ofthalmiatros.gr', name: 'Βούζα Ασπασία - Οφθαλμίατρος', nameEn: 'Vouza Aspasia - Ophthalmologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297207bcd3c2755ce584.jpeg', url: 'https://thetidasvilla.gr', name: 'Κάρπαθος - Βίλα', nameEn: 'Karpathos - Villa' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297207bcd3a84a5ce586.jpeg', url: 'https://panousopoulou-paidiatros.gr', name: 'Πανουσοπούλου Χριστίνα - Παιδίατρος', nameEn: 'Panousopoulou Christina - Pediatrician' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972fbe6f42e908208cb.jpeg', url: 'https://giamouris-paidiatros.gr', name: 'Γιαμούρης Μανόλης - Παιδίατρος', nameEn: 'Giamouris Manolis - Pediatrician' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c29722809a9b32a06926f.jpeg', url: 'https://theodosis-orila.gr', name: 'Θεοδώσης Πέτρος - Ωτορινολαρυγγολόγος', nameEn: 'Theodosis Petros - ENT Surgeon' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297251e5e5089ade7e7e.jpeg', url: 'https://zormpa-dentist.gr', name: 'Ζορμπά Θωμαής - Οδοντίατρος', nameEn: 'Zormpa Thomais - Dentist' },
  
  // Randomly Placed New Items (Appended)
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45fa6b7b92a418f1cd.jpg', url: 'https://yiota-kalliontzaki.gr', name: 'Γιώτα Καλλιοντζάκη - Ψυχολόγος', nameEn: 'Yiota Kalliontzaki - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45b3d5f870383a9c67.jpg', url: 'https://karouzioanna-psychologist.gr', name: 'ΙΩΑΝΝΑ ΚΑΡΟΥΖΗ ΨΥΧΟΛΟΓΟΣ - ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ', nameEn: 'Ioanna Karouzi Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45ee19cf418bb2e495.jpg', url: 'https://asimakopoulou-psychologos.gr', name: 'Ιωάννα Ασημακοπούλου Ψυχολόγος - Ψυχοθεραπεύτρια', nameEn: 'Ioanna Asimakopoulou Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d47889396f554.jpg', url: 'https://elenakovaiou-psychologist.gr', name: 'Έλενα Κωβαίου Ψυχολόγος – Ψυχοθεραπεύτρια', nameEn: 'Elena Kovaiou Psychologist - Psychotherapist' },
];

export const reviews: Review[] = [
  {
    image: DEFAULT_AVATAR + 'Γιώργος+Π',
    name: 'Γιώργος Π.',
    rating: 5,
    text: 'Εξαιρετική συνεργασία! Η ιστοσελίδα μας είναι σύγχρονη, γρήγορη και φέρνει αποτελέσματα. Το σημαντικότερο είναι ότι νιώθουμε πως έχουμε έναν αξιόπιστο συνεργάτη δίπλα μας.'
  },
  {
    image: DEFAULT_AVATAR + 'Μαρία+Κ',
    name: 'Μαρία Κ.',
    rating: 5,
    text: 'Η ομάδα της Advon Media ανέλαβε τα social media μας και είδαμε τεράστια διαφορά στην αλληλεπίδραση με τους πελάτες. Πολύ επαγγελματική δουλειά.'
  },
  {
    image: DEFAULT_AVATAR + 'Δημήτρης+Α',
    name: 'Δημήτρης Α.',
    rating: 5,
    text: 'Άμεση ανταπόκριση σε ό,τι χρειαστήκαμε. Η ανέπαφη βάση αξιολογήσεων μας βοήθησε να συγκεντρώσουμε πολλές θετικές κριτικές σε σύντομο χρονικό διάστημα.'
  }
];

export const faqItems: FaqItem[] = [
  { question: 'Τι είναι η Advon Media;', answer: 'Είμαστε ένα ψηφιακό marketing agency που ειδικεύεται σε στρατηγική, social media και περιεχόμενο.' },
  { question: 'Ποιες υπηρεσίες προσφέρετε;', answer: 'Κατασκευή ιστοσελίδων, δημιουργία περιεχομένου + διαχείριση social media και ανέπαφες (NFC) βάσεις αξιολογήσεων.' },
  { question: 'Πόσο διαρκεί η παράδοση μιας ιστοσελίδας;', answer: 'Από τη στιγμή που έχουμε λάβει όλο το υλικό, μπορούμε να ολοκληρώσουμε την κατασκευή σε 5-10 ημέρες.' },
  { question: 'Πώς μπορώ να επικοινωνήσω;', answer: 'Στείλτε μας email στο advonmd@gmail.com και θα επικοινωνήσουμε άμεσα μαζί σας.' },
];

export const servicesData: ServiceData[] = [
  {
    id: ServiceType.WEBSITE,
    icon: Globe,
    price: 'ΔΩΡΕΑΝ',
    priceNote: '(μόνο 10.83€/μήνα hosting)',
    title: 'Κατασκευή Ιστοσελίδας',
    shortDesc: 'Επαγγελματική ιστοσελίδα που κατακτά υψηλές θέσεις στη Google.',
    features: ['Επαγγελματικός σχεδιασμός', 'SEO βελτιστοποίηση', 'Mobile responsive', 'Παράδοση σε 5-10 ημέρες'],
    ctaText: 'Δωρεάν Κατασκευή',
    modalContent: {
      title: 'Δωρεάν Κατασκευή Ιστοσελίδας',
      body: [
        'Δεν είναι κάποιο μάρκετινγκ τρικ, όντως η κατασκευή που κοστίζει κανονικά 700-2000€+, είναι εντελώς δωρεάν.',
        'Το μόνο κόστος για εσάς που δεν μπορούμε να καλύψουμε έιναι η φιλοξενία της ιστοσελίδας σε σέρβερ στο διαδίκτυο (γνωστό και ως hosting) και το domain name (το www.παράδειγμα.gr). Τα αναλαμβάνουμε και τα 2 σαν διαδικασίες εμείς!',
        'Το κάνουμε αυτό γιατί θέλουμε να προσθέσουμε όσες περισσότερες ιστοσελίδες γίνεται στο πορτφόλιο μας για να μπορούμε στο μέλλον και εμείς να έχουμε υψηλές τιμές και κέρδη.',
        'Συνολικά είναι μόνο 10.83€/μήνα (που θα πληρώνατε όπως και να έχει, όπου και αν κατασκευάζατε μια ιστοσελίδα, όπως πληρώνουν και όλοι που ήδη έχουν).',
        'Aναβαθμίστε την επαγγελματική σας παρουσία στο διαδίκτυο και μετατρέψτε τους επισκέπτες της ιστοσελίδας σας σε αφοσιωμένους πελάτες!',
        'Το 2025, η κατοχή μιας επαγγελματικής ιστοσελίδας δεν είναι απλώς ένα επιπλέον εργαλείο — είναι μια αναγκαιότητα για κάθε ελεύθερο επαγγελματία και επιχείρηση που θέλει να ξεχωρίσει στον ψηφιακό κόσμο.',
        'Μια καλά σχεδιασμένη ιστοσελίδα σας βοηθά να κατακτήσετε υψηλότερες θέσεις στις μηχανές αναζήτησης, καθώς η Google αξιολογεί τις ιστοσελίδες ως πιο αξιόπιστες και με πιο ολοκληρωμένο προφίλ.',
        'Η ιστοσελίδα σας λειτουργεί ως η ψηφιακή σας βιτρίνα, ενισχύοντας την επαγγελματική σας εικόνα και προβάλλοντας την επιχείρησή σας ως σοβαρή και αξιόπιστη στους επισκέπτες. Επιπλέον, προσφέρει στους χρήστες εύκολη πρόσβαση σε όλες τις απαραίτητες πληροφορίες, καθιστώντας την εμπειρία τους πιο άνετη και άμεση.',
        '----',
        'Πανεύκολη Διαδικασία Κατασκευής:',
        'Για να μειώσουμε τον χρόνο επένδυσης σας στην κατασκευή χρειαζόμαστε από εσάς μόνο:',
        '• 1) Τις φωτογραφίες που θέλετε να περιλαμβάνει η ιστοσελίδα σας (δική σας επαγγελματική, του χώρου ή/και του προσωπικού)',
        '• 2) Κάποια βασικά κείμενα για εσάς ή την επιχείρηση σας (μπορεί να είναι και πολύ μικρά, αναλμβάνουμε εμείς την κειμενογραφία)',
        '• 3) Τις υπηρεσίες σας μονολεκτικά',
        '• 4) Τα στοιχεία επικοινωνίας σας (τηλέφωνο, email, διεύθυνση, ωράριο λειτουργίας)',
        '• 5) Ένα λογότυπο αν έχετε, αλλιώς σας φτιάχνουμε ένα εμείς',
        'Όλα τα υπόλοιπα τα αναλαμβάνουμε εμείς (χρώματα design,κείμενα κλπ) και εννοείται μετά κάνουμε όσες αλλαγές επιθυμείτε.',
        'Εννοείται πως μπορείτε να μας στείλετε οτιδήποτε θα θέλατε να υπάρχει στην ιστοσελίδα σας. Τα παραπάνω είναι απλώς τα βασικά που χρειαζόμαστε και αρκούν για ένα εξαιρετικό και επαγγελματικό αποτέλεσμα.',
        'Διασφαλίστε ότι η επιχείρησή σας παραμένει μπροστά από τον ανταγωνισμό με μια ισχυρή, επαγγελματική παρουσία στο διαδίκτυο που κερδίζει την εμπιστοσύνη τόσο των επισκεπτών σας όσο και των μηχανών αναζήτησης.'
      ]
    }
  },
  {
    id: ServiceType.NFC,
    icon: Star,
    price: '25€',
    priceNote: 'εφάπαξ',
    title: 'Ανέπαφη Βάση Αξιολογήσεων',
    shortDesc: '50+ νέες αξιολογήσεις κάθε μήνα. Ανεβείτε στην κορυφή της Google σε 3 μήνες.',
    features: ['Αύξηση κριτικών Google', 'Βελτίωση τοπικού SEO', 'Εύκολη χρήση (NFC)', 'Χωρίς μηνιαία συνδρομή'],
    ctaText: 'Αγορά Τώρα',
    modalContent: {
      title: 'Ανέπαφη Βάση Αξιολογήσεων',
      body: [
        'Ανεβείτε στη κορυφή της Google και αποκτήστε 150 νέες αξιολογήσεις σε λιγότερο απο 3 μήνες.',
        'Το πρώτο που κάνει κάποιος όταν αναζητεί μια επιχείρηση είναι να δει τις κριτικές της.',
        'Αν έχετε ελάχιστες είναι πολύ πιθανό να χάσετε πελάτες από τον ανταγωνισμό.',
        'Αλλά δεν είναι μόνο οι πελάτες που επηρεάζονται!',
        'Η Google, ως μηχανή αναζήτησης, θέλει να παρέχει τα πιο στοχευμένα αλλά και έγκυρα αποτελέσματα δίνοντας έτσι κύρια σημασία στις αξιολογήσεις.',
        'Όταν το ζητάτε από τους πελάτες σας συνήθως το ξεχνάνε ή δεν επενδύουν τον χρόνο να ψάξουν.',
        'Με την ανέπαφη βάση αξιολογήσεων μας μπορείτε να αποκτάτε τούλαχιστον 50 νέες κριτικές κάθε μήνα έυκολα και γρήγορα!',
        'Υπολογίστε και μόνοι σας (πχ 8 πελάτες ανά ημέρα, 20 εργάσιμες = 160 πελάτες τον μήνα. Αν λιγότεροι από τους μισόυς, οι 50, σας αφήσουν μια αξιολόγηση, έχετε 150 νέες σε 3 μήνες).'
      ]
    }
  },
  {
    id: ServiceType.SOCIAL,
    icon: Instagram,
    price: '87€/μήνα',
    title: 'Διαχείριση Social Media',
    shortDesc: 'Επαγγελματικά posts, hashtag research, copywriting. 7 ημέρες δωρεάν δοκιμή.',
    features: ['3 posts/εβδομάδα', 'Hashtag research', 'Copywriting', 'Μηνιαία αναφορά'],
    ctaText: 'Δωρεάν Δοκιμή',
    modalContent: {
      title: 'ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΔΙΑΧΕΙΡΙΣΗ SOCIAL MEDIA',
      body: [
        '• Επαγγελματικά Επεξεργασμένα Posts ανά ημέρα : Δημοσιεύουμε αναρτήσεις που τραβούν την προσοχή των πελατών σας, χρησιμοποιώντας προγράμματα επεξεργασίας συνδυαστικής αξίας 300+ευρώ τον μήνα, όπως Adscreative.io, Photoroom, Photoshop, Adobe Premium, Canvas Pro, Picsart Pro και άλλα.',
        '• Έρευνα Hashtags: Χρησιμοποιούμε τα καλύτερα hashtags ανάλογα με την επιχείρηση, τις υπηρεσίες, το κοινό και την τοποθεσία για να ενισχύσουμε την απήχησή σας και να σας φέρουμε μπροστά σε νέο κοινό.',
        '• Επαγγελματική Κειμενογραφία για κάθε ανάρτηση που οδηγούν τον αναγνώστη σε μια επιθυμητή ενέργεια (πχ να κλείσει ραντεβού κλπ)',
        '• Επεξεργασία - Δημιουργία επαγγελματικού βιογραφικού για το προφιλ σας',
        '• Αναφορές Προόδου: Παρέχουμε μηνιαία ανάλυση της ανάπτυξης των ακολούθων και της αλληλεπίδρασης με τις δημοσιεύσεις σας.',
        '• Ευκολία & Άνεση: Το μόνο που χρειάζεται να κάνετε είναι να μας στείλετε φωτογραφίες της επιχείρησής σας μέσω WeTransfer, και εμείς θα αναλάβουμε τα υπόλοιπα. Αν δεν έχετε μπορούμε να δημιουργούμε εμείς δικά μας designs, χωρίς καμία επένδυση χρόνου από εσάς!',
        'Δωρεάν Δοκιμή',
        'No contracts - cancel anytime',
        '----',
        'Γιατί να Μας Επιλέξετε:',
        'Οικονομικό πακέτο & Χωρίς Ρίσκο: Με μόνο 87 ευρώ τον μήνα και εγγύηση επιστροφής χρημάτων, αφαιρούμε κάθε ρίσκο από την απόφασή σας. Αν δεν είστε απόλυτα ικανοποιημένοι, σας επιστρέφουμε τα χρήματά σας – χωρίς ερωτήσεις.',
        'Προσωποποιημένη Υπηρεσία: Προσαρμόζουμε το περιεχόμενο σύμφωνα με τις ανάγκες της επιχείρησής σας, ώστε να αντανακλά την ταυτότητα και το στυλ σας.',
        'Άμεση Έναρξη: Κλείστε τη θέση σας τώρα – διαθέτουμε μόνο λίγες θέσεις για νέους πελάτες κάθε μήνα, ώστε να διατηρήσουμε την ποιότητα της υπηρεσίας μας.',
        'Καμία Δέσμευση: Μπορείτε να σταματήσετε οποιαδήποτε στιγμή χωρίς μακροχρόνια συμβόλαια.',
        'Αποτέλεσμα: Περισσότεροι Πελάτες & Επαγγελματική Παρουσία',
        'Με τη σωστή διαχείριση του Instagram, θα δείτε αυξημένη αλληλεπίδραση, μεγαλύτερη βάση πελατών, και ένα προφίλ που προσελκύει την προσοχή και δημιουργεί εμπιστοσύνη.',
        'Εγγραφείτε σήμερα και εξασφαλίστε την ειδική τιμή των 87€ μήνα.',
        'Στείλτε μας email στο advonmd@gmail.com για περαιτέρω επικοινωνία. (το ελέγχουμε καθημερινά)'
      ]
    }
  }
];