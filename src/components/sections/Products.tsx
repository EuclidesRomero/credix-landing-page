import { Smartphone, MonitorSmartphone } from "lucide-react";
import { PhoneShot, ShareLinkMockup } from "../mockups";

export function Products() {
  return (
    <section id="experiencias" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Una app para ti. Un enlace para tu cliente.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Credix tiene dos caras que se complementan: tú llevas el control
            desde la app y tu cliente revisa su cuenta desde un enlace, sin
            instalar nada.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="reveal flex flex-col rounded-3xl bg-paper p-8 ring-1 ring-line">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                <Smartphone className="h-5 w-5 text-primary" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">Para tu negocio</h3>
                <p className="text-sm text-muted">La app de Credix</p>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Tú gestionas todo desde el teléfono: creas deudas, registras
              pagos, revisas cuánto te deben y cobras con recordatorios. Todo en
              tu bolsillo.
            </p>
            <div className="mt-8 flex justify-center">
              <PhoneShot
                src="/images/inicio.png"
                alt="La app de Credix para gestionar tu negocio"
              />
            </div>
          </div>

          <div className="reveal flex flex-col rounded-3xl bg-paper p-8 ring-1 ring-line">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">
                <MonitorSmartphone className="h-5 w-5 text-amber-700" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">Para tu cliente</h3>
                <p className="text-sm text-muted">Estado de cuenta por enlace</p>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Comparte el estado de cuenta de una deuda con un enlace. Tu cliente
              ve cuánto debe y qué ha pagado desde el navegador, sin crear cuenta
              ni descargar nada.
            </p>
            <div className="mt-8">
              <ShareLinkMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
