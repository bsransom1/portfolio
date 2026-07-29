import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import DotGridBackground from "./components/layout/DotGridBackground";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" className={`dark ${jetbrainsMono.variable}`}>
      <body className={`${jetbrainsMono.className} flex min-h-dvh flex-col bg-black antialiased`}>
        <DotGridBackground />
        <div className="relative z-[1] flex min-h-0 w-full flex-1 flex-col">
          <div className="relative min-h-0 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
