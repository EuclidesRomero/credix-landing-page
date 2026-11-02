import { ShieldCheck, CloudUpload, Layers, Share2 } from "lucide-react";
import { benefits } from "../../data/benefits";

const icons: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck,
  cloud: CloudUpload,
  layers: Layers,
  share: Share2,
};

export function Benefits() {
  return (
    <section id="beneficios" className="bg-primary">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Tu negocio lo nota desde el primer día.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-blue-200">
            No se trata solo de anotar deudas. Se trata de proteger tu plata,
            cobrar a tiempo y que nadie quede sin responder.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <div key={b.title} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-blue-100">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
