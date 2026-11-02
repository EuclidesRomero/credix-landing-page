import { CheckCircle2 } from "lucide-react";

const rows = [
  { label: "10 oct · Nueva deuda", amount: "$180.000" },
  { label: "18 oct · Pago abono", amount: "-$50.000" },
  { label: "28 oct · Pago abono", amount: "-$30.000" },
];

export function ShareLinkMockup() {
  return (
    <div
      data-ui
      className="overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-black/5"
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-slate-200">
          credix.app/share/9f2k
        </span>
      </div>

      <div
        className="px-6 py-6"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 130% 90% at 8% 15%, rgba(255,255,255,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 92% 78%, rgba(0,0,0,0.08) 0%, transparent 50%), linear-gradient(168deg, rgba(255,255,255,0.08) 0%, transparent 42%, rgba(0,0,0,0.06) 100%)",
          backgroundColor: "#cbb49b",
        }}
      >
        <div className="rounded-xl bg-white/70 p-5 ring-1 ring-black/5">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800">
              Tienda Don Pedro
            </p>
            <p className="mt-1 text-[13px] text-stone-600">Estado de cuenta</p>
            <p className="mt-2 text-lg font-bold text-stone-800">María Pérez</p>
          </div>

          <div className="my-4 border-t border-dashed border-stone-300" />

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-stone-500">Debes</p>
              <p className="text-3xl font-extrabold tracking-tight text-stone-800">
                $120.000
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-700">
              <CheckCircle2 className="h-3.5 w-3.5" /> Al día
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 ring-1 ring-black/5"
              >
                <p className="text-[12px] text-stone-600">{r.label}</p>
                <p className="text-[12.5px] font-bold text-stone-800">{r.amount}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-lg bg-stone-100/70 px-3 py-2.5">
            <p className="text-[12px] font-semibold text-stone-700">Total prestado</p>
            <p className="text-[12.5px] font-bold text-stone-800">$200.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
