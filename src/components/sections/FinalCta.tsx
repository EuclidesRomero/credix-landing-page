import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #2F5BEA 100%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 md:py-32">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Tu cuaderno de fiado, en tu bolsillo.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
          Deja de anotar en papeles que se pierden. Registra, cobra y controla
          tus deudas desde una sola app, gratis para empezar.
        </p>
        <div className="mt-9">
          <a
            href="#planes"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-blue-50"
          >
            Empezar gratis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
