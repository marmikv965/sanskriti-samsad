import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-colors";
  const styles = {
    solid: "bg-[#b5123c] text-white hover:bg-[#93102f]",
    outline:
      "border-2 border-[#b5123c] text-[#b5123c] bg-white hover:bg-[#fdf1f3]",
    gold: "bg-[#d9a441] text-[#1a1730] hover:bg-[#c6932f]",
  };

  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
