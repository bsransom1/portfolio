/** Product screen — no device chrome. Full interface visible (contain, not crop). */
export default function ScreenDemo({
  src,
  mimeType,
  className = "",
}: {
  src: string;
  mimeType?: string;
  className?: string;
}) {
  const type =
    mimeType ??
    (src.endsWith(".mov") || src.endsWith(".qt") ? "video/quicktime" : "video/mp4");

  return (
    <div
      className={`overflow-hidden rounded-lg border border-white/10 bg-neutral-950 shadow-[0_22px_56px_rgba(0,0,0,0.45)] ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="block h-auto w-full"
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
}
