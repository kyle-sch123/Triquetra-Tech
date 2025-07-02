import type { Metadata } from "next";
import { Roboto_Mono, Roboto } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Triquetra Technologies",
  description: "Website for Triquetra Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          roboto.variable,
          robotoMono.variable,
          "bg-[#111111] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
