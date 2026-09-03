export type CourseType = "online" | "uzivo-bazna" | "uzivo-usavrsavanje";
export type Currency = "RSD" | "EUR";
export type Level = "pocetni" | "srednji" | "napredni" | "svi";

export interface CurriculumModule {
  number: number;
  title: string;
  lessonCount?: number;
  duration?: string;
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  shortDescription: string; // za karticu
  fullDescription: string; // za detalj stranicu (paragrafi razdvojeni sa \n\n)
  type: CourseType;
  level: Level;
  price: number;
  priceIndividual?: number; // samo za uživo obuke
  currency: Currency;
  accessDuration: string;
  hasCertificate: boolean;
  hasRatePayment: boolean; // plaćanje u ratama
  videoHours?: string;
  lessonCount?: number;
  includes: string[]; // šta dobijaš / šta ćeš naučiti
  curriculum?: CurriculumModule[]; // program kursa (moduli)
  forWhom: string[]; // kome je namenjeno
  orderBumpEligible: boolean;
}

export const levelLabels: Record<Level, string> = {
  pocetni: "Početni",
  srednji: "Srednji",
  napredni: "Napredni",
  svi: "Svi nivoi",
};

export const courses: Course[] = [
  // ---------- EDUKACIJE UŽIVO ----------
  {
    id: "aurabrows-bazna-obuka",
    slug: "aurabrows-bazna-obuka",
    name: "AuraBrows bazna obuka",
    shortDescription:
      "Dva dana edukacije uživo, autorska AuraBrows tehnika hiperrealističnih obrva, kompletan materijal i dva meseca premium mentorstva.",
    fullDescription:
      "Ne dobijaš samo edukaciju. Dobijaš sistem koji te vodi do samostalnog rada.\n\nNakon godina iskustva, rada sa klijentima, edukovanja studenata i praćenja njihovih izazova, kreirala sam potpuno novi i unapređeni AuraBrows program. Ovaj program nastao je iz prakse, iz svega što sam primetila da studentima nedostaje nakon klasičnih edukacija.\n\nNije dovoljno da tehniku vidiš jednom. Potrebno je da je razumeš, ponoviš, dobiješ korekciju i imaš podršku onda kada počneš samostalno da radiš. Zato AuraBrows bazna obuka obuhvata edukaciju uživo, detaljne video kurseve i dva meseca mog intenzivnog mentorstva.\n\nCilj nije da nakon dva dana odeš kući sa sertifikatom i ostaneš sama. Cilj je da za dva meseca izgradiš znanje, preciznost i sigurnost potrebne za samostalan rad.",
    type: "uzivo-bazna",
    level: "svi",
    price: 169650,
    priceIndividual: 198900,
    currency: "RSD",
    accessDuration: "4 meseca",
    hasCertificate: true,
    hasRatePayment: true,
    includes: [
      "Dva dana edukacije uživo u maloj grupi (do 3 studentkinje)",
      "Kompletan materijal za edukaciju, dovoljan za preko 50 tretmana",
      "Pristup kursu Savršena simetrija obrva",
      "Pristup kursevima Rad na modelu: normalna koža, masna koža i ručno senčenje",
      "Pristup kursu Lateks vežbe i pravilno držanje alata",
      "Pristup kursu Različiti položaji i rasporedi dlačica (Spine 3, 5, 6, 5–6)",
      "Bonus kurs fotografisanja i sređivanja radova",
      "Dva meseca premium mentorstva sa nedeljnim Zoom sastancima",
      "Detaljna analiza i korekcija svakog poslatog rada",
      "Sertifikat o završenoj obuci",
    ],
    curriculum: [
      {
        number: 1,
        title:
          "Prvi dan: teorija i rad na lateksu, oblikovanje, teorija boja, tipovi kože, higijena, držanje alata, kontrola pritiska i dubine",
      },
      {
        number: 2,
        title:
          "Drugi dan: rad na živom modelu uz stalni nadzor, od konsultacije do završnog rezultata",
      },
      {
        number: 3,
        title: "Online video kursevi: kompletan bonus paket sa 4 meseca pristupa",
      },
      {
        number: 4,
        title:
          "Dva meseca premium mentorstva: svakodnevna podrška, analiza radova i nedeljni Zoom sastanci",
      },
    ],
    forWhom: [
      "želiš da započneš karijeru u beauty industriji",
      "nemaš prethodno iskustvo u radu sa obrvama",
      "završila si edukaciju, ali se i dalje ne osećaš sigurno",
      "plašiš se rada na živom modelu",
      "ne znaš kako da pravilno postaviš dlačice",
      "imaš problem sa simetrijom i oblikovanjem",
      "želiš više praktičnog rada i mentorsku podršku",
      "želiš da od svog znanja napraviš profesionalnu uslugu i posao",
    ],
    orderBumpEligible: true,
  },
  {
    id: "puder-obrve-bazna-obuka",
    slug: "puder-obrve-bazna-obuka",
    name: "Puder obrve bazna obuka",
    shortDescription:
      "Sistem koji te vodi od prvog pokreta mašinicom do sigurnog rada na klijentima, sa mašinicom i pigmentima u ceni.",
    fullDescription:
      "Ne dobijaš samo edukaciju. Dobijaš sistem koji te vodi od prvog pokreta mašinicom do sigurnog rada na klijentima.\n\nNakon godina iskustva u radu sa klijentima, edukovanja studenata i praćenja izazova sa kojima se susreću nakon završenih obuka, kreirala sam unapređeni program bazne edukacije za puder obrve. Nastao je iz stvarnog rada, pitanja mojih studenata i grešaka koje se najčešće ponavljaju.\n\nPotrebno je da razumeš kako mašinica radi, razviješ pravilan pokret, naučiš da kontrolišeš pritisak i postepeno izgradiš osećaj za kožu, pigment i intenzitet senčenja. Cilj nije da nakon edukacije odeš kući samo sa sertifikatom, već da stekneš znanje, praktičnu sigurnost i podršku za samostalan rad i prve klijente.",
    type: "uzivo-bazna",
    level: "svi",
    price: 169650,
    priceIndividual: 198900,
    currency: "RSD",
    accessDuration: "4 meseca",
    hasCertificate: true,
    hasRatePayment: true,
    includes: [
      "Dva dana edukacije uživo u maloj grupi (do 3 studentkinje)",
      "Mašinicu za trajnu šminku, koja ostaje tebi",
      "Pigmente za puder tehniku",
      "Kompletan materijal za praktičan rad",
      "Pristup kursu Savršena simetrija obrva",
      "Pristup kursu Lateks vežbe: pravilno držanje mašinice",
      "Bonus kurs fotografisanja i sređivanja radova",
      "Dva meseca premium mentorstva sa nedeljnim Zoom sastancima",
      "Pristup zatvorenoj WhatsApp grupi polaznica",
      "Sertifikat o završenoj obuci",
    ],
    curriculum: [
      {
        number: 1,
        title:
          "Prvi dan: teorija, upoznavanje sa mašinicom i rad na lateksu, pigmenti, priprema kože, kontrola pritiska i brzine, građenje intenziteta",
      },
      {
        number: 2,
        title:
          "Drugi dan: rad na živom modelu, od procene kože do nege nakon tretmana",
      },
      {
        number: 3,
        title: "Online video kursevi: bonus paket sa 4 meseca pristupa",
      },
      {
        number: 4,
        title:
          "Dva meseca premium mentorstva: WhatsApp grupa, analiza radova i nedeljni Zoom sastanci",
      },
    ],
    forWhom: [
      "želiš da započneš karijeru u beauty industriji",
      "nemaš prethodno iskustvo u trajnoj šminki",
      "želiš da naučiš puder tehniku od samog početka",
      "imaš problem sa pravilnim držanjem mašinice",
      "ne znaš kako da kontrolišeš pritisak i dubinu",
      "ne uspevaš da postigneš ravnomerno senčenje",
      "ne znaš kako da izabereš odgovarajući pigment",
      "plašiš se rada na živom modelu",
      "želiš da svoje znanje pretvoriš u profesionalnu uslugu i posao",
    ],
    orderBumpEligible: true,
  },
  {
    id: "jednodnevno-usavrsavanje",
    slug: "jednodnevno-aurabrows-usavrsavanje",
    name: "Jednodnevno AuraBrows usavršavanje",
    shortDescription:
      "Jedan dan pripremljen prema tvom znanju, radu i potrebama, za artiste koji žele da isprave konkretne greške i dobiju veću sigurnost.",
    fullDescription:
      "AuraBrows jednodnevno usavršavanje namenjeno je artistima koji već imaju osnovno znanje i žele da unaprede tehniku, isprave konkretne greške i dobiju veću sigurnost u radu.\n\nOvo nije unapred pripremljena edukacija koja je ista za svakoga. Pre zakazivanja obavezno mi šalješ svoje radove, nakon čega se čujemo i razgovaramo o izazovima sa kojima se susrećeš, nesigurnostima koje imaš i rezultatima koje želiš da postigneš.\n\nNa osnovu tog razgovora i analize tvojih radova pripremam sadržaj usavršavanja prema tvojim potrebama, kako bismo maksimalno iskoristile vreme koje imamo. Cilj nije samo da tog dana uradiš bolji rad, već da razumeš gde si grešila, kako to da ispraviš i kako da isti kvalitet ponoviš i nakon usavršavanja.",
    type: "uzivo-usavrsavanje",
    level: "napredni",
    price: 70200,
    currency: "RSD",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Unapred pripremljen plan prema tvojim potrebama",
      "Analizu dosadašnjih radova pre termina",
      "Konsultativni razgovor pre zakazivanja",
      "Jednodnevnu praktičnu edukaciju uživo",
      "Individualno usmeravanje i korekciju tehnike",
      "Lateks vežbe i rad na modelu",
      "Jasne smernice za dalji napredak",
      "Pristup online kursevima 30 dana (Savršena simetrija, lateks vežbe, rad na modelima)",
    ],
    curriculum: [
      {
        number: 1,
        title: "Priprema: slanje radova, analiza i konsultativni razgovor",
      },
      {
        number: 2,
        title:
          "Dan usavršavanja: sadržaj prilagođen tvojoj tehnici, nivou znanja i prepoznatim izazovima",
      },
    ],
    forWhom: [
      "već radiš obrve, ali nemaš potpunu sigurnost u svaki korak",
      "imaš problem sa crtanjem i postizanjem pravilne simetrije",
      "primećuješ greške koje ti se ponavljaju",
      "nisi zadovoljna svojim radom na lateksu ili modelu",
      "želiš precizniju, čistiju i sigurniju tehniku",
      "potrebna ti je stručna analiza i individualno usmeravanje",
      "želiš da unaprediš kvalitet rezultata i svoje samopouzdanje",
    ],
    orderBumpEligible: true,
  },

  // ---------- ONLINE KURSEVI ----------
  {
    id: "aurabrows-online-bazna-obuka",
    slug: "aurabrows-online-bazna-obuka",
    name: "AuraBrows online bazna obuka",
    shortDescription:
      "Kompletno znanje, video kursevi i materijal za rad, direktno na tvoju adresu. Uči iz svog doma, svojim tempom.",
    fullDescription:
      "AuraBrows online bazna obuka kreirana je za tebe ako želiš da učiš iz svog doma, svojim tempom, i da se svakoj lekciji vraćaš onoliko puta koliko ti je potrebno.\n\nDobijaš kompletan edukativni program u video formatu, pristup svim online kursevima i materijal za praktičan rad koji ti šaljemo na kućnu adresu. Ovo nije nekoliko kratkih snimaka bez jasnog redosleda, dobijaš strukturiran sistem koji te vodi od pravilnog držanja alata i prvih vežbi na lateksu, preko oblikovanja i simetrije, do kompletnog prikaza rada na različitim tipovima kože.\n\nPristup svim online kursevima aktivira se od dana kada ti paket sa materijalom bude dostavljen. Od tog trenutka imaš četiri meseca pristupa kompletnom programu.",
    type: "online",
    level: "pocetni",
    price: 105300,
    currency: "RSD",
    accessDuration: "4 meseca (od prijema paketa)",
    hasCertificate: true,
    hasRatePayment: false,
    includes: [
      "Kompletan AuraBrows edukativni program u video formatu",
      "Materijal za praktičan rad, dostava na kućnu adresu",
      "Pristup kursu Savršena simetrija obrva",
      "Pristup kursevima Rad na modelu: normalna i masna koža",
      "Pristup kursu Rad na modelu + ručno senčenje",
      "Pristup kursu Lateks vežbe i pravilno držanje alata",
      "Pristup kursu Različiti položaji i rasporedi dlačica",
      "Bonus kurs fotografisanja i sređivanja radova",
      "Četiri meseca pristupa online sadržaju",
    ],
    curriculum: [
      { number: 1, title: "Oblikovanje, simetrija i teorija boja" },
      { number: 2, title: "Priprema kože, higijena i upoznavanje sa alatom" },
      { number: 3, title: "Pravilno držanje alata, položaj ruke i kontrola pritiska" },
      { number: 4, title: "Raspored i pravac dlačica" },
      { number: 5, title: "Kompletan prikaz rada na modelu, različiti tipovi kože" },
    ],
    forWhom: [
      "želiš da učiš iz svog doma",
      "nisi u mogućnosti da prisustvuješ edukaciji uživo",
      "želiš da lekcije pratiš svojim tempom",
      "odgovara ti samostalan način učenja",
      "možeš redovno da vežbaš bez direktnog nadzora mentora",
      "već imaš određeno iskustvo, ali želiš da unaprediš tehniku",
    ],
    orderBumpEligible: true,
  },
  {
    id: "savrsena-simetrija-obrva",
    slug: "savrsena-simetrija-obrva",
    name: "Savršena simetrija obrva",
    shortDescription:
      "Jasan sistem mapiranja koji možeš da ponoviš na svakom klijentu, bez dugog iscrtavanja i sumnje da li je oblik pravilno postavljen.",
    fullDescription:
      "Nauči da oblik obrva ne određuješ napamet, već prema licu koje je ispred tebe.\n\nSavršena simetrija ne znači da obe obrve moraju biti potpuno identične. Ona znači da znaš kako da prepoznaš proporcije, uspostaviš balans i kreiraš oblik koji izgleda skladno na konkretnom licu.\n\nOnline kurs Savršena simetrija obrva daje ti jasan sistem mapiranja koji možeš da ponoviš na svakom klijentu, bez dugog iscrtavanja, stalnog brisanja i sumnje da li je oblik pravilno postavljen. Kurs je koristan i početnicima koji žele da od početka postave dobre temelje, ali i iskusnim artistima koji žele da isprave greške u mapiranju.",
    type: "online",
    level: "svi",
    price: 99,
    currency: "EUR",
    accessDuration: "trajno",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Razumevanje proporcija lica",
      "Jasan sistem mapiranja, korak po korak",
      "Pravilno određivanje ključnih tačaka: početak, luk, završetak obrve",
      "Prepoznavanje balansa i asimetrije",
      "Sigurniji i brži rad bez stalnog crtanja i brisanja",
      "Trajni pristup kursu",
    ],
    forWhom: [
      "dugo iscrtavaš obrve i stalno se vraćaš na početak",
      "jedna obrva često izgleda drugačije od druge",
      "nisi sigurna gde obrva treba da počne, gde je luk, gde se završava",
      "radiš „na osećaj“, bez jasnog sistema koji možeš da ponoviš",
      "teško prilagođavaš oblik različitim licima",
      "želiš da radiš preciznije, sigurnije i brže",
    ],
    orderBumpEligible: true,
  },
  {
    id: "rad-na-modelu-normalna-koza",
    slug: "rad-na-modelu-normalna-koza",
    name: "Rad na modelu: normalna koža",
    shortDescription:
      "Kompletan profesionalni tretman na modelu sa normalnom kožom, od prve procene do završnog rezultata, bez preskočenih koraka.",
    fullDescription:
      "Pogledaj kako izgleda kompletan profesionalni tretman, od prve procene do završnog rezultata.\n\nKada poznaješ teoriju, ali ti i dalje nedostaje sigurnost da sve korake pravilno povežeš u celinu, detaljan prikaz rada na stvarnom modelu može napraviti veliku razliku. U ovoj video-lekciji pratiš kompletan tretman na modelu sa normalnom kožom, bez preskakanja koraka i bez ubrzanih delova koji ostavljaju nejasnoće.\n\nNe posmatraš samo tehniku. Učiš kako da razmišljaš tokom tretmana, donosiš sigurnije odluke i organizuješ svoj rad tako da svaki korak ima jasno mesto i svrhu.",
    type: "online",
    level: "pocetni",
    price: 150,
    currency: "EUR",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Procenu kože i prirodnih obrva",
      "Pripremu modela za tretman",
      "Iscrtavanje oblika i proveru simetrije",
      "Izbor rasporeda dlačica",
      "Pravilan položaj i rad nožićem, kontrolu pritiska i dubine",
      "Pravilno nanošenje pigmenta i završnu proveru",
      "Prikaz konačnog rezultata",
    ],
    forWhom: [
      "prošla si osnovnu teoriju i želiš jasnije da razumeš praktičan rad",
      "ne osećaš se dovoljno sigurno tokom rada na modelu",
      "želiš da unapediš organizaciju tretmana i preciznost izvođenja",
      "tokom tretmana često zastaneš i pitaš se koji je sledeći korak",
    ],
    orderBumpEligible: true,
  },
  {
    id: "rad-na-modelu-masna-koza",
    slug: "rad-na-modelu-masna-koza",
    name: "Rad na modelu: masna koža",
    shortDescription:
      "Kompletan tretman na koži koja zahteva precizniju procenu i prilagođen način rada, od procene do završnog prikaza rezultata.",
    fullDescription:
      "Pogledaj kako izgleda kompletan tretman na koži koja zahteva precizniju procenu i prilagođen način rada.\n\nRad na masnoj koži često donosi dodatnu nesigurnost: kako pravilno proceniti kožu, koliko pritiska koristiti, kako kontrolisati dubinu i na koji način prilagoditi tehniku da bi rezultat bio uredan i profesionalan. U ovoj video-lekciji pratiš kompletan tretman na modelu sa masnom kožom, od prve procene prirodnih obrva do završnog prikaza rezultata.\n\nUčiš kako da posmatraš kožu, donosiš sigurnije odluke tokom tretmana i prilagodiš svaki korak modelu koji se nalazi ispred tebe.",
    type: "online",
    level: "srednji",
    price: 150,
    currency: "EUR",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Procenu kože i prirodnih obrva na masnoj koži",
      "Prilagođavanje rada masnom tipu kože",
      "Kontrolu pritiska i dubine, praćenje reakcije kože",
      "Pravilno nanošenje pigmenta",
      "Završnu proveru i prikaz konačnog rezultata",
    ],
    forWhom: [
      "savladala si teoriju i želiš da vidiš kompletan rad na stvarnom modelu",
      "ne osećaš se dovoljno sigurno kada radiš na masnoj koži",
      "želiš bolje da razumeš ponašanje masne kože tokom tretmana",
      "želiš da unaprediš tehniku, preciznost i način procene kože",
    ],
    orderBumpEligible: true,
  },
  {
    id: "rad-na-modelu-rucno-sencenje",
    slug: "rad-na-modelu-rucno-sencenje",
    name: "Rad na modelu + ručno senčenje",
    shortDescription:
      "Kako se dlačice i ručno senčenje povezuju u skladan, prirodan i profesionalan rezultat, bez oštrih ili prenaglašenih prelaza.",
    fullDescription:
      "Pogledaj kako se dlačice i ručno senčenje povezuju u skladan, prirodan i profesionalan rezultat.\n\nNekada same iscrtane dlačice nisu dovoljne da obrve dobiju potrebnu punoću, definiciju i vizuelnu ravnotežu. U ovoj video-lekciji pratiš kompletan tretman na modelu uz kombinovanje tehnike dlačica i ručnog senčenja, kako da pravilno povežeš dve tehnike, a da rezultat ne izgleda teško, prenaglašeno ili neprirodno.\n\nCilj nije da svaki tretman izgleda isto, već da naučiš kako da tehniku prilagodiš prirodnim obrvama, koži i željenom rezultatu.",
    type: "online",
    level: "srednji",
    price: 150,
    currency: "EUR",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Procenu potrebe za kombinovanom tehnikom",
      "Iscrtavanje oblika i raspored dlačica",
      "Određivanje delova obrve na kojima je potrebno senčenje",
      "Kontrolu intenziteta i gustine senčenja",
      "Povezivanje dlačica i senke bez oštrih prelaza",
      "Prikaz konačnog rezultata",
    ],
    forWhom: [
      "poznaješ osnove tehnike dlačica i želiš da razumeš kombinovani rad",
      "želiš da uvedeš ručno senčenje u svoje tretmane",
      "nisi sigurna gde, koliko i kako treba dodati senčenje",
      "želiš prirodnije prelaze i vizuelno punije obrve",
    ],
    orderBumpEligible: true,
  },
  {
    id: "lateks-vezbe-drzanje-alata",
    slug: "lateks-vezbe-i-pravilno-drzanje-alata",
    name: "Lateks vežbe i pravilno držanje alata",
    shortDescription:
      "Izgradi sigurnu ruku pre rada na pravoj koži, kroz pravilno držanje alata, položaj tela i kontrolu pritiska.",
    fullDescription:
      "Izgradi sigurnu ruku pre rada na pravoj koži.\n\nOvaj online kurs namenjen je svima koji žele da nauče osnove tehnike kroz pravilno i sistematično vežbanje na lateksu. Kurs se sastoji iz nekoliko modula i video-lekcija koje možeš pratiti svojim tempom.\n\nCilj nije samo da ponavljaš pokrete, već da razumeš kako se pravilno izvode i naučiš da samostalno prepoznaš gde grešiš.",
    type: "online",
    level: "pocetni",
    price: 200,
    currency: "EUR",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Pravilno držanje nožića i položaj prstiju, šake i zgloba",
      "Pravilan položaj tela tokom rada",
      "Odgovarajući ugao alata i kontrolu pritiska",
      "Vežbe za tanke i precizne poteze",
      "Povezivanje poteza u pravilan raspored",
      "Prepoznavanje i ispravljanje čestih grešaka",
    ],
    forWhom: [
      "već radiš puder obrve i želiš da naučiš kako se kreiraju dlačice",
      "ne želiš kompletnu baznu edukaciju, već želiš da učiš samostalno",
      "već si učila tehniku, ali želiš da unaprediš preciznost i sigurnost",
      "imaš problem sa držanjem alata, pritiskom ili izgledom poteza",
    ],
    orderBumpEligible: true,
  },
  {
    id: "lateks-vezbe-5-sablona",
    slug: "lateks-vezbe-5-sablona-dlacica",
    name: "Lateks vežbe: 5 šablona dlačica",
    shortDescription:
      "Nauči kako se gradi pravilan raspored dlačica kroz pet šablona: Spine 3, Spine 5, Spine 6, Spine 5–6 i Upper Spine.",
    fullDescription:
      "Nauči kako se gradi pravilan raspored dlačica, korak po korak.\n\nDobar raspored dlačica nije rezultat nasumičnog iscrtavanja. Svaki šablon ima svoju logiku, pravac i način povezivanja poteza. U ovom online kursu naučićeš kako se grade različite šeme na lateksu: Spine 3, Spine 5, Spine 6, Spine 5–6 i Upper Spine.\n\nNećeš samo precrtavati gotov šablon. Naučićeš da razumeš njegovu konstrukciju i logiku iza svakog poteza.",
    type: "online",
    level: "srednji",
    price: 200,
    currency: "EUR",
    accessDuration: "30 dana",
    hasCertificate: false,
    hasRatePayment: false,
    includes: [
      "Izgradnju osnove svakog od pet šablona",
      "Redosled dodavanja poteza i pravac dlačica",
      "Povezivanje donjeg, srednjeg i gornjeg dela obrve",
      "Izbegavanje ukrštanja i neurednog rasporeda",
      "Prepoznavanje i ispravljanje najčešćih grešaka",
    ],
    forWhom: [
      "već radiš i želiš da unaprediš raspored dlačica",
      "želiš da razumeš kako se grade različite šeme",
      "radiš puder obrve i želiš da probaš tehniku dlačica",
      "znaš da iscrtaš pojedinačnu dlačicu, ali ti je teško da ih rasporediš u prirodan tok",
    ],
    orderBumpEligible: true,
  },
];

export const bonusCourse: Course = {
  id: "bonus-sredjivanje-fotografija",
  slug: "bonus-profesionalno-sredjivanje-fotografija",
  name: "Bonus: Profesionalno sređivanje fotografija",
  shortDescription:
    "Lep rezultat zaslužuje da bude lepo predstavljen: aplikacije, svetlo, kadar i obrada bez menjanja stvarnog rezultata.",
  fullDescription:
    "Lep rezultat zaslužuje da bude lepo predstavljen.\n\nMožeš uraditi savršene obrve, ali ukoliko fotografija nema dobro svetlo, kadar i završnu obradu, kvalitet tvog rada neće doći do izražaja. U ovom praktičnom video-kursu pokazujem kroz koje aplikacije se sređuju fotografije i kako da izgledaju čisto, profesionalno i privlačno za društvene mreže.\n\nCilj nije da se rad menja filterima, već da se njegov kvalitet pravilno prikaže.",
  type: "online",
  level: "svi",
  price: 19,
  currency: "EUR",
  accessDuration: "30 dana",
  hasCertificate: false,
  hasRatePayment: false,
  includes: [
    "Koje aplikacije koristiti za obradu fotografija",
    "Korekciju svetla i boja",
    "Uređivanje kadra koje ističe obrve",
    "Pripremu sadržaja za objavljivanje na društvenim mrežama",
  ],
  forWhom: ["kupuješ bilo koji AuraBrows kurs i želiš da naučiš da ga profesionalno predstaviš"],
  orderBumpEligible: false,
};

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function formatPrice(price: number, currency: Currency): string {
  const formatted = new Intl.NumberFormat("sr-RS").format(price);
  return currency === "EUR" ? `${formatted} €` : `${formatted} RSD`;
}

export function formatPriceParts(
  price: number,
  currency: Currency
): { amount: string; unit: string } {
  return {
    amount: new Intl.NumberFormat("sr-RS").format(price),
    unit: currency === "EUR" ? "€" : "RSD",
  };
}
