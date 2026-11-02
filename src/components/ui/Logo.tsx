export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={1024}
      height={1024}
      className={`rounded-xl ${className}`}
    />
  );
}

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8" />
      <span
        className={`text-xl font-bold tracking-tight ${
          variant === "dark" ? "text-ink" : "text-white"
        }`}
      >
        Credix
      </span>
    </span>
  );
}
