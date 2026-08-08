import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumar-miskin.github.io"),
  title: "Kumar Miskin — Machine Learning Engineer",
  description:
    "Kumar Miskin — Machine Learning Engineer and PhD candidate in Materials Science at Johns Hopkins University. Physics-informed ML, graph neural networks, and Bayesian optimization for materials discovery.",
  keywords: [
    "Kumar Miskin",
    "machine learning",
    "materials science",
    "graph neural networks",
    "Bayesian optimization",
    "Johns Hopkins",
    "perovskites",
  ],
  openGraph: {
    title: "Kumar Miskin — Machine Learning Engineer",
    description:
      "Physics-informed ML for scientific discovery — graph neural networks, Bayesian optimization, and active learning.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
