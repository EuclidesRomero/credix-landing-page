import { Building, Users, FilePlus2, BellRing } from "lucide-react";
import { steps } from "../../data/steps";

const icons = [Building, Users, FilePlus2, BellRing];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Empieza a cobrar en cuatro pasos.
          </h2>
          <p className="mx-auto mt-5 max-w-[58ch] text-lg leading-relaxed text-slate-700">
            No necesitas capacitación ni configuración. En minutos pasas del
            cuaderno a tener todo organizado.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="reveal relative">
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-line">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-5xl font-extrabold leading-none text-line">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
