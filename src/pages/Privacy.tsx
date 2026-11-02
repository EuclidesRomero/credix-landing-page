import { LegalPage } from "../components/layout/LegalPage";
import { privacy, type PrivacyBlock } from "../data/privacy";

function Block({ block }: { block: PrivacyBlock }) {
  if (block.kind === "text") {
    return <p className="text-base leading-relaxed text-slate-700">{block.text}</p>;
  }
  if (block.kind === "list") {
    return (
      <ul className="space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h3 className="text-base font-semibold text-ink">{block.title}</h3>
      <ul className="mt-2 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      subtitle="Cómo recopilamos, usamos y protegemos tus datos personales, en cumplimiento de la Ley 1581 de 2012 de Colombia."
      updated="Última actualización: Agosto 2026"
    >
      <div className="space-y-10">
        {privacy.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-ink">{section.title}</h2>
            <div className="mt-3 space-y-4">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </LegalPage>
  );
}
