import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SiteHeader from "./components/layout/SiteHeader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braden Ransom",
  description: "Informatics @ UCI · UX design, software development, and product work",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} page-dot-grid flex min-h-dvh flex-col antialiased font-sans`}
      >
        <SiteHeader />
        <div className="relative flex min-h-0 w-full flex-1 flex-col">
          <div className="relative z-[1] min-h-0 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
