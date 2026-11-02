import { Check, Upload } from "lucide-react";
import { features, type Feature } from "../../data/features";
import { PhoneShot } from "../mockups";

export function Features() {
  return (
    <section id="funciones" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Todo lo que necesitas para cobrar.
          </h2>
          <p className="mx-auto mt-5 max-w-[58ch] text-lg leading-relaxed text-slate-700">
            Tres acciones, un mismo propósito: que cada peso que prestas vuelva
            a ti. Así se organiza el fiado con Credix.
          </p>
        </div>

        <div className="mt-16 space-y-24 md:space-y-32">
          {features.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureMockup({ feature }: { feature: Feature }) {
  if (feature.secondaryImage) {
    return (
      <div className="grid w-full grid-cols-2 items-start gap-4">
        <PhoneShot src={feature.image} alt={feature.imageAlt} />
        <div className="relative">
          <PhoneShot
            src={feature.secondaryImage}
            alt={feature.secondaryAlt ?? ""}
          />
          <div className="animate-drift absolute -top-10 right-2 z-10 hidden items-center gap-2 whitespace-nowrap rounded-2xl bg-white px-3.5 py-2 shadow-float ring-1 ring-black/5 sm:flex">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <Upload className="h-3.5 w-3.5 text-primary" />
            </span>
            <span className="text-[13px] font-semibold text-ink">
              Sube comprobantes de pago
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <PhoneShot
      src={feature.image}
      alt={feature.imageAlt}
      hideStatusBar={feature.id === "protege"}
    />
  );
}

function FeatureBlock({
  feature,
  flip,
}: {
  feature: (typeof features)[number];
  flip: boolean;
}) {
  const mockup = (
    <div className="mx-auto max-w-[520px]">
      <FeatureMockup feature={feature} />
    </div>
  );

  const copy = (
    <div>
      <p className="text-lg font-semibold text-secondary">{feature.kicker}</p>
      <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
        {feature.title}
      </h3>
      <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-slate-700">
        {feature.description}
      </p>
      <ul className="mt-6 space-y-3">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Check className="h-3 w-3 text-green-700" />
            </span>
            <span className="text-base leading-relaxed text-ink">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="reveal grid items-center gap-12 md:grid-cols-2 md:gap-16">
      {flip ? (
        <>
          {mockup}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {mockup}
        </>
      )}
    </div>
  );
}
