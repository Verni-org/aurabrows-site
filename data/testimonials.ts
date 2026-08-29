export interface Testimonial {
  name: string;
  city: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Milica J.",
    city: "Novi Sad",
    quote:
      "Saškin puder kurs mi je promenio karijeru. Posle dve nedelje vežbanja imala sam prve plaćene klijentkinje.",
  },
  {
    name: "Ana T.",
    city: "Beograd",
    quote:
      "Sve objašnjeno tako jasno da sam mogla da pratim svojim tempom. Najbolja investicija u sebe do sada.",
  },
  {
    name: "Jovana R.",
    city: "Banja Luka",
    quote:
      "Konačno kurs koji ne preskače detalje. Vraćam se lekcijama stalno — doživotni pristup je zlata vredan.",
  },
];
