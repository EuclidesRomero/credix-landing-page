import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: ReactNode;
}

export function LegalPage({ title, subtitle, updated, children }: LegalPageProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <header className="animate-rise border-b border-line pb-10">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{subtitle}</p>
          )}
          {updated && <p className="mt-3 text-sm text-muted">{updated}</p>}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}
