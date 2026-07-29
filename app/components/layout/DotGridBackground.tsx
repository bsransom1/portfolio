/**
 * Full-viewport iPad-style sketchbook dot grid — fixed behind page content.
 */
export default function DotGridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-dvh w-dvw bg-black"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(140, 140, 140, 0.4) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        backgroundPosition: "0 0",
      }}
    />
  );
}
