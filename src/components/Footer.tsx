import Icon from "./Icon";
import {
  contact,
  footerQuickLinks,
  footerBookCategories,
} from "../data/content";

const socialLinks: { icon: "facebook" | "instagram" | "twitter" | "youtube"; href: string }[] = [
  { icon: "facebook", href: contact.social.facebook },
  { icon: "instagram", href: contact.social.instagram },
  { icon: "twitter", href: contact.social.twitter },
  { icon: "youtube", href: contact.social.youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#181530] text-neutral-300 px-4 md:px-8 pt-14 pb-6">
      <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img
            src="https://sanskritisamsad.in/wp-content/uploads/2026/06/SS8.png"
            alt="Sanskriti Samsad logo"
            className="h-14 w-14 object-contain bg-white rounded p-1 mb-4"
          />
          <p className="text-sm leading-relaxed">
            <strong className="text-white">Sanskriti Samsad</strong> &ndash; A
            Publisher with Social Commitment. Empowering young minds through
            quality education &amp; literature since 1990.
          </p>
          <div className="flex gap-3 mt-5">
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.icon}
                className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name={s.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {footerQuickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4">
            Book Categories
          </h4>
          <ul className="space-y-2 text-sm">
            {footerBookCategories.map((c) => (
              <li key={c}>
                <a href="#books" className="hover:text-white transition-colors">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-semibold mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <Icon name="pin" className="w-4 h-4 mt-0.5 shrink-0 text-[#d9a441]" />
              <span>{contact.headOffice}</span>
            </li>
            <li className="flex gap-2">
              <Icon name="phone" className="w-4 h-4 mt-0.5 shrink-0 text-[#d9a441]" />
              <span>
                {contact.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-white"
                  >
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" className="w-4 h-4 mt-0.5 shrink-0 text-[#d9a441]" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto border-t border-white/10 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-400">
        <p>&copy; 2026 Sanskriti Samsad. Made with &hearts; in Kolkata</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
