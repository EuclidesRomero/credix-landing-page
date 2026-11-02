const lines = [
  { name: "María Pérez", amount: "$120.000", struck: true },
  { name: "Carlos", amount: "????", struck: false },
  { name: "Luis", amount: "$85.000", struck: true },
  { name: "Señora maría", amount: "$40.000", struck: false },
];

export function NotebookMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="relative rotate-[-2deg] rounded-md bg-[#f6ecd8] p-6 shadow-float ring-1 ring-black/10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 27px, rgba(120,90,55,0.18) 28px)",
        }}
      >
        <div className="absolute -left-2 top-0 flex h-full flex-col justify-around">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-paper ring-1 ring-black/20" />
          ))}
        </div>

        <p className="text-center font-serif text-xl font-bold text-stone-800">
          Deudores
        </p>
        <div className="mt-4 space-y-2.5">
          {lines.map((l, i) => (
            <div key={i} className="flex items-baseline justify-between">
              <span
                className={`text-[13px] ${
                  l.struck ? "text-stone-500 line-through decoration-red-400/70" : "text-stone-700"
                }`}
              >
                {l.name}
              </span>
              <span
                className={`text-[13px] font-medium ${
                  l.struck ? "text-stone-400 line-through" : "text-stone-700"
                }`}
              >
                {l.amount}
              </span>
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 200 40"
          className="mt-4 h-8 w-full text-red-400/70"
          aria-hidden="true"
        >
          <path
            d="M4 28 C 30 8, 55 40, 90 20 S 150 10, 196 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <p className="mt-2 text-right font-serif text-[15px] italic text-stone-500">
          ¿Quién me debe…?
        </p>
        <p className="mt-2 text-right font-serif text-[15px] italic text-stone-500">
          ¿Ya me pagó?
        </p>

        <div
          aria-hidden="true"
          className="absolute right-6 top-24 h-16 w-16 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(146,100,60,0.22) 0%, rgba(146,100,60,0.1) 55%, transparent 70%)",
          }}
        />
      </div>

      <div className="absolute -bottom-6 -right-4 rotate-3 rounded-lg bg-amber-300 px-4 py-2.5 text-sm font-bold text-stone-800 shadow-soft">
        ¿Y esto en qué cuaderno quedó?
      </div>
    </div>
  );
}
