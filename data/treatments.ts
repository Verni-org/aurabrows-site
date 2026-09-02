export interface Treatment {
  id: string;
  slug: string;
  name: string;
  description: string; // paragrafi razdvojeni sa \n\n
  goodFor: string[];
}

export const treatments: Treatment[] = [
  {
    id: "aurabrows-hiperrealisticne-obrve",
    slug: "aurabrows-hiperrealisticne-obrve",
    name: "AuraBrows autorska tehnika hiperrealističnih obrva",
    description:
      "AuraBrows je moja autorska tehnika kreirana nakon godina iskustva, rada sa klijentima i usavršavanja u oblasti oblikovanja i trajne šminke obrva.\n\nPoznata sam po izradi hiperrealističnih dlačica koje prate prirodan smer rasta obrva i stapaju se sa postojećim dlačicama, tako da je teško prepoznati gde se prirodna obrva završava, a pigmentacija počinje.\n\nU okviru AuraBrows tretmana ne koristim jednu unapred određenu šemu. Oblik, raspored dlačica i intenzitet prilagođavam anatomiji lica, mimici, prirodnim obrvama i rezultatu koji želiš. U zavisnosti od potreba tvojih obrva, kombinujem ručno iscrtavanje hiperrealističnih dlačica, nežno ručno ili mašinsko senčenje i kombinovanje dlačica i senke radi dodatne punoće.",
    goodFor: [
      "imaš proređene, tanke ili asimetrične obrve",
      "imaš puno svojih dlačica, ali želiš puniji izgled ili ujednačeniji oblik",
      "nedostaju ti dlačice na pojedinim delovima",
      "želiš prirodan, ali uredan i precizan oblik",
      "želiš više punoće bez efekta nacrtanih obrva",
      "želiš rezultat prilagođen upravo tvom licu",
    ],
  },
  {
    id: "puder-obrve",
    slug: "puder-obrve",
    name: "Puder obrve",
    description:
      "Puder obrve su tehnika trajne šminke kojom se postiže nežno osenčen, uredan i definisan izgled obrva, sličan efektu pažljivo nanete olovke ili senke.\n\nIntenzitet pigmentacije prilagođava se tvojim željama. Rezultat može biti veoma mekan i prirodan ili nešto izraženiji, dok prednji deo obrva ostaje lagan i postepeno prelazi u definisaniji završetak.",
    goodFor: [
      "svakodnevno popunjavaš obrve šminkom",
      "želiš uredan i jasno definisan oblik",
      "voliš efekat senke bez iscrtanih dlačica",
      "želiš da skratiš vreme svakodnevnog šminkanja",
    ],
  },
  {
    id: "hair-stroke-obrve",
    slug: "hair-stroke-obrve",
    name: "Hair stroke obrve",
    description:
      "Hair stroke je napredna mašinska tehnika kojom se kreiraju tanke i realistične dlačice, pažljivo uklopljene u prirodan rast obrva.\n\nZa razliku od klasičnog senčenja, ovom tehnikom se oblik gradi dlačicu po dlačicu. Cilj nije efekat našminkanih obrva, već nežna dopuna prirodnih dlačica i vizuelno puniji, skladniji oblik.",
    goodFor: [
      "želiš efekat prirodnih dlačica",
      "imaš proređene ili neujednačene obrve",
      "želiš nežan rezultat bez efekta pudera",
      "tražiš mašinsku alternativu klasičnom microbladingu",
      "želiš prirodan, ali precizno isplaniran oblik",
    ],
  },
  {
    id: "trajna-sminka-usana",
    slug: "trajna-sminka-usana",
    name: "Trajna šminka usana",
    description:
      "Trajna šminka usana je tretman kojim se definiše oblik, ujednačava prirodna boja i usnama vraća svežina.\n\nNijansa se bira individualno, u skladu sa tvojim tenom, prirodnom bojom usana i efektom koji želiš. Rezultat može biti veoma suptilan i prirodan ili nešto izraženiji, ali uvek pažljivo prilagođen tvom licu. Tretman nije namenjen stvaranju prenaglašenog izgleda, već postizanju urednijih kontura, ujednačene boje i svežijeg izgleda usana.",
    goodFor: [
      "imaš blede ili neujednačene usne",
      "želiš jasniju i uredniju konturu",
      "želiš da koriguješ vizuelnu asimetriju",
      "želiš svežiju boju usana",
      "želiš negovan izgled bez svakodnevnog nanošenja karmina",
    ],
  },
];
