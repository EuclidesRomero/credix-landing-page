import { Logo } from "../ui/Logo";
import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-4 inline-block text-sm text-muted transition-colors hover:text-ink"
            >
              {site.contact.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Producto</p>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Empieza</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/#planes"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Plan Gratis
                </a>
              </li>
              <li>
                <a
                  href="/#planes"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Plan Pro
                </a>
              </li>
              <li>
                <a
                  href="/#como-funciona"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Legal</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.legal.privacy.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {site.legal.privacy.label}
                </a>
              </li>
              <li>
                <a
                  href={site.legal.terms.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {site.legal.terms.label}
                </a>
              </li>
              <li>
                <a
                  href={site.legal.accountDeletion.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {site.legal.accountDeletion.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Credix. Todos los derechos reservados.</p>
          <p className="text-sm">Hecho para los que venden fiado.</p>
        </div>
      </div>
    </footer>
  );
}
