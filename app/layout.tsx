import type { Metadata } from "next";
import { Kanit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-base text-ink antialiased">
        <NavBar />
        <main style={{ overflowX: "clip" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
