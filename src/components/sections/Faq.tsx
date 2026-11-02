import { faq } from "../../data/faq";

export function Faq() {
  return (
    <section id="preguntas" className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-center text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Preguntas frecuentes.
        </h2>

        <div className="mt-12 space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white ring-1 ring-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="text-base font-semibold text-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl font-light text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-base leading-relaxed text-slate-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
