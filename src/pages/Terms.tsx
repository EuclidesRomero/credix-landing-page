import { LegalPage } from "../components/layout/LegalPage";
import { terms } from "../data/terms";
import { site } from "../data/site";

export function TermsPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      subtitle="Las condiciones que rigen el uso de la aplicación Credix."
    >
      <div className="space-y-10">
        {terms.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-ink">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-base leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-slate-700"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        ¿Tienes dudas? Escríbenos a{" "}
        <a href={`mailto:${site.contact.email}`} className="text-primary hover:underline">
          {site.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
