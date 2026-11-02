import { LegalPage } from "../components/layout/LegalPage";
import { accountDeletion } from "../data/accountDeletion";
import { site } from "../data/site";

export function AccountDeletionPage() {
  return (
    <LegalPage
      title="Eliminación de cuenta"
      subtitle="Cómo eliminar tu cuenta de Credix y qué sucede con tu información."
    >
      <div className="space-y-10">
        {accountDeletion.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-ink">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-base leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
            {section.steps && (
              <ol className="mt-4 space-y-3">
                {section.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-base leading-relaxed text-slate-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            )}
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
        ¿Necesitas ayuda con la eliminación? Escríbenos a{" "}
        <a href={`mailto:${site.contact.email}`} className="text-primary hover:underline">
          {site.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
