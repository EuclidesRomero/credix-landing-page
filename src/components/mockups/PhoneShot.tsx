interface PhoneShotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  hideStatusBar?: boolean;
}

export function PhoneShot({ src, alt, className = "", priority = false, hideStatusBar = false }: PhoneShotProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[2.6rem] bg-slate-900 p-2 shadow-float ring-1 ring-black/10 ${className}`}
    >
      <div className={`overflow-hidden rounded-[2rem] ${hideStatusBar ? "h-[calc(100%-12px)]" : ""}`}>
        <img
          src={src}
          alt={alt}
          width={720}
          height={1560}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`block w-full ${hideStatusBar ? "-mt-3" : ""}`}
        />
      </div>
    </div>
  );
}
