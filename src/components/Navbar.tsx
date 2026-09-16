import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { navLinks, contact } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 px-4 md:px-8 py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src="https://sanskritisamsad.in/wp-content/uploads/2026/06/SS8.png"
            alt="Sanskriti Samsad logo"
            className="h-12 w-12 object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-800 hover:text-[#b5123c] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-neutral-700 hover:text-[#b5123c]"
          >
            <Icon name="phone" className="w-4 h-4" />
            {contact.phones[0]}
          </a>
          <Button href="#partners" variant="solid">
            Become a Partner
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 px-4 py-4 flex flex-col gap-3 bg-white">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-neutral-800 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-neutral-700 py-1"
          >
            <Icon name="phone" className="w-4 h-4" />
            {contact.phones[0]}
          </a>
          <Button href="#partners" variant="solid" className="justify-center">
            Become a Partner
          </Button>
        </div>
      )}
    </header>
  );
}
