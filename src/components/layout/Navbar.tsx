import { Menu } from "lucide-react";
import { Logo } from "../ui/Logo";
import { site } from "../../data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="Credix — inicio" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={site.cta.href}
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            {site.cta.label}
          </a>
        </div>

        <div className="md:hidden">
          <input type="checkbox" id="nav-toggle" className="peer sr-only" />
          <label
            htmlFor="nav-toggle"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-ink ring-1 ring-line"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </label>

          <div className="invisible fixed inset-x-0 top-16 bottom-0 z-40 flex-col gap-1 border-t border-line bg-paper px-5 py-4 opacity-0 transition-opacity peer-checked:visible peer-checked:flex peer-checked:opacity-100">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.cta.href}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              {site.cta.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
