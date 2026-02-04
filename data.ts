import { PortfolioItem, Review, FaqItem, ServiceType, ServiceData } from './types';
import { Globe, Star, Instagram } from 'lucide-react';

const DEFAULT_AVATAR = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=';

export const portfolioItems: PortfolioItem[] = [
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d97732b551c7381a45.jpg', url: 'https://giouliskondra-therapy.gr/home', name: 'Σκόνδρα Παναγιούλα – Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d918c33528d435252f.jpg', url: 'https://farantakis-psychotherapist.gr/home', name: 'Φαραντάκης Γιάννης - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d918c33576a4352530.jpg', url: 'https://menetian-psychologist.gr', name: 'Μενετιάν Λοράνς - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d913fe2b4ebda2afef.jpg', url: 'https://giotakarampetsou.gr', name: 'Καραμπέτσου Παναγιώτα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6983a0d926ea6442a7a91af5.jpg', url: 'https://fatourou-ioulia-psychologos.gr', name: 'Φατούρου Ιουλία - Ψυχολόγος' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/11.jpg?raw=true', url: 'https://talamagka-psychologos.gr/home', name: 'Ταλαμάγκα Ελπίδα - Ψυχολόγος' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/22.jpg?raw=true', url: 'https://roza-psychologist.gr', name: 'Χαρουτιουνιάν Ρόζα - Ψυχολόγος' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/33.jpg?raw=true', url: 'https://zampelis-psychology.gr', name: 'Ζαμπέλης Στέφανος - Ψυχολόγος' },
  { image: 'https://github.com/agelmet/Image-hosting-/blob/main/44.jpg?raw=true', url: 'https://nakou-psychologos.gr', name: 'Νάκου Δήμητρα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff573cc5fde7d814b0c.png', url: 'https://rhodesdentist.gr', name: 'Γλυνός Γεώργιος - Οδοντίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff57002eeb8d74c581c.png', url: 'https://apartmentsin-greece.gr', name: 'Αθήνα + Κρήτη - Διαμερίσματα' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff5be2f992fd50c4409.png', url: 'https://pediatrician-ioannisloukas.gr/en', name: 'Λουκάς Ιωάννης - Παιδίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb3e45df05181238c1.jpeg', url: 'https://loulou-physiotherapy.gr', name: 'Λουλού Χρυσάνθη - Φυσικοθεραπεύτρια' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb7e579816e94176ed.jpeg', url: 'https://sofiavassiliadou-psyxiatros.gr', name: 'Βασιλειάδου Σοφία - Ψυχίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb5d191555856d1f45.jpeg', url: 'https://pappa-psyxologos.gr', name: 'Παππά Εμμανουέλα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb10e4602f322522a4.jpeg', url: 'https://oikonomou-psyxologos.gr', name: 'Οικονόμου Χρυσούλα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdb5bfb334b18eec0a9.jpeg', url: 'https://stylianidou-psyxologos.gr', name: 'Στυλιανίδου Σοφία - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69025bdbdf45434ecfb96d36.jpeg', url: 'https://tsekourakis-physiotherapy.gr', name: 'Τσεκουράκης Χρόνης - Φυσικοθεραπευτής' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419ad87b047b548b858.jpeg', url: 'https://smaragdadimitra.gr', name: 'Δημητρά Σμαράγδα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/690314195170a503ad1b3a49.jpeg', url: 'https://antamian-physiotherapy.gr', name: 'Ανταμιάν Ερμιόνη - Φυσικοθεραπεύτρια' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419ad87b0376a48b859.jpeg', url: 'https://dorasizopoulou.gr', name: 'Σιζοπούλου Θεοδώρα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/690314195170a593181b3a4a.jpeg', url: 'https://zoetherapy.gr', name: 'Ανδρεαδάκη Ζωή - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/69031419762d2cf9e43378e1.jpeg', url: 'https://memagiagkini-psyxologos.gr', name: 'Γιαγκίνη Μέμα - Ψυχολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc78adcfe610.jpeg', url: 'https://tsialiafa-dentalcare.gr', name: 'Τσιαλιάφα Ελένη - Οδοντίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc95f3cfe5fb.jpeg', url: 'https://chatzistratis-paidiatros.gr', name: 'Χατζηστρατής Στράτος - Παιδίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf4c35d613678773f5.jpeg', url: 'https://occludent.gr', name: 'Φασούλα Μαρία - Οδοντίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cfa1d2dc0857cfe5fc.jpeg', url: 'https://papathomas-vision.gr', name: 'Θωμάς Παπαθωμάς - Οφθαλμίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf337bbf261a42bbc3.jpeg', url: 'https://kk-dental.gr', name: 'Κωνσταντινίδης Κωνσταντίνος - Οδοντίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/68d954cf4c35d6bcaf8773f6.jpeg', url: 'https://mysmile-prosthodontics.gr', name: 'Μορδοχάι Νικήτας - Οδοντίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff5e811867d962b0b12.png', url: 'https://wonderfulspecs.gr', name: 'WonderfulSpecs - Οπτικά' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/6720fff57d6e345146f91a82.png', url: 'https://astra-paidiatros.gr', name: 'Αστρά Ελένη - Παιδίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/672106acbe2f9908390c468b.png', url: 'https://barampouti-ofthalmiatros.gr', name: 'Μπαραμπούτη Φαίη - Οφθαλμίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972bc1bea3590d2fcd5.jpeg', url: 'https://eye-orl.gr', name: 'Οφθαλμίατρος + Ωτορινολαρυγγολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972e3c40936dec8067b.jpeg', url: 'https://davou-ofthalmiatros.gr', name: 'Δάβου Σταυρούλα - Οφθαλμίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c29725cb3bb547ceacc82.jpeg', url: 'https://vouza-ofthalmiatros.gr', name: 'Βούζα Ασπασία - Οφθαλμίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297207bcd3c2755ce584.jpeg', url: 'https://thetidasvilla.gr', name: 'Κάρπαθος - Βίλα' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297207bcd3a84a5ce586.jpeg', url: 'https://panousopoulou-paidiatros.gr', name: 'Πανουσοπούλου Χριστίνα - Παιδίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c2972fbe6f42e908208cb.jpeg', url: 'https://giamouris-paidiatros.gr', name: 'Γιαμούρης Μανόλης - Παιδίατρος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c29722809a9b32a06926f.jpeg', url: 'https://theodosis-orila.gr', name: 'Θεοδώσης Πέτρος - Ωτορινολαρυγγολόγος' },
  { image: 'https://assets.cdn.filesafe.space/61icdoMiJ2pHklO6mmKW/media/684c297251e5e5089ade7e7e.jpeg', url: 'https://zormpa-dentist.gr', name: 'Ζορμπά Θωμαής - Οδοντίατρος' },
];

export const reviews: Review[] = [
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjXyvVDSorQzQz3Z-zsqvl68SOOgYiq4C3UBH8punVUaFZrC7wDkug=w144-h144-p-rp-mo-br100', name: 'Ελπίδα Ταλαμάγκα', rating: 5, text: 'Ειμαι ψυχολόγος και συνεργάστηκα με την Advon Media για τη δημιουργία του επαγγελματικού μου site. Τα παιδιά είναι εξαιρετικά!!! Άψογη δουλειά, 100% επαγγελματίες & πολύ συνεπείς. Πολύ ευγενικοί & διατεθειμένοι να συζητήσουν την όποια αλλαγή, ώστε το site μου να είναι ακριβώς όπως το είχα φανταστει!! Άγγελε σε ευχαριστώ!!' },
  { image: DEFAULT_AVATAR + 'Ρόζα+Χαρουτιουνιάν', name: 'Ρόζα Χαρουτιουνιάν', rating: 5, text: 'Η συνεργασία μου με την ομάδα της Advon Media και ιδιαίτερα με τον κύριο Άγγελο για τη δημιουργία του επαγγελματικού μου προφίλ ήταν εξαιρετική. Από την πρώτη στιγμή ήταν ευγενικός, προσιτός και πραγματικά πρόθυμος να ακούσει τις επιθυμίες μου. Έδειξε επαγγελματισμό, συνέπεια και ενδιαφέρον για το καλύτερο δυνατό αποτέλεσμα, δίνοντας προσοχή στη λεπτομέρεια και προτείνοντας πολύ καλές ιδέες. Τους συστήνω σε όποιον αναζητά ποιοτική δουλειά και άριστη συνεργασία. Ευχαριστώ πολύ! Ρόζα Χαρουτιουνιάν, Ψυχολόγος - Ψυχοθεραπεύτρια.' },
  { image: DEFAULT_AVATAR + 'Χρύσα+Οικονόμου', name: 'Χρύσα Οικονόμου', rating: 5, text: 'Εξαιρετική η ομάδα τους! Άψογη ολη η συνεργασία μας! Απο την πρώτη μας επικοινωνία, έγινε αντιληπτός ο επαγγελματισμός και η εμπειρία τους. Κατασκεύασαν με μεγάλη ταχύτητα, συνέπεια και αισθητική το website μου. Ήταν πάντα διαθέσιμοι να απαντήσουν στις απορίες μου, να προτείνουν λύσεις και να υλοποιήσουν άμεσα όποια τροποποίηση θέλησα να κάνω. Τους συστήνω ανεπιφύλακτα γιατι το τελικό αποτέλεσμα ξεπερασε τις προσδοκίες μου!' },
  { image: DEFAULT_AVATAR + 'Ναταλία+Γρυλωνάκη', name: 'Ναταλία Γρυλωνάκη', rating: 5, text: 'Εξαιρετικοί επαγγελματίες. Ευγενικοί και ιδιαίτερα πρόθυμοι εξαρχής να λύσουν όλες μου τις απορίες και να κάνουν όποια τροποποίηση επιθυμούσα. Συνεπείς και δημιουργικοί. Το τελικό αποτέλεμα σύγχρονο, λειτουργικό και καλαίσθητο με άφησε απόλυτα ικανοποιημένη. Τους συστήνω ανεπιφύλακτα.' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjXwzVoH8tFi5PJF8D8skvbm3K_MVRDQOVJDpeCoiW7ldSBbVCM=w144-h144-p-rp-mo-br100', name: 'Στυλιανίδου Σοφία', rating: 5, text: 'Εξαιρετικοί επαγγελματίες υπήρξε άμεση ανταπόκριση στη δημιουργία της ιστοσελίδας μου. Τέλος ήταν ανοιχτοί να μου εξηγήσουν την οποιαδήποτε απορία είχα και να αλλάξουν οτιδήποτε χρειάστηκε. Τους συστήνω ανεπιφύλακτα.' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjUIFeV7kJ81o_SxrHrpj0c_WK6-zPwV-xoJGSduKwsBrps_nN8=w144-h144-p-rp-mo-br100', name: 'Εμμανουέλα Παππά', rating: 5, text: 'Τα παιδιά ήταν εξαιρετικά επαγγελματίες, ευγενικοί και πρόθυμοι να βοηθήσουν σε κάθε στάδιο της δημιουργίας του site μου. Δούλεψαν με απίστευτη ταχύτητα, άκουσαν προσεκτικά τι ήθελα ! Το site βγήκε ακριβώς όπως το είχα φανταστεί ,απλό , σύγχρονο, λειτουργικό και αισθητικά άψογο. Τους συστήνω ανεπιφύλακτα!' },
  { image: DEFAULT_AVATAR + 'Μαρία+Φασούλα', name: 'Μαρία Φασούλα', rating: 5, text: 'Άριστοι επαγγελματίες! Πολύ αξιόπιστοι και συνεπείς στα χρονοδιαγράμματα, με εξαιρετική επικοινωνία και επαγγελματική συμπεριφορά. Η ιστοσελίδα παραδόθηκε ακριβώς όπως τη φανταζόμουνα, λειτουργική και καλαίσθητη. Τους συνιστώ ανεπιφύλακτα για όποιον αναζητά ποιοτική και υπεύθυνη δουλειά!!!' },
  { image: DEFAULT_AVATAR + 'Ελένη+Τσιαλιάφα', name: 'Ελένη Τσιαλιάφα', rating: 5, text: 'Άψογοι επαγγελματίες με συνέπεια και ταχύτητα στην εξυπηρέτηση. Λεπτομερής και προσεγμένη δουλειά. Μπράβο στην ομάδα! Τους συστήνω ανεπιφύλακτα. Τσιαλιάφα Ελένη Χειρ.Οδοντίατρος' },
  { image: DEFAULT_AVATAR + 'Σοφία+Βασιλειάδου', name: 'Σοφία Βασιλειάδου', rating: 5, text: 'Όλη η ομάδα της Advon Media λειτούργησε με φοβερό επαγγελματισμό και μεγάλη ταχύτητα. Το αποτέλεσμα ξεπέρασε τις προσδοκίες μου, τους ευχαριστώ πολύ και εννοείται ότι συστήνω την Advon Media ανεπιφύλακτα!' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjX1bbMbwmzkQEWSP45s29CBn4twUfVMISTrmfepCc8o3z9P8foekg=w144-h144-p-rp-mo-br100', name: 'Σμαράγδα Δημητρά', rating: 5, text: 'Εξαιρετική δουλειά, πολύ καλή επικοινωνία' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjVL1O97zqNUKHWBzFz9HIbvUc6__rUq_HdJELt-S-OZhixDk3fR=w144-h144-p-rp-mo-ba3-br100', name: 'Παναγιώτης Ιατρούδης', rating: 5, text: 'Πολύ καλή και επαγγελματική συνεργασία για την κατασκευή της ιστοσελίδας μου. Τους έχω ήδη συστήσει και σε άλλους! Ιατρούδης Παναγιώτης Οδοντίατρος' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjWaGCVmAUJX0HX3Fxdt8YIs7h8Yn9py1LkLWI2h1lIqBvhgk89t=w144-h144-p-rp-mo-ba5-br100', name: 'Γλυνός Γιώργος', rating: 5, text: 'Εξαιρετικά αποτελέσματα θα τους σύστηνα ανεπιφύλακτα! Μου έλυσαν τα χέρια με την οργάνωση των ραντεβού μου, ενώ η πελατεία στο οδοντιατρείο μου στη Ρόδο άρχισε να αυξάνεται από τον πρώτο κιόλας μήνα της συνεργασία μας! Τα παιδιά με βοήθησαν άμεσα σε ό,τι τους ζητούσα και έχουν εξαιρετικά συστήματά και γνώσεις σε social media και ΑΙ.' },
  { image: DEFAULT_AVATAR + 'Βασιλική+Μπέλλου', name: 'Βασιλική Μπέλλου', rating: 5, text: 'Άριστοι επαγγελματίες. Άψογη συνεργασία. Μεταξωτη συμπεριφορά σε όλα τους. Ευγενεια, διαθεσιμότητα, χαμόγελο και ταχύτητα διεκπεραίωσης. Ειδικά ο Aggelos Metridis, μεταξωτος σε όλα του και κυρίως στον επαγγελματισμό του. Τους συστήνω ανεπιφύλακτα. Ευχαριστώ θερμά για την συνεργασία μας.' },
  { image: DEFAULT_AVATAR + 'Χριστίνα+Πανουσοπούλου', name: 'Χριστίνα Πανουσοπούλου', rating: 5, text: 'Εξαιρετική δουλειά! Έμεινα πολύ ευχαριστημένη με τη συνεργασία που είχαμε. Υπήρχε πάντα άμεση ανταπόκριση και με βοήθησαν σε ότι χρειάστηκα με διακριτικές αλλά εύστοχες προτάσεις. Συστήνεται ανεπιφύλακτα!' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjWET2TOFMS6lP_kbfwEgZsd4p_ptFmUSiCsQ66VwPYv6Gd8--Q=w144-h144-p-rp-mo-br100', name: 'Εμμανουέλα Ροκαδάκη', rating: 5, text: 'Άψογη δουλεία και συνεργασία. Με βοήθησαν πραγματικά σε ό,τι χρειάστηκα και υπήρχε πάντα άμεση ανταπόκριση. Ασύγκριτοι!' },
  { image: DEFAULT_AVATAR + 'Άσπα+Βούζα', name: 'Άσπα Βούζα', rating: 5, text: 'Παρά πολύ ευχαριστημένη με τη δουλειά των παιδιών. Άψογη συνεργασία και άμεση επικοινωνία Άσπα Βούζα - Οφθαλμιάτρος' },
  { image: DEFAULT_AVATAR + 'Θωμαή+Ζορμπά', name: 'Θωμαή Ζορμπά', rating: 5, text: 'Παρά πολύ καλή δουλειά και συνεργασία θα τους σύστηνα ανεπιφύλακτα - Θωμαη Ζορμπά Οδοντίατρος' },
  { image: DEFAULT_AVATAR + 'Ξένια+Παπαβραμίδου', name: 'Ξένια Παπαβραμίδου', rating: 5, text: 'Εξαιρετική δουλειά! Πολύ συνεπείς, με άμεσα αποτελέσματα.' },
  { image: DEFAULT_AVATAR + 'Ελένη+Αστρά', name: 'Ελένη Αστρά', rating: 5, text: 'Πολύ επαγγελματική δουλειά και άριστη συνεργασία - Ελένη Αστρά - Παιδίατρος' },
  { image: 'https://lh3.googleusercontent.com/a-/ALV-UjX9BSnfQVN3UY1kaqCVAO3J3YPFk6N_Ojtsr4chAJTQ1J96Clc=w144-h144-p-rp-mo-br100', name: 'Ιωάννης Λουκάς', rating: 5, text: 'Εξαιρετικοί επαγγελματίες και απόλυτα συνεπείς και καταρτισμένοι! Συστήνονται ανεπιφύλακτα.' },
  { image: DEFAULT_AVATAR + 'Μαρούσα+Σκυλάκη', name: 'Μαρούσα Σκυλάκη', rating: 5, text: 'ΑΨΟΓΗ ΔΟΥΛΕΙΑ ΚΑΙ ΣΥΝΕΡΓΑΣΙΑ ΜΕ ΑΜΕΣΗ ΕΠΙΚΟΙΝΩΝΙΑ. ΜΑΡΟΥΣΑ ΣΚΥΛΑΚΗ, ΔΕΡΜΑΤΟΛΟΓΟΣ.' },
  { image: DEFAULT_AVATAR + 'Φάνη+Φιλιπποπούλου', name: 'Φάνη Φιλιπποπούλου', rating: 5, text: '' },
  { image: DEFAULT_AVATAR + 'Στράτος+Χατζηστρατής', name: 'Στράτος Χατζηστρατής', rating: 5, text: '' },
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