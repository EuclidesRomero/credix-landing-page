import { ArrowRight } from "lucide-react";
import { PhoneShot } from "../mockups";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:gap-8 md:pb-28 md:pt-24 lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="animate-rise text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.2rem] lg:text-[3.9rem]">
            Deja de perder plata en el fiado.
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-slate-700 md:text-xl">
            Credix organiza las deudas de tu negocio: quién te debe, cuánto y
            cuándo pagar. Regístralo, recibe recordatorios y cobra a tiempo, sin
            cuadernos ni papeles.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#planes"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-ink ring-1 ring-line transition-colors hover:bg-white"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Plan gratis · Sin tarjeta de crédito
          </p>
        </div>

        <div className="relative mx-auto lg:justify-self-end">
          <div className="animate-rise" style={{ animationDelay: "0.1s" }}>
            <PhoneShot
              src="/images/inicio.png"
              alt="Pantalla de inicio de Credix con el saldo total que te deben"
              priority
            />
          </div>

          <div
            className="animate-drift absolute -right-36 -top-12 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-float ring-1 ring-black/5 sm:flex"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
              $
            </span>
            <div className="leading-tight">
              <p className="text-[13px] text-slate-600">Cobrado este mes</p>
              <p className="text-sm font-bold text-ink">$1.850.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
