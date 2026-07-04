import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nasimulhasandeep.com"),
  title: "Nasimul Hasan Deep | Lead Backend Engineer & CTO",
  description: "Nasimul Hasan Deep — Lead Backend Engineer at ACS Future School and CTO at Rhombus Publications. I build reliable, fast, and secure web systems.",
  keywords: ["Nasimul Hasan Deep", "Backend Engineer", "CTO", "Node.js", "PostgreSQL", "AWS", "Software Engineer", "Portfolio"],
  authors: [{ name: "Nasimul Hasan Deep" }],
  creator: "Nasimul Hasan Deep",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasimulhasandeep.com",
    title: "Nasimul Hasan Deep | Lead Backend Engineer & CTO",
    description: "I build reliable, fast, and secure web systems used by tens of thousands of people.",
    siteName: "Nasimul Hasan Deep Portfolio",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Nasimul Hasan Deep" }],
  },
  twitter: {
    card: "summary",
    title: "Nasimul Hasan Deep | Lead Backend Engineer & CTO",
    description: "I build reliable, fast, and secure web systems used by tens of thousands of people.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
};

// Runs before paint: restores the saved theme (falls back to system preference).
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${plexMono.variable} scroll-smooth`}
    >
      <body className="bg-base font-sans text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <div className="grain" aria-hidden="true" />
        <NavBar />
        <main style={{ overflowX: "clip" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
