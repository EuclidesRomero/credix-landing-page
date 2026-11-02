import { NotebookMockup } from "../mockups/NotebookMockup";

const pains = [
  {
    title: "Se pierde entre papeles",
    text: "El cuaderno se moja, se rompe o se traspapela. Cuando más lo necesitas, no está.",
  },
  {
    title: "No avisa cuándo cobrar",
    text: "Nadie te recuerda quién está por vencer o quién ya se atrasó. Se te pasa y pierdes la plata.",
  },
  {
    title: "No deja evidencia",
    text: "Sin historial ni comprobantes, discutir una cuenta con un cliente es tu palabra contra la suya.",
  },
];

export function Problem() {
  return (
    <section id="producto" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div className="reveal">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            El cuaderno no te avisa nada.
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-slate-700">
            Llevar los fiados a mano funciona hasta que no funciona: una deuda
            que olvidaste, un cliente que no recuerda cuánto debía, un cuaderno
            que ya no está. Credix pone orden donde antes había papel y memoria.
          </p>

          <dl className="mt-10 space-y-6">
            {pains.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <dt className="text-base font-semibold text-ink">{p.title}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-slate-700">
                    {p.text}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal mx-auto w-full max-w-sm md:justify-self-end">
          <NotebookMockup />
        </div>
      </div>
    </section>
  );
}
