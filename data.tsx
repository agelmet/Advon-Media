import { PortfolioItem, Review, FaqItem, ServiceType, ServiceData } from './types';
import { Globe, Star, Share2 } from 'lucide-react';

const DEFAULT_AVATAR = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export const portfolioItems: PortfolioItem[] = [
  // First Page Items (Requested Order)
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/gerou.jpg?raw=true', url: 'https://mairagerou-psychologist.gr', name: 'Μάιρα Γέρου, Ψυχολόγος', nameEn: 'Maira Gerou, Psychologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/polymerop.jpg?raw=true', url: 'https://polymeropoulou-psychologos.gr', name: 'Λαμπρινή Πολυμεροπούλου (MSc), Ψυχολόγος', nameEn: 'Lamprini Polymeropoulou (MSc), Psychologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/sorokina.jpg?raw=true', url: 'https://sorokina-psychologist.gr', name: 'ΜΑΡΙΝΑ ΣΟΡΟΚΙΝΑ Ψυχολόγος - Ψυχοθεραπεύτρια', nameEn: 'Marina Sorokina Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/papazog.jpg?raw=true', url: 'https://papazoglou-psychologist.gr', name: 'Σάκης Παπάζογλου, Ψυχολόγος - Ψυχοθεραπευτής', nameEn: 'Sakis Papazoglou, Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/demeroutis.jpg?raw=true', url: 'http://demeroutis-psychverse.gr', name: 'Θοδωρής Δεμερούτης Ψυχολόγος και Ειδικευόμενος Συστημικός Ψυχοθεραπευτής', nameEn: 'Thodoris Demeroutis Psychologist and Trainee Systemic Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/dilana.jpg?raw=true', url: 'https://dilana-psychologos.gr', name: 'Ελένη Δηλανά Ψυχολόγος - Ψυχοθεραπεύτρια', nameEn: 'Eleni Dilana Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/keletseki.jpg?raw=true', url: 'https://keletseki-psychotherapy.gr', name: 'Κατερίνα Κελετσέκη Ψυχολόγος- Ψυχοθεραπεύτρια', nameEn: 'Katerina Keletseki Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/mixalop.jpg?raw=true', url: 'https://michalopoulou-ioulia-psychotherapy.gr', name: 'Ιουλία Μιχαλοπούλου (MSc) Ψυχολόγος – Ψυχοθεραπεύτρια', nameEn: 'Ioulia Michalopoulou (MSc) Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/alatsi.jpg?raw=true', url: 'https://christinaalatsi.gr', name: 'Χριστίνα Αλάτση Σύμβουλος ψυχικής υγείας, ψυχοθεραπεύτρια συνθετικής προσέγγισης, υπνοθεραπεύτρια και εναλλακτική θεραπεύτρια.', nameEn: 'Christina Alatsi Mental Health Counselor, Integrative Psychotherapist, Hypnotherapist and Alternative Therapist.' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/mixa.jpg?raw=true', url: 'https://elenimicha-psychologist.gr', name: 'Ελένη Μίχα Ψυχολόγος - CBT Ψυχοθεραπεύτρια, MSc Κλινική Νευροψυχολογία', nameEn: 'Eleni Micha Psychologist - CBT Psychotherapist, MSc Clinical Neuropsychology' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/sarlaki.jpg?raw=true', url: 'https://mairasarlaki.gr', name: 'Μάιρα Σαρλάκη Ψυχολόγος- ΜΑ Ψυχοθεραπεύτρια', nameEn: 'Maira Sarlaki Psychologist - MA Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/vetta.jpg?raw=true', url: 'https://marietavetta-psychotherapy.gr', name: 'Μαριέτα Βέττα Προσωποκεντρική Ψυχοθεραπεύτρια-Σύμβουλος ψυχικής υγείας και Τραυματοθεραπεύτρια DBR', nameEn: 'Marieta Vetta Person-Centered Psychotherapist-Mental Health Counselor and DBR Trauma Therapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/roumelioti.jpg?raw=true', url: 'https://mariannaroumelioti.gr', name: 'Μαριάννα Ρουμελιώτη Ψυχολόγος και Συνθετική Ψυχοθεραπεύτρια', nameEn: 'Marianna Roumelioti Psychologist and Integrative Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/ntinop.jpg?raw=true', url: 'https://healyouwell.gr', name: 'ΑΡΙΑΔΝΗ Α. ΝΤΙΝΟΠΟΥΛΟΥ Ψυχολόγος & Συστημική Ψυχοθεραπεύτρια', nameEn: 'Ariadni A. Ntinopoulou Psychologist & Systemic Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/simitsi.jpg?raw=true', url: 'https://drsimitsi-psychologist.gr', name: 'Χριστίνα Σιμιτσή Διδάκτωρ Κλινικής Δικαστικής Ψυχολογίας & Συστημική Ψυχοθεραπεύτρια', nameEn: 'Christina Simitsi Doctor of Clinical Forensic Psychology & Systemic Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d47854e96f553.jpg', url: 'https://parthenis-psychotherapy.gr', name: 'Αλέξανδρος Παρθένης Ψυχολόγος', nameEn: 'Alexandros Parthenis Psychologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/labrinou.jpg?raw=true', url: 'https://evalamprinou-psychologist.gr', name: 'Mind Your Emotion - Εύα Λαμπρινού, Ψυχολόγος και Κλινική Σεξολόγος', nameEn: 'Mind Your Emotion - Eva Lamprinou, Psychologist and Clinical Sexologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/boubaliki.jpg?raw=true', url: 'https://boubaliki-psychologos.gr', name: 'Ηλιάνα Μπουμπαλίκη Ψυχολόγος', nameEn: 'Iliana Boubaliki Psychologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/emirza.jpg?raw=true', url: 'https://skepsyxi.gr', name: 'Σαββίνα Εμιρζά (MSc) Ψυχολόγος και Οικογενειακή Ψυχοθεραπεύτρια', nameEn: 'Savvina Emirza (MSc) Psychologist and Family Psychotherapist' },
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
  { image: 'https://cdn.jsdelivr.net/gh/agelmet/Image-hosting-@main/11.jpg', url: 'https://talamagka-psychologos.gr/home', name: 'Ταλαμάγκα Ελπίδα - Ψυχολόγος', nameEn: 'Talamagka Elpida - Psychologist' },
  { image: 'https://cdn.jsdelivr.net/gh/agelmet/Image-hosting-@main/22.jpg', url: 'https://roza-psychologist.gr', name: 'Χαρουτιουνιάν Ρόζα - Ψυχολόγος', nameEn: 'Haroutiounian Roza - Psychologist' },
  { image: 'https://cdn.jsdelivr.net/gh/agelmet/Image-hosting-@main/33.jpg', url: 'https://zampelis-psychology.gr', name: 'Ζαμπέλης Στέφανος - Ψυχολόγος', nameEn: 'Zampelis Stefanos - Psychologist' },
  { image: 'https://cdn.jsdelivr.net/gh/agelmet/Image-hosting-@main/44.jpg', url: 'https://nakou-psychologos.gr', name: 'Νάκου Δήμητρα - Ψυχολόγος', nameEn: 'Nakou Dimitra - Psychologist' },
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
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/marketi.jpg?raw=true', url: 'https://konstantinamarketi-psychotherapist.gr', name: 'Κωνσταντίνα Μαρκέτη (MSc), Κλινική Ψυχολόγος - Ψυχοθεραπεύτρια', nameEn: 'Konstantina Marketi (MSc), Clinical Psychologist - Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/dalla.jpg?raw=true', url: 'https://dalla-psychologist.gr', name: 'Δανάη Δάλλα Ψυχολόγος', nameEn: 'Danai Dalla Psychologist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/andrikou.jpg?raw=true', url: 'https://andrikou-systherapy.gr', name: 'Αναστάσιος Ανδρίκου Συστημικός Οικογενειακός Ψυχοθεραπευτής και Σύμβουλος Ψυχικής Υγείας', nameEn: 'Anastasios Andrikou Systemic Family Psychotherapist and Mental Health Counselor' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/toulgaridou.jpg?raw=true', url: 'https://toulgaridou-psychologos.gr', name: 'Κατερίνα Τουλγαρίδου, Ψυχολόγος και Συστημική Ψυχοθεραπεύτρια', nameEn: 'Katerina Toulgaridou, Psychologist and Systemic Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/matoula.jpg?raw=true', url: 'https://matoula-psychotherapy.gr', name: 'Μαρία Ματούλα Κλινική Ψυχολόγος και Ψυχοθεραπεύτρια', nameEn: 'Maria Matoula Clinical Psychologist and Psychotherapist' },
  { image: 'https://github.com/agelmet/ASIMIADOU/blob/main/skandali.jpg?raw=true', url: 'https://skandali-therapist.gr', name: 'Μαίρη Σκανδάλη Προσωποκεντρική Ψυχοθεραπεύτρια και Σύμβουλος Ψυχικής Υγείας', nameEn: 'Mary Skandali Person-Centered Psychotherapist and Mental Health Counselor' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45fa6b7b92a418f1cd.jpg', url: 'https://yiota-kalliontzaki.gr', name: 'Γιώτα Καλλιοντζάκη - Ψυχολόγος', nameEn: 'Yiota Kalliontzaki - Psychologist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45b3d5f870383a9c67.jpg', url: 'https://karouzioanna-psychologist.gr', name: 'ΙΩΑΝΝΑ ΚΑΡΟΥΖΗ ΨΥΧΟΛΟΓΟΣ - ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ', nameEn: 'Ioanna Karouzi Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45ee19cf418bb2e495.jpg', url: 'https://asimakopoulou-psychologos.gr', name: 'Ιωάννα Ασημακοπούλου Ψυχολόγος - Ψυχοθεραπεύτρια', nameEn: 'Ioanna Asimakopoulou Psychologist - Psychotherapist' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69958e45905d47889396f554.jpg', url: 'https://elenakovaiou-psychologist.gr', name: 'Έλενα Κωβαίου Ψυχολόγος – Ψυχοθεραπεύτρια', nameEn: 'Elena Kovaiou Psychologist - Psychotherapist' },
];

export const reviews: Review[] = [
  {
    image: DEFAULT_AVATAR + 'Χριστόφορος+Π',
    name: 'Χριστόφορος Παπ',
    rating: 5,
    text: 'Άμεση ανταπόκριση σε αυτά που ήθελα να γίνουν για την ιστοσελίδα μου, είμαι πολύ ευχαριστημένος με τη δουλειά τους'
  },
  {
    image: DEFAULT_AVATAR + 'maria+b',
    name: 'maria baloti',
    rating: 5,
    text: 'Υπέροχη συνεργασία! Μεγάλη συνέπεια! Ευχαριστώ'
  },
  {
    image: DEFAULT_AVATAR + 'Constantina+S',
    name: 'Constantina Skourla',
    rating: 5,
    text: 'Εξαιρετική συνεργασία.\nΚωνσταντίνα Σκουρλά,\nΨυχολόγος- Ψυχοθεραπεύτρια'
  },
  {
    image: DEFAULT_AVATAR + 'Marina',
    name: 'Marina',
    rating: 5,
    text: 'Είχαμε μια πολύ καλή συνεργασία! Ευχαριστώ πολύ παιδιά!'
  },
  {
    image: DEFAULT_AVATAR + 'Ariadne+N',
    name: 'Ariadne Ntinopoulou',
    rating: 5,
    text: 'Εξαιρετική συνεργασία από την αρχή μέχρι το τέλος! Η ομάδα έδειξε πραγματικό επαγγελματισμό, συνέπεια και δημιουργικότητα σε κάθε στάδιο της κατασκευής του site μου. Άκουσαν προσεκτικά τις ανάγκες μου, πρότειναν λύσεις και το τελικό αποτέλεσμα ξεπέρασε τις προσδοκίες μου.\n\nΕίμαι απόλυτα ικανοποιημένη τόσο από την ποιότητα της δουλειάς τους όσο και από την άψογη επικοινωνία και υποστήριξη που είχα καθ’ όλη τη διάρκεια της συνεργασίας μας. Τους ευχαριστώ θερμά για τον χρόνο, το μεράκι και την αφοσίωση που έδειξαν. Τους συστήνω ανεπιφύλακτα!'
  },
  {
    image: DEFAULT_AVATAR + 'Ελένη+Μ',
    name: 'Ελένη Μίχα',
    rating: 5,
    text: 'Πολύ ευχάριστη συνεργασία. Προθυμία και όρεξη για customized δουλειά.\nΕλένη Μίχα, Ψυχολόγος - Ψυχοθεραπεύτρια'
  },
  {
    image: DEFAULT_AVATAR + 'Σαββινα+Ε',
    name: 'Σαββινα Εμιρζα',
    rating: 5,
    text: 'Η συνεργασία μας ήταν εξαιρετική !\nΟ Άγγελος πάντα παρών σε ο,τιδηποτε χρειάστηκε , άμεσος και εξυπηρετικότατος!\nΠολύ καλή και γρήγορη δουλειά !\nΤους προτείνω ανεπιφύλακτα !'
  },
  {
    image: DEFAULT_AVATAR + 'Maria+G',
    name: 'Maria G.',
    rating: 5,
    text: 'Εξαιρετική συνεργασία!! Έμεινα απόλυτα ικανοποιημένη! Γρήγορη εξυπηρέτηση και πολύ καλή επικοινωνία! Το τελικό αποτέλεσμα υπέροχο!'
  },
  {
    image: DEFAULT_AVATAR + 'Katerina+K',
    name: 'Katerina Keletseki',
    rating: 5,
    text: 'Η συνεργασία με την ομάδα ήταν εξαιρετική από την αρχή μέχρι το τέλος. Ανταποκρίθηκαν άμεσα σε κάθε μου ανάγκη, με ταχύτητα και επαγγελματισμό, ενώ η επικοινωνία μας ήταν πάντα ξεκάθαρη και αποτελεσματική. Ξεχώρισαν για την ευγένεια και τη διάθεσή τους να βοηθήσουν, κάνοντας όλη τη διαδικασία ευχάριστη και χωρίς άγχος. Το τελικό αποτέλεσμα ανταποκρίνεται πλήρως σε αυτό που είχα φανταστεί. Τους συστήνω ανεπιφύλακτα!'
  },
  {
    image: DEFAULT_AVATAR + 'Thodoris+D',
    name: 'Thodoris Demeroutis',
    rating: 5,
    text: 'Η εμπειρία μου με την ομάδα της Advon Media ήταν εξαιρετική! Επαγγελματίες, άμεσοι, ευγενικοί και το αποτέλεσμα ήταν υπέροχο και τεχνικά και αισθητικά! Σας ευχαριστώ πολύ!\n\nΘοδωρής Δεμερούτης\nΨυχολόγος - Ψυχοθεραπευτής'
  },
  {
    image: DEFAULT_AVATAR + 'Μαρια+Μ',
    name: 'Μαρια Ματουλα',
    rating: 5,
    text: 'Έμεινα πάρα πολύ ευχαριστημένη από την συνεργασία μας!'
  },
  {
    image: DEFAULT_AVATAR + 'Cristina+A',
    name: 'Cristina Alatsi',
    rating: 5,
    text: 'Θέλω να εκφράσω την ευχαρίστηση μου στην ομάδα advon για την δημιουργία του web site μου. Με επαγγελματισμό και συνέπεια ανταποκρίθηκαν στις ανάγκες μου δίνοντας μου τη δυνατότητα να έχω ό,τι χρειάζομαι σε ένα web site.'
  },
  {
    image: DEFAULT_AVATAR + 'Ilianaki+b',
    name: 'Ilianaki b96',
    rating: 5,
    text: 'Εξαιρετική συνεργασία και τρομεροί επαγγελματίες!\nΜπουμπαλίκη Ηλιάνα - Ψυχολόγος'
  },
  {
    image: DEFAULT_AVATAR + 'Εύα+Λ',
    name: 'Εύα Λα',
    rating: 5,
    text: 'Εξαιρετική εμπειρία συνεργασίας. Η ομάδα που ανέλαβε την κατασκευή της ιστοσελίδας μου έκανε πραγματικά άψογη δουλειά, δίνοντας προσοχή σε κάθε λεπτομέρεια. Από την αρχή μέχρι το τέλος, η επικοινωνία μας ήταν άμεση, ξεκάθαρη και επαγγελματική.\n\nΑυτό που ξεχώρισα περισσότερο ήταν η διάθεσή τους να ακούσουν κάθε μου σχόλιο και να προσαρμόσουν το αποτέλεσμα με βάση την ανατροφοδότησή μου. Ήταν πάντα πρόθυμοι να βοηθήσουν, να προτείνουν λύσεις και να βελτιώσουν ακόμη και τις πιο μικρές λεπτομέρειες.\n\nΕπιπλέον, από όλους τους οικείους μου άκουσα τις καλύτερες εντυπώσεις για τη δημιουργικότητα της δουλειάς τους.\n\nΤους συνιστώ ανεπιφύλακτα σε όποιον αναζητά ποιότητα, συνέπεια και άψογη συνεργασία.'
  },
  {
    image: DEFAULT_AVATAR + 'ioanna+s',
    name: 'ioanna sakalidi',
    rating: 5,
    text: 'Άψογη συνεργασία για την κατασκευή του site. Όλα κύλησαν ομαλά και το αποτέλεσμα ήταν ακριβώς αυτό που ήθελα.\nΕιδικά ο κος Μετρίδης ήταν πολύ συνεργάσιμος, επαγγελματίας και πάντα άμεσος σε κάθε επικοινωνία. Η ταχύτητα στην υλοποίηση ήταν πραγματικά εντυπωσιακή. Τους προτείνω ανεπιφύλακτα.'
  },
  {
    image: DEFAULT_AVATAR + 'Alex+P',
    name: 'Alex Parthenis',
    rating: 5,
    text: 'Πολύ εξυπηρετικοί! Άψογη συνεργασία για την ιστοσελίδα μου ως Ψυχολόγος και είμαι πολύ ικανοποιημένος με το αποτέλεσμα!'
  },
  {
    image: DEFAULT_AVATAR + 'Anestis+A',
    name: 'Anestis Andrikou',
    rating: 5,
    text: 'Άψογη συνεργασία σε όλα τα στάδια της δημιουργίας της ιστοσελίδας μου. Η επικοινωνία ήταν εξαιρετική σε όλη τη διάρκεια της διαδικασίας, με συνέπεια, άμεση ανταπόκριση και πραγματικό ενδιαφέρον για το αποτέλεσμα. Τηρήθηκαν στο μέγιστο όσα συμφωνήθηκαν, με επαγγελματισμό, αισθητική και προσοχή στη λεπτομέρεια. Είμαι απόλυτα ικανοποιημένος από το τελικό αποτέλεσμα και θα το πρότεινα ανεπιφύλακτα.'
  },
  {
    image: DEFAULT_AVATAR + 'Maira+G',
    name: 'Maira Gerou',
    rating: 5,
    text: 'Έμεινα πολύ ευχαριστημένη απο τη συνεργασία μας. Η Advon Media χαρακτηρίζεται απο ευγένεια και συνέπεια!'
  },
  {
    image: DEFAULT_AVATAR + 'Maria+L',
    name: 'Maria LOUKOU',
    rating: 5,
    text: '\'Αψογη συνεργασία και αποτέλεσμα που με ικανοποίησε απίστευτα! Η ομάδα της Advon Media είναι εξαιρετική, ταχύτατη, συνεπέστατη, ευγενέστατη και πολύ δημιουργική. Σας ευχαριστώ πολύ για το υπέροχο αποτέλεσμα της ιστοσελίδας μου!\n\nΜαριέτα Βέττα\nΨυχοθεραπεύτρια'
  },
  {
    image: DEFAULT_AVATAR + 'Marianna+R',
    name: 'Marianna Roumelioti',
    rating: 5,
    text: 'Εξαιρετική συνεργασία με την Advon Media. Από την αρχή υπήρξε επαγγελματισμός, άμεση επικοινωνία και πραγματικό ενδιαφέρον να δημιουργηθεί μια ιστοσελίδα που να ανταποκρίνεται ακριβώς σε αυτό που χρειαζόμουν. Η διαδικασία ήταν ξεκάθαρη και η υποστήριξη άμεση σε κάθε βήμα. Τους προτείνω ανεπιφύλακτα σε όποιον χρειάζεται κατασκευή ιστοσελίδας και αξιόπιστη τεχνική υποστήριξη.\nΜαριάννα Ρουμελιώτη – Ψυχολόγος'
  },
  {
    image: DEFAULT_AVATAR + 'Konstantina+M',
    name: 'Konstantina M.',
    rating: 5,
    text: 'Εξαιρετική δουλειά, αξιόπιστοι επαγγελματίες! Συστήνω ανεπιφύλακτα!\n\nΚωνσταντίνα Μαρκέτη, Κλινική Ψυχολόγος MSc, Γνωσιακή-Συμπεριφορική Ψυχοθεραπεύτρια.'
  },
  {
    image: DEFAULT_AVATAR + 'Ioulia+M',
    name: 'Ioulia Michalopoulou',
    rating: 5,
    text: 'Συνεργάστηκα μαζί τους για τη δημιουργία του site μου ως ψυχολόγος και η εμπειρία ήταν εξαιρετική. Ξεχώρισα ιδιαίτερα τον επαγγελματισμό τους, την αισθητική προσέγγιση στη σχεδίαση, αλλά και τον τρόπο που οργάνωσαν και διαχειρίστηκαν τις πληροφορίες ώστε το αποτέλεσμα να είναι σαφές, λειτουργικό και ουσιαστικό. Η συνεργασία μας ήταν άψογη σε όλα τα στάδια και το τελικό αποτέλεσμα με ικανοποίησε απόλυτα. Τους συστήνω ανεπιφύλακτα!'
  },
  {
    image: DEFAULT_AVATAR + 'Plan+For',
    name: 'Plan For A Miracle',
    rating: 5,
    text: 'Θέλω να ευχαριστήσω θερμά την ομάδα που ανέλαβε την κατασκευή του website μου.\nΤο αποτέλεσμα ήταν δημιουργικό, καλαίσθητο και απόλυτα εναρμονισμένο με αυτό που είχα οραματιστεί — ίσως και καλύτερο. Από την πρώτη στιγμή υπήρξε υψηλή διαθεσιμότητα, άμεση επικοινωνία με κάθε πρόσφορο μέσο και πραγματικά ταχύτατη εξυπηρέτηση.\nΕπαγγελματισμός, αισθητική και ανθρώπινη προσέγγιση σε άψογο συνδυασμό. Τους συστήνω ανεπιφύλακτα.'
  },
  {
    image: DEFAULT_AVATAR + 'Maro+M',
    name: 'Maro Manthou (Plan For A Miracle)',
    rating: 5,
    text: 'Η συνεργασία με τον Άγγελο απο την Advon Media υπήρξε εξαιρετικη. Η ομάδα του Άγγελου μας έφτιαξε ένα site όπως το είχαμε φανταστει. Κατάλαβαν τις ανάγκες μας και πολυ συντομα είχαμε ένα άψογο αποτελεσμα. Η ανταπόκριση, η ταχύτητα και η δημιουργικότητα μας εξέπληξε ευχάριστα. Τους συνιστώ ανεπιφύλακτα!'
  },
  {
    image: DEFAULT_AVATAR + 'lamprini+p',
    name: 'lamprini polumeropoulou',
    rating: 5,
    text: 'Η συνεργασία μας ήταν εξαιρετική. Με επαγγελματισμό, συνέπεια και πραγματικό ενδιαφέρον, κατάφεραν να αποτυπώσουν με ακρίβεια τη φιλοσοφία και την ταυτότητα του γραφείου μου. Ήταν πάντα διαθέσιμοι, υποστηρικτικοί και πρόθυμοι να εξηγήσουν κάθε λεπτομέρεια. Το αποτέλεσμα είναι αισθητικά άρτιο και λειτουργικό, και με εκφράζει απόλυτα. Τους συστήνω ανεπιφύλακτα.'
  },
  {
    image: DEFAULT_AVATAR + 'Παναγιώτα+Κ',
    name: 'Παναγιώτα Καραμπέτσου',
    rating: 5,
    text: 'Άψογη συνεργασία, πολύ γρήγορη εξυπηρέτηση και εξαιρετικό αποτέλεσμα! Επαγγελματίες με πραγματική διάθεση να ικανοποιήσουν τον πελάτη. Παρότι ζήτησα κάποιες προσαρμογές στην πορεία, ανταποκρίνονταν άμεσα και με υπομονή. Το site βγήκε ακριβώς όπως το ήθελα. Τους προτείνω ανεπιφύλακτα. Απόλυτα ικανοποιημένη!'
  },
  {
    image: DEFAULT_AVATAR + 'Angeliki+V',
    name: 'Angeliki Vrettou',
    rating: 5,
    text: 'Η συνεργασία μου με την Advon Media ήταν εξαιρετική!! Επαγγελματισμός, ταχύτητα, αποτελεσματικότητα! Η δουλειά τους ιδιαίτερα καλαίσθητη και άρτια! Φιλικοί, ευγενικοί και πάντα πρόθυμοι να απαντήσουν σε κάθε απορία μου!!'
  },
  {
    image: DEFAULT_AVATAR + 'Jo+A',
    name: 'Jo Asimak',
    rating: 5,
    text: 'Πολύ καλή συνεργασία. Ευγένεια και άμεση ανταπόκριση.\nΙωάννα Ασημακοπουλου- Ψυχολογος'
  },
  {
    image: DEFAULT_AVATAR + 'Laurance+M',
    name: 'Laurance Menetian',
    rating: 5,
    text: 'Όλη η συνεργασία από την αρχή ήταν επαγγελματική και άψογη. Με κατανόηση, υπομονή, άριστη επικοινωνία, όλη η ομάδα έκανε καταπληκτική δουλειά, προσαρμόζοντας τα θέλω μας με την εμπειρία τους, το οποίο κατέληξε σε ένα υπέροχο αποτέλεσμα. Ευχαριστούμε από καρδιάς!'
  },
  {
    image: DEFAULT_AVATAR + 'Avra+L',
    name: 'Avra Logotheti',
    rating: 5,
    text: 'Η συνεργασία μου με την ομάδα του Advon Media κύλισε εξαιρετικά από την αρχή μέχρι το τέλος. Η ομάδα και ιδιαίτερα ο κ. Αγγελος ήταν ευγενικός και ανταποκρινόταν ταχύτατα σε ό,τι χρειαζόταν να γίνει μέχρι το τελικό αποτέλεσμα. Το αποτέλεσμα ανταποκρίθηκε πλήρως σε αυτό που είχα εξαρχής στο μυαλό μου αφήνοντάς με πλήρως ικανοποιημένη. Τους συστήνω ανεπιφύλακτα!\n\nΑύρα Λογοθέτη\nΨυχολόγος- Ψυχοθεραπεύτρια'
  },
  {
    image: DEFAULT_AVATAR + 'maria+l',
    name: 'maria laiou',
    rating: 5,
    text: 'Εξαιρετική ομάδα!\nΠαρέλαβα το site ακριβώς όπως το χρειαζόμουν, εύχρηστο, αισθητικά άρτιο και με έμφαση στη λεπτομέρεια. Η συνεργασια μας ήταν άψογη και η ομάδα πάντα διαθέσιμη με συνέπεια για οποιαδήποτε προσθήκη/διευκρινηση.'
  },
  {
    image: DEFAULT_AVATAR + 'Eri+M',
    name: 'Eri M',
    rating: 5,
    text: 'Η συνεργασία μας ήταν εξαιρετική από την αρχή μέχρι το τέλος! Επαγγελματισμός, δημιουργικότητα και άμεση επικοινωνία. Το αποτέλεσμα ξεπέρασε κάθε προσδοκία κ το website μου ειναι ακριβως οπως το είχα σκεφτεί! Συστήνω την ομάδα Advon Media ανεπιφύλακτα, πολλά μπραβο σας!\n\nΕριολα Μιτσι - Ψυχολόγος'
  },
  {
    image: DEFAULT_AVATAR + 'Elena+K',
    name: 'Elena Kovaiou',
    rating: 5,
    text: 'Σας ευχαριστω πολυ για τον χρονο σας! Ειμαι πολυ ευχαριστημενη! Ειναι μια ομαδα που ακουει ολα τα αιτηματα και προσπαθει για το καλυτερο! Μια ομαδα νεων επαγγελματιων που δουλευει πολυ και απανταει αμεσα! Τους συνιστω ανεπιφυλακτα!'
  },
  {
    image: DEFAULT_AVATAR + 'Σπύρος+Α',
    name: 'Σπύρος Αναγνώστου',
    rating: 5,
    text: 'Excellent communication. They met my needs. High standards professionals'
  },
  {
    image: DEFAULT_AVATAR + 'Ioanna+K',
    name: 'Ioanna K',
    rating: 5,
    text: 'Είμαι πολυ ευχαριστημένη με τ αποτέλεσμα! Υπήρξε άμεση ανταπόκριση σε ότι χρειαζόμουν για την ιστοσελίδα μου. Ο Άγγελος πολυ ευγενικός και διατεθειμένος να συζητήσει την όποια αλλαγή. Ευχαριστώ πολύ! Ιωάννα Καρούζη Ψυχολόγος-Ψυχοθεραπεύτρια'
  },
  {
    image: DEFAULT_AVATAR + 'Giouli+S',
    name: 'Giouli Skondra',
    rating: 5,
    text: 'Η συνεργασία μας ήταν πραγματικά εξαιρετική από την αρχή μέχρι το τέλος.\nΚατάφερε να αποτυπώσει με ακρίβεια όχι μόνο την επαγγελματική μου ταυτότητα, αλλά και το ύφος, τη ζεστασιά και τη φιλοσοφία του χώρου μου. Η ιστοσελίδα είναι καλαίσθητη, σύγχρονη, λειτουργική και εμπνέει εμπιστοσύνη — ακριβώς αυτό που χρειάζεται ένας θεραπευτικός χώρος.\n\nΆκουσε προσεκτικά τις ανάγκες μου, είχε άμεση ανταπόκριση, δημιουργικές προτάσεις και πραγματικό ενδιαφέρον για το αποτέλεσμα. Το τελικό αποτέλεσμα ξεπέρασε τις προσδοκίες μου.\nΤον/την προτείνω ανεπιφύλακτα σε όποιον θέλει μια ιστοσελίδα με επαγγελματισμό, αισθητική και ουσία.'
  },
  {
    image: DEFAULT_AVATAR + 'FANI+P',
    name: 'FANI PAKOU',
    rating: 5,
    text: 'Ο Άγγελος και η ομάδα του της Advon media είναι εξαιρετικοί επαγγελματίες. Ανέλαβαν τα φτιάξουν την ιστοσελίδα μου. Προσεγμένη δουλειά, με έμφαση στην λεπτομέρεια. Άμεσοι στην επικοινωνία, κατατοπιστικοί σε ό,τι απορία είχα, ευέλικτοι σε ό,τι αλλαγή ήθελα να κάνουμε. Τους συνιστώ ανεπιφύλακτα. Σας ευχαριστώ πολύ για όλα! 🙏'
  }
];

export const faqItems: FaqItem[] = [
  { question: 'Τι είναι η Advon Media;', answer: 'Είμαστε ένα ψηφιακό marketing agency που ειδικεύεται σε στρατηγική, social media και περιεχόμενο.' },
  { question: 'Ποιες υπηρεσίες προσφέρετε;', answer: 'Κατασκευή ιστοσελίδων, δημιουργία περιεχομένου + διαχείριση social media και ανέπαφες (NFC) βάσεις αξιολογήσεων.' },
  { question: 'Πόσο διαρκεί η παράδοση μιας ιστοσελίδας;', answer: 'Από τη στιγμή που έχουμε λάβει όλο το υλικό, μπορούμε να ολοκληρώσουμε την κατασκευή σε 5-10 ημέρες.' },
  { question: 'Πώς μπορώ να επικοινωνήσω;', answer: 'Στείλτε μας email στο angelos@advonmedia.com και θα επικοινωνήσουμε άμεσα μαζί σας.' },
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
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
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
        'Στείλτε μας email στο angelos@advonmedia.com για περαιτέρω επικοινωνία. (το ελέγχουμε καθημερινά)'
      ]
    }
  }
];