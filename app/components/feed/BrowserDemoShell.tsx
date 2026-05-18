"use client";

export default function BrowserDemoShell({
  hostname,
  videoSrc,
  contentBg = "#FDFBF6",
  mimeType = "video/mp4",
}: {
  hostname: string;
  videoSrc: string;
  contentBg?: string;
  mimeType?: string;
}) {
  return (
    <div className="bg-[#eef1f3] py-5">
      <div className="mx-auto w-full max-w-[600px] overflow-hidden rounded-lg border border-gray-200 bg-[#F5F5F5] shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
        <div className="border-b border-gray-200 bg-[#F5F5F5]">
          <div className="flex items-center gap-2 p-3">
            <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#28CA42]" />
          </div>
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2">
              <svg className="h-4 w-4 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="flex-1 truncate text-sm text-gray-600">{hostname}</span>
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-gray-400" />
                <div className="h-1 w-1 rounded-full bg-gray-400" />
                <div className="h-1 w-1 rounded-full bg-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative" style={{ backgroundColor: contentBg }}>
          <video autoPlay loop muted playsInline className="h-auto w-full">
            <source src={videoSrc} type={mimeType} />
          </video>
        </div>
      </div>
    </div>
  );
}
