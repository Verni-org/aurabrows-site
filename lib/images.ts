type ImageAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

export const siteImages: Record<string, ImageAsset> = {
  hero: {
    src: "/images/imgs/prva home page.png",
    alt: "Saška u belom sakou i farmerkama, stoji u foto-studiju.",
    objectPosition: "center top",
  },
  homePortrait: {
    src: "/images/imgs/druga home page.png",
    alt: "Saška u beloj košulji i farmerkama, sedi u foto-studiju.",
    objectPosition: "center top",
  },
  portrait: {
    src: "/images/imgs/about me.png",
    alt: "Portret Aleksandre Stojilković Saške u belom odelu, osnivača Aura Brows akademije.",
    objectPosition: "center top",
  },
};

export const courseImages: Record<string, ImageAsset> = {
  "aurabrows-bazna-obuka": {
    src: "/images/imgs/IMG_9876.jpeg",
    alt: "Saška i polaznice sa sertifikatima nakon završene AuraBrows bazne obuke.",
    objectPosition: "center 30%",
  },
  "puder-obrve-bazna-obuka": {
    src: "/images/imgs/IMG_3051.jpeg",
    alt: "Saška prati vežbanje polaznice na lateks podlozi tokom bazne obuke za puder obrve.",
    objectPosition: "center 25%",
  },
  "jednodnevno-usavrsavanje": {
    src: "/images/imgs/IMG_3003.jpeg",
    alt: "Polaznica radi obrve na modelu uz Saškin nadzor tokom jednodnevnog usavršavanja.",
    objectPosition: "center",
  },
  "aurabrows-online-bazna-obuka": {
    src: "/images/imgs/IMG_3251.jpeg",
    alt: "Saška objašnjava tehniku crtanja obrva na flipchart tabli.",
    objectPosition: "center",
  },
  "savrsena-simetrija-obrva": {
    src: "/images/imgs/IMG_6974.png",
    alt: "Precizno merenje i iscrtavanje oblika obrva na modelu.",
    objectPosition: "center",
  },
  "rad-na-modelu-normalna-koza": {
    src: "/images/imgs/IMG_3225.jpeg",
    alt: "Praktičan rad na obrvama modela sa normalnom kožom.",
    objectPosition: "center",
  },
  "rad-na-modelu-masna-koza": {
    src: "/images/imgs/IMG_3210.jpeg",
    alt: "Praktičan rad na obrvama modela sa masnom kožom.",
    objectPosition: "center",
  },
  "rad-na-modelu-rucno-sencenje": {
    src: "/images/imgs/IMG_3215.jpeg",
    alt: "Rad na obrvama modela tokom obuke za dlačice i ručno senčenje.",
    objectPosition: "center",
  },
  "lateks-vezbe-drzanje-alata": {
    src: "/images/imgs/IMG_4044.jpeg",
    alt: "Pravilno držanje alata tokom vežbanja poteza na lateks podlozi.",
    objectPosition: "center",
  },
  "lateks-vezbe-5-sablona": {
    src: "/images/imgs/IMG_4042.jpeg",
    alt: "Vežbanje rasporeda i šablona dlačica na lateks podlozi.",
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
    src: "/images/imgs/IMG_2655.jpeg",
    alt: "Prikaz puder obrva sa mekim i definisanim završetkom.",
    objectPosition: "center",
  },
  "hair-stroke-obrve": {
    src: "/images/imgs/IMG_0276.jpeg",
    alt: "Prikaz hair stroke obrva sa finim, prirodnim dlačicama.",
    objectPosition: "center",
    objectFit: "contain",
  },
  "trajna-sminka-usana": {
    src: "/images/imgs/20260221_131637_660.jpeg",
    alt: "Krupni prikaz usana sa definisanom konturom i crvenom pigmentacijom nakon trajne šminke.",
    objectPosition: "center",
  },
};
