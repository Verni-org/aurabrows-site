import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-meni", label: "O meni" },
  { href: "/kursevi", label: "Kursevi" },
  { href: "/tretmani", label: "Tretmani" },
  { href: "/utisci", label: "Utisci" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="container-aura py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="text-xl tracking-[0.2em] uppercase font-semibold text-text-primary mb-4">
            Aura Brows
          </p>
          <p className="text-text-secondary max-w-sm mb-6">
            Online akademija obrva. Premium video kursevi za buduće majstore
            zanata.
          </p>
          <p className="label mb-3">Prijavi se na listu</p>
          <div className="max-w-sm">
            <NewsletterForm />
          </div>
        </div>

        <div>
          <p className="label mb-4">Navigacija</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-accent-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-4">Kontakt</p>
          <ul className="flex flex-col gap-3 text-text-secondary">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-accent-gold transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-gold transition-colors"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-aura py-6 text-center text-xs text-text-secondary">
          © 2026 Aura Brows. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
