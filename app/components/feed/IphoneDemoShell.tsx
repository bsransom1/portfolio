"use client";

type PhoneSize = "md" | "sm";

const SPECS: Record<
  PhoneSize,
  {
    outerW: number;
    outerRounded: number;
    pad: number;
    innerRounded: number;
    notchH: number;
    notchW: number;
    notchRounded: number;
    rightBtnTop: number;
    rightBtnH: number;
    leftBtn1Top: number;
    leftBtn2Top: number;
    leftBtnH: number;
  }
> = {
  md: {
    outerW: 280,
    outerRounded: 42,
    pad: 6,
    innerRounded: 38,
    notchH: 28,
    notchW: 110,
    notchRounded: 16,
    rightBtnTop: 120,
    rightBtnH: 60,
    leftBtn1Top: 90,
    leftBtn2Top: 125,
    leftBtnH: 28,
  },
  sm: {
    outerW: 200,
    outerRounded: 30,
    pad: 4,
    innerRounded: 27,
    notchH: 20,
    notchW: 78,
    notchRounded: 12,
    rightBtnTop: 86,
    rightBtnH: 44,
    leftBtn1Top: 64,
    leftBtn2Top: 90,
    leftBtnH: 20,
  },
};

export default function IphoneDemoShell({
  videoSrc,
  size = "md",
}: {
  videoSrc: string;
  size?: PhoneSize;
}) {
  const s = SPECS[size];
  const barPad = size === "sm" ? "py-3" : "py-5";

  return (
    <div className={`flex justify-center bg-[#eef1f3] ${barPad}`}>
      <div className="relative shrink-0" style={{ width: s.outerW }}>
        <div
          className="relative bg-black shadow-[0_8px_32px_rgba(0,0,0,0.22)]"
          style={{
            borderRadius: s.outerRounded,
            padding: s.pad,
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: s.outerRounded,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(255,255,255,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
          <div
            className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-black"
            style={{
              height: s.notchH,
              width: s.notchW,
              borderBottomLeftRadius: s.notchRounded,
              borderBottomRightRadius: s.notchRounded,
            }}
          />
          <div className="relative overflow-hidden bg-black" style={{ borderRadius: s.innerRounded }}>
            <video autoPlay loop muted playsInline className="h-auto w-full">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div
            className="absolute rounded-r-sm bg-gradient-to-r from-gray-700 to-gray-900"
            style={{ right: -3, top: s.rightBtnTop, width: 3, height: s.rightBtnH }}
          />
          <div
            className="absolute rounded-l-sm bg-gradient-to-l from-gray-700 to-gray-900"
            style={{ left: -3, top: s.leftBtn1Top, width: 3, height: s.leftBtnH }}
          />
          <div
            className="absolute rounded-l-sm bg-gradient-to-l from-gray-700 to-gray-900"
            style={{ left: -3, top: s.leftBtn2Top, width: 3, height: s.leftBtnH }}
          />
        </div>
      </div>
    </div>
  );
}
