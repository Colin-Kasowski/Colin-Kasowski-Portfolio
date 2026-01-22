import Link from "next/link";
import { Container } from "./Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-bg/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight">
            Your Name
          </Link>
          <nav className="flex items-center gap-5 text-sm text-muted">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
