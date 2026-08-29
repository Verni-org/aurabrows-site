# AuraBrows by Saška — PRD (Product Requirements Document)

## Projekat

Marketing sajt sa listingom kurseva i tretmana za brow artist studio. Faza 1 — statičan sajt sa order flow-om (bez user auth-a, bez video playera). Faza 2 (budući projekat) — korisnički nalozi, LMS, mobilna aplikacija.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Font:** Cormorant Garamond (Google Fonts) — serif, koristi se za headings i body
- **Deployment:** Vercel
- **Email:** Brevo ili Resend (za order confirmation + newsletter signup)
- **Forms:** Next.js API routes (server actions)
- **Data:** Kursevi i tretmani definisani kao TypeScript data fajlovi (ne hardkodirano u JSX)

---

## Dizajn sistem (iz mockupa)

### Boje

| Token | Vrednost | Upotreba |
|-------|----------|----------|
| `--bg-primary` | `#1a1611` | Glavni tamni background (telo sajta) |
| `--bg-card` | `#231e17` | Card pozadina, sekcije |
| `--bg-section-alt` | `#f0ebe4` | Svetla sekcija (CTA, kontrast) |
| `--text-primary` | `#f0ebe4` | Glavni tekst na tamnoj pozadini |
| `--text-secondary` | `#a89a8a` | Sekundarni tekst, labels, muted |
| `--accent-gold` | `#c9a84c` | Zlato — CTA dugmad, naglasci, italic reči, cene |
| `--accent-gold-hover` | `#d4b85e` | Hover stanje na gold elementima |
| `--border` | `#3a3228` | Borderi kartica, divideri |

### Tipografija

- **Font family:** `Cormorant Garamond`, serif
- **Headings (h1):** 48–56px, font-weight 600, italic za naglašene reči (u zlatu)
- **Headings (h2):** 32–36px, font-weight 600
- **Subheadings / labels:** 11–13px, uppercase, letter-spacing 3–4px, `--text-secondary`
- **Body:** 16–18px, font-weight 400, line-height 1.7
- **Cene:** 28–32px, font-weight 700, `--accent-gold`

### Layout

- **Max-width containera:** 1200px, center
- **Nav:** sticky, transparentan na hero → solid na scroll
- **Sekcije:** full-width pozadina, content unutar containera
- **Razmak između sekcija:** 80–120px padding vertikalno
- **Kartice kurseva:** grid 4 kolone desktop → 2 tablet → 1 mobile
- **Border-radius:** 8–12px na karticama
- **Slike/video:** placeholder zone sa overlay tekstom dok se ne dodaju prave fotografije

### Buttons

- **Primary (CTA):** `--accent-gold` background, tamni tekst, uppercase, letter-spacing, padding 16px 32px
- **Secondary / Ghost:** transparentan, `--accent-gold` border + tekst
- **Na hover:** blagi brightness ili scale efekat

---

## Struktura sajta (stranice i rute)

```
/                     → Landing (Homepage)
/kursevi              → Listing svih kurseva
/kursevi/[slug]       → Detalj pojedinačnog kursa
/tretmani             → Tretmani (listing svih)
/o-meni               → O meni (About)
/utisci               → Testimonials (može biti i sekcija na homepage-u)
/faq                  → Najčešća pitanja
/kontakt              → Kontakt forma + info
```

---

## Stranica: Homepage `/`

Layout sekcija (tačan redosled iz mockupa):

### 1. Hero
- Label iznad naslova: `ONLINE AKADEMIJA OBRVA`
- Naslov: "Savršene obrve počinju **znanjem**" (italic + gold na "znanjem")
- Podnaslov: "Naučite zanat puder obrva i oblikovanja od nule — kroz premium video kurseve koje gledate svojim tempom, sa doživotnim pristupom i sertifikatom."
- 2 dugmeta: "POGLEDAJ KURSEVE" (primary) + "UPOZNAJ SAŠKU" (ghost)
- Desno: placeholder za sliku/video (tamna zona sa oznakom)
- Dole: "SKROLUJ" indikator

### 2. Stats bar
- 4 statistike u redu: `1200+` zadovoljnih polaznica · `9` godina iskustva · `4.9 ★` prosečna ocena · `30+` zemalja polaznica

### 3. O meni (kratka sekcija)
- Label: `DOBRODOŠLI U AURA BROWS`
- Naslov: "Verujem da svaka žena zaslužuje da se oseća **sigurno u svoje umeće.**" (italic + gold)
- Tekst: kratak intro o Saški
- Mini stats: `9+ godina iskustva` · `1200+ polaznica`
- Avatar + ime: "Saška — Brow artist & edukator"
- Levo: placeholder za sliku

### 4. Kursevi (preview)
- Label: `ONLINE KURSEVI`
- Naslov: "Izaberi svoj **put**" (italic + gold)
- Podnaslov: "Doživotni pristup, sertifikat i privatna zajednica uz svaki kurs."
- Grid kartica (4 komada na desktopu)
- Svaka kartica: slika placeholder, nivo badge, naziv, kratak opis, trajanje, broj lekcija, cena, "DETALJNIJE →" link

### 5. Benefiti (ikone)
- 4 stavke u redu sa ikonom:
  - Doživotni pristup — "Gledaj kad god želiš, koliko god puta želiš."
  - Sertifikat — "Zvanična potvrda o završenoj obuci."
  - Privatna zajednica — "Podrška i odgovori i posle kursa."
  - Korak po korak — "Jasne lekcije od osnova do naprednog."

### 6. Utisci (testimonials)
- Label: `UTISCI POLAZNICA`
- Naslov: "Reči koje **greju**" (italic + gold)
- 3 testimonial kartice sa: zvezdice, citat, avatar inicijal, ime, grad

### 7. CTA sekcija
- Svetla pozadina (`--bg-section-alt`)
- Label: `SPREMNA ZA PRVI KORAK?`
- Naslov: "Pretvori strast u **profesiju**" (italic + gold, ali tamni tekst na svetloj pozadini)
- Dugme: "POGLEDAJ KURSEVE"

### 8. Footer
- Logo: `AURA BROWS`
- Opis: "Online akademija obrva. Premium video kursevi za buduće majstore zanata."
- Navigacija linkovi
- Kontakt: email, Instagram, lokacija
- Copyright: `© 2026 Aura Brows. Sva prava zadržana.`

---

## Stranica: Listing kurseva `/kursevi`

Grid prikaz svih kurseva. Svaki kurs prikazan kao kartica sa:
- Placeholder slika
- Nivo badge (početni / srednji / napredni / svi nivoi)
- Naziv kursa
- Kratak opis (1–2 rečenice)
- Trajanje + broj lekcija
- Cena (RSD ili EUR)
- Link na detalj stranicu

Kurseve grupisati u dve kategorije:
1. **Edukacije uživo** (bazne obuke sa mentorstvom)
2. **Online kursevi** (video kursevi za samostalno učenje)

---

## Stranica: Detalj kursa `/kursevi/[slug]`

Layout iz mockupa (dve kolone na desktopu):

### Leva kolona (šira, ~65%)
- Breadcrumb: `← NAZAD NA KURSEVE`
- Nivo badge + tip label: npr. `SREDNJI → NAPREDNI · ONLINE VIDEO KURS`
- Naslov kursa
- Opis kursa (paragraf)
- Placeholder za intro video
- **Šta ćeš naučiti** — lista sa check ikonama
- **Program kursa** — numerisani moduli sa brojem lekcija i trajanjem (accordion ili statički)
- Pun content iz docx fajla za taj kurs

### Desna kolona (sticky sidebar, ~35%)
- Placeholder slika
- Cena (velika, gold)
- Info: "Jednokratno · doživotni pristup" (ili specifičan rok)
- **KUPI KURS** dugme (primary CTA)
- Napomena: "🔒 Bezbedna kupovina · trenutni pristup"
- Detalji: trajanje, broj lekcija, nivo, sertifikat (da/ne)
- Edukator mini-sekcija: avatar, ime, iskustvo

### Za edukacije uživo (bazne obuke)
Sidebar prikazuje:
- Grupna cena + Individualna cena
- Dugme: "PRIJAVI SE" umesto "KUPI KURS"
- Napomena o plaćanju u ratama

---

## Stranica: Tretmani `/tretmani`

Listing tretmana iz docx-a. Svaki tretman prikazan kao sekcija:
- Naziv tretmana
- Opis
- "Pravi izbor za tebe ako:" lista
- CTA: "Zakaži konsultaciju" (vodi na kontakt ili WhatsApp)

Tretmani iz content-a:
1. AuraBrows – autorska tehnika hiperrealističnih obrva
2. Puder obrve
3. Hair stroke obrve
4. Trajna šminka usana

Na dnu: sekcija "Nisi sigurna koja tehnika je za tebe?" sa tekstom + CTA

---

## Stranica: O meni `/o-meni`

Content iz docx sekcije "O meni":
- Naslov + prezentacija Saške
- Iskustvo (bullet lista → prikazati kao stilizovane stavke, ne raw liste)
- Završna poruka
- CTA ka kursevima ili kontaktu

---

## Stranica: FAQ `/faq`

Accordion komponenta. Pitanja i odgovori tačno iz docx sekcije "Najčešća pitanja" (9 pitanja/odgovora).

---

## Stranica: Kontakt `/kontakt`

- Email: aurabrowsbysaska@gmail.com (za sada)
- Instagram link
- Lokacija: Beograd, Srbija
- Kontakt forma: ime, email, poruka → šalje na Saškinu email adresu
- Newsletter signup forma (Brevo integration)

---

## Checkout / Order Flow (Faza 1)

**VAŽNO: Nema user auth-a, nema pravih plaćanja na sajtu u fazi 1.**

### Za online kurseve (video kursevi 99–200€)
1. Korisnica klikne "KUPI KURS" na detalj stranici
2. Otvara se checkout modal/stranica sa: naziv kursa, cena, email polje, ime, telefon
3. **Order bump:** ako kupuje bilo koji kurs, prikaže se sugestija za Bonus kurs fotografisanja za 19€ (checkbox "Dodaj bonus kurs za 19€")
4. Dugme "POTVRDI NARUDŽBINU"
5. Podaci se šalju na API route → čuvaju u JSON/Supabase/Airtable + šalje se email Saški i kupcu
6. Kupac dobija email sa potvrdom i instrukcijama za uplatu
7. Saška ručno šalje pristup nakon primljene uplate

### Za edukacije uživo (bazne obuke)
1. Korisnica klikne "PRIJAVI SE"
2. Forma: izbor grupna/individualna, ime, email, telefon
3. Opcija plaćanja: jednokratno ili u 2 rate
4. Submit → isti flow (API + email)
5. Saška kontaktira korisnicnicu sa instrukcijama za uplatu i terminom

### Za tretmane
- Nema checkout-a
- CTA vodi na kontakt formu ili direktan WhatsApp/telefon link

---

## Data model za kurseve

Kursevi se drže u TypeScript fajlu (`/data/courses.ts`):

```typescript
type CourseType = "online" | "uzivo-bazna" | "uzivo-usavrsavanje";
type Currency = "RSD" | "EUR";
type Level = "pocetni" | "srednji" | "napredni" | "svi";

interface Course {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;       // za karticu
  fullDescription: string;        // za detalj stranicu (može biti markdown)
  type: CourseType;
  level: Level;
  price: number;
  priceIndividual?: number;       // samo za uživo obuke
  currency: Currency;
  accessDuration: string;         // "30 dana" | "4 meseca" | "trajno"
  hasCertificate: boolean;
  hasRatePayment: boolean;        // plaćanje u ratama
  videoHours?: string;            // npr. "6h videa"
  lessonCount?: number;           // npr. 42
  includes: string[];             // šta dobijaš
  curriculum?: CurriculumModule[];// program kursa (moduli)
  forWhom: string[];              // kome je namenjeno
  orderBumpEligible: boolean;     // da li se nudi bonus kurs od 19€
}

interface CurriculumModule {
  number: number;
  title: string;
  lessonCount?: number;
  duration?: string;
}
```

---

## Kompletna lista kurseva (iz docx-a — SOURCE OF TRUTH)

### Edukacije uživo

| # | Naziv | Grupna cena | Indiv. cena | Valuta | Pristup online | Mentorstvo |
|---|-------|-------------|-------------|--------|----------------|------------|
| 1 | AuraBrows bazna obuka | 169.650 | 198.900 | RSD | 4 meseca | 2 meseca |
| 2 | Puder obrve bazna obuka | 169.650 | 198.900 | RSD | 4 meseca | 2 meseca |
| 3 | AuraBrows online bazna obuka | 105.300 | — | RSD | 4 meseca | Nema |
| 4 | Jednodnevno AuraBrows usavršavanje | 70.200 | — | RSD | 30 dana | Nema |

### Online kursevi (samostalno učenje)

| # | Naziv | Cena | Valuta | Pristup |
|---|-------|------|--------|---------|
| 5 | Savršena simetrija obrva | 99 | EUR | Trajno |
| 6 | Rad na modelu – normalna koža | 150 | EUR | 30 dana |
| 7 | Rad na modelu – masna koža | 150 | EUR | 30 dana |
| 8 | Rad na modelu + ručno senčenje | 150 | EUR | 30 dana |
| 9 | Lateks vežbe i pravilno držanje alata | 200 | EUR | 30 dana |
| 10 | Lateks vežbe – 5 šablona dlačica | 200 | EUR | 30 dana |
| 11 | Bonus: Profesionalno sređivanje fotografija | 19 | EUR | — (order bump) |

**Napomena:** Bonus kurs (#11) se NE prikazuje u listings-u. Prikazuje se SAMO kao sugestija u checkout-u kada korisnica kupuje bilo koji drugi kurs.

---

## Newsletter / Mail lista

- Signup forma u footer-u (email polje + submit)
- Opciono: popup ili inline forma na homepage-u
- Integracija sa Brevo (MailerLite kao alternativa)
- Double opt-in

---

## Responsive breakpoints

- Mobile: < 768px (1 kolona, hamburger nav)
- Tablet: 768–1024px (2 kolone grid)
- Desktop: > 1024px (4 kolone kursevi, 2 kolone detalj)

---

## Šta NIJE u scope-u faze 1

- ❌ Korisnički nalozi / registracija / login
- ❌ Video player / streaming / zaštita videa
- ❌ Automatsko plaćanje (IPG / Stripe / kartica)
- ❌ Automatska isporuka pristupa kursevima
- ❌ Admin panel / CMS
- ❌ Mobilna aplikacija
- ❌ Višejezičnost (sajt je samo na srpskom)
- ❌ Blog

---

## SEO i meta

- Svaka stranica ima svoj `<title>` i `<meta description>` na srpskom
- Open Graph tagovi za deljenje na društvenim mrežama
- Structured data za kurseve (Schema.org Course)
- Sitemap.xml
- robots.txt

---

## Napomene za developera

1. **Mockup koristi placeholder podatke (druge nazive kurseva i cene).** Prati dizajn i layout iz mockupa, ali content i cene koristi ISKLJUČIVO iz ovog PRD-a.
2. **Slike:** koristi placeholder zone sa tekstom "FOTO" ili neutralan gradient — prave fotografije se dodaju naknadno.
3. **Italic + gold naglasci u naslovima:** svaki heading ima 1–2 reči koje su italic + `--accent-gold`. Ovo je signature stil sajta.
4. **Testimoniali:** koristi podatke iz mockupa (Milica J., Ana T., Jovana R.) kao placeholder.
5. **Srpski jezik:** sav UI tekst je na srpskom (latinica). Dugmad: "KUPI KURS", "PRIJAVI SE", "POGLEDAJ KURSEVE", "POŠALJI", itd.
6. **Instagram:** @aura.brows.saska
7. **Email:** aurabrowsbysaska@gmail.com (za kontakt i notifikacije narudžbina)
