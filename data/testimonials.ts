export interface Testimonial {
  src: string;
  alt: string;
}

// Identical copies in the source folder are included only once.
const messages = [
  ["IMG_0210.jpeg", "Polaznica zahvaljuje Saški na savetima, podršci i sigurnosti stečenoj tokom edukacije."],
  ["IMG_0216.jpeg", "Utisak o Aura Brows kursu, detaljnom pristupu i prirodnom izgledu obrva."],
  ["IMG_0219.jpeg", "Iskustvo sa online kursom Savršena simetrija obrva i edukacijom uživo."],
  ["IMG_0220.jpeg", "Polaznica opisuje znanje sa edukacije, podršku i veću sigurnost u radu."],
  ["IMG_3552.jpeg", "Iskustvo sa jednodnevnim usavršavanjem microblading tehnike i vežbanjem na modelima."],
  ["IMG_8575.jpeg", "Polaznica bazne obuke zahvaljuje na praktičnim savetima i podršci u radu."],
  ["IMG_7362.jpeg", "Polaznica opisuje koliko joj znače priprema pre tretmana i snimak edukacije."],
  ["IMG_7363.jpeg", "Poruke polaznice koja je celu edukaciju pregledala više puta."],
  ["IMG_7364.jpeg", "Polaznica kaže da su joj pregledane lekcije razjasnile nedoumice."],
  ["IMG_7365.jpeg", "Utisak o iscrpno, stručno i detaljno objašnjenom kursu."],
  ["IMG_7366.jpeg", "Polaznica hvali koncept kursa i način na koji su lekcije objašnjene."],
  ["IMG_7367.jpeg", "Poruke o detaljima edukacije koji pomažu polaznici da razume svaki korak."],
  ["IMG_7423.jpeg", "Razgovor o napretku u radu uz praćenje edukacije."],
  ["IMG_7467.jpeg", "Polaznica opisuje koliko joj je rad lakši nakon ponovnog gledanja edukacije."],
  ["IMG_7468.jpeg", "Utisci o jasnim objašnjenjima i korisnim savetima iz edukacije."],
  ["IMG_7468(1).jpeg", "Polaznica opisuje sigurnost koju je stekla i pre početka rada."],
  ["IMG_8528.jpeg", "Polaznica kaže da je saveti sa edukacije podstiču da radi bolje."],
  ["IMG_8711.jpeg", "Poruke o detaljno objašnjenim lekcijama i novim stvarima naučenim na kursu."],
  ["IMG_0064.jpeg", "Klijentkinja zahvaljuje na prirodnim obrvama i opisuje pozitivne reakcije okoline."],
  ["IMG_0065.jpeg", "Poruke klijentkinje o zadovoljstvu obrvama i pažnji tokom tretmana."],
  ["IMG_2391.png", "Razgovor sa polaznicom o edukaciji, podršci i iskustvu u radu."],
  ["IMG_2392.png", "Poruka polaznice sa utiscima o obuci i Saškinom pristupu."],
  ["IMG_2393.png", "Nastavak razgovora sa polaznicom o edukaciji i daljem radu."],
  ["IMG_2538.jpeg", "Klijentkinja kaže da su obrvice sve lepše i da ih svi hvale."],
  ["IMG_2539.jpeg", "Poruka o oduševljenju prirodnim izgledom obrva i interesovanju za tretman."],
  ["IMG_2540.jpeg", "Klijentkinja javlja da je veoma zadovoljna obrvama."],
  ["IMG_2541.jpeg", "Klijentkinja kaže da je oduševljena Saškinim radom."],
  ["IMG_2542.jpeg", "Poruka zahvalnosti uz komentar da su obrve fantastične."],
  ["IMG_2543.jpeg", "Klijentkinja kaže da ne bi menjala Sašku kao svog majstora za obrve."],
  ["IMG_2544.jpeg", "Poruka o oduševljenju rezultatom uz fotografiju obrva."],
  ["IMG_2545.jpeg", "Klijentkinja hvali izgled obrva i pet meseci nakon tretmana."],
  ["IMG_2546.jpeg", "Klijentkinja se raduje tretmanu nakon dugog perioda bez obrva."],
  ["IMG_2547.jpeg", "Poruka o prirodnom izgledu obrva, boji i obliku koji pristaju licu."],
  ["IMG_2548.jpeg", "Poruka klijentkinje koja kaže da Saška puno znači ženama kojima radi obrve."],
  ["IMG_2549.jpeg", "Klijentkinja hvali izgled obrva nakon tretmana."],
  ["IMG_2550.jpeg", "Klijentkinja kaže da bi po dobre obrve došla i iz Švajcarske."],
  ["IMG_2551.jpeg", "Poruka o lepim komentarima koje klijentkinja dobija za svoje obrve."],
  ["IMG_2561.jpeg", "Klijentkinja zahvaljuje na prirodnom izgledu obrva koje okolina hvali."],
  ["IMG_2562.jpeg", "Poruka o prirodnom rezultatu i velikoj razlici pre i posle tretmana."],
  ["IMG_2563.jpeg", "Klijentkinja hvali veliku promenu i kaže da je prezadovoljna."],
  ["IMG_2583.jpeg", "Poruka polaznice o tome koliko joj Saškin rad i edukacija znače u učenju."],
  ["IMG_2674.jpeg", "Klijentkinja prenosi pozitivne reakcije drugih na svoje obrve."],
  ["IMG_3780.jpeg", "Poruka klijentkinje koja je oduševljena tehnikom i želi tretman."],
  ["IMG_7066.png", "Razgovor sa polaznicom uz zahvalnost za edukaciju i podršku."],
] as const;

export const testimonials: Testimonial[] = messages.map(([file, alt]) => ({
  src: `/images/testemonials/${file}`,
  alt,
}));
