import { Check } from "lucide-react";
import { plans } from "../../data/plans";

export function Pricing() {
  return (
    <section id="planes" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Un precio claro, sin sorpresas.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Empieza gratis y pasa a Pro cuando tu negocio lo necesite. Cancela
            cuando quieras.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`reveal relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-primary text-white ring-1 ring-primary lg:scale-[1.02]"
                  : "bg-paper ring-1 ring-line"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-8 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  Más popular
                </span>
              )}

              <h3
                className={`text-xl font-bold ${plan.popular ? "text-white" : "text-ink"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${plan.popular ? "text-blue-100" : "text-muted"}`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${
                    plan.popular ? "text-white" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-blue-200" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.popular ? "text-accent" : "text-green-600"
                      }`}
                    />
                    <span
                      className={`text-base leading-relaxed ${
                        plan.popular ? "text-blue-50" : "text-ink"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3.5 text-base font-semibold transition-colors ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-blue-50"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Los pagos de Pro se realizan desde la app, como suscripción mensual.
        </p>
      </div>
    </section>
  );
}
