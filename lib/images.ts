type ImageAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const siteImages: Record<string, ImageAsset> = {
  hero: {
    src: "/images/site/hero-edukacija.jpeg",
    alt: "Saška prati rad polaznice tokom tretmana obrva na modelu.",
    objectPosition: "center top",
  },
  portrait: {
    src: "/images/site/saska-portret.jpeg",
    alt: "Portret Aleksandre Stojilković Saške, osnivača Aura Brows akademije.",
    objectPosition: "center top",
  },
};

export const courseImages: Record<string, ImageAsset> = {
  "aurabrows-bazna-obuka": {
    src: "/images/site/aurabrows-bazna-obuka.jpeg",
    alt: "Saška vodi baznu obuku obrva uz rad na modelu.",
    objectPosition: "center",
  },
  "puder-obrve-bazna-obuka": {
    src: "/images/site/puder-bazna-obuka.jpeg",
    alt: "Praktični deo bazne obuke za puder obrve na modelu.",
    objectPosition: "center",
  },
  "jednodnevno-usavrsavanje": {
    src: "/images/site/jednodnevno-usavrsavanje.jpeg",
    alt: "Saška individualno objašnjava mapiranje i tehniku polaznici.",
    objectPosition: "center",
  },
  "aurabrows-online-bazna-obuka": {
    src: "/images/site/online-bazna-obuka.jpeg",
    alt: "Saška drži online edukativni čas i objašnjava tehniku polaznici.",
    objectPosition: "center",
  },
  "savrsena-simetrija-obrva": {
    src: "/images/site/savrsena-simetrija.jpeg",
    alt: "Prikaz mapiranja i vežbe simetrije obrva na lateks podlozi.",
    objectPosition: "center",
  },
  "rad-na-modelu-normalna-koza": {
    src: "/images/site/hero-edukacija.jpeg",
    alt: "Rad na modelu tokom edukacije za obrve.",
    objectPosition: "center top",
  },
  "rad-na-modelu-masna-koza": {
    src: "/images/site/tretman-u-studiju.jpeg",
    alt: "Prikaz tretmana obrva na modelu tokom praktične nastave.",
    objectPosition: "center",
  },
  "rad-na-modelu-rucno-sencenje": {
    src: "/images/site/rucno-sencenje.jpeg",
    alt: "Rezultat obrva sa naglašenim dlačicama i mekim senčenjem.",
    objectPosition: "center",
  },
  "lateks-vezbe-drzanje-alata": {
    src: "/images/site/savrsena-simetrija.jpeg",
    alt: "Vežba pravilnog držanja alata i mapiranja na lateksu.",
    objectPosition: "center",
  },
  "lateks-vezbe-5-sablona": {
    src: "/images/site/jednodnevno-usavrsavanje.jpeg",
    alt: "Saška pokazuje raspored dlačica i šablone tokom edukacije.",
    objectPosition: "center",
  },
  "bonus-sredjivanje-fotografija": {
    src: "/images/site/sertifikat-polaznica.jpeg",
    alt: "Saška sa polaznicom i sertifikatom nakon završene edukacije.",
    objectPosition: "center",
  },
};

export const treatmentImages: Record<string, ImageAsset> = {
  "aurabrows-hiperrealisticne-obrve": {
    src: "/images/site/aurabrows-tretman.jpeg",
    alt: "Prikaz AuraBrows hiperrealističnih obrva pre i posle tretmana.",
    objectPosition: "center",
  },
  "puder-obrve": {
    src: "/images/site/puder-obrve-rezultat.jpeg",
    alt: "Prikaz puder obrva sa mekim i definisanim završetkom.",
    objectPosition: "center",
  },
  "hair-stroke-obrve": {
    src: "/images/site/hair-stroke-rezultat.jpeg",
    alt: "Prikaz hair stroke obrva sa finim, prirodnim dlačicama.",
    objectPosition: "center",
  },
  "trajna-sminka-usana": {
    src: "/images/site/tretman-u-studiju.jpeg",
    alt: "Saška radi tretman trajne šminke u studiju.",
    objectPosition: "center",
  },
};
