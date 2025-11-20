import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Nasimul Hasan Deep | Software Engineer",
  description: "Portfolio of Nasimul Hasan Deep, a Software Engineer specializing in Full-stack Development, Cloud Computing, and AI Integration.",
  keywords: ["Software Engineer", "Full-stack Developer", "Next.js", "React", "Node.js", "Cloud Computing", "AI", "Portfolio"],
  authors: [{ name: "Nasimul Hasan Deep" }],
  creator: "Nasimul Hasan Deep",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasimulhasandeep.com",
    title: "Nasimul Hasan Deep | Software Engineer",
    description: "Building scalable and high-performance web applications.",
    siteName: "Nasimul Hasan Deep Portfolio",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQGZgGVu66QKUg/profile-displayphoto-scale_400_400/B4DZmeOnHsJMAk-/0/1759296255883?e=1765411200&v=beta&t=gmbrY48q2ihobBKatVEgsLR9Oh6DpIqjGeN-QOYQGlw",
        width: 400,
        height: 400,
        alt: "Nasimul Hasan Deep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasimul Hasan Deep | Software Engineer",
    description: "Building scalable and high-performance web applications.",
    images: ["https://media.licdn.com/dms/image/v2/D4D03AQGZgGVu66QKUg/profile-displayphoto-scale_400_400/B4DZmeOnHsJMAk-/0/1759296255883?e=1765411200&v=beta&t=gmbrY48q2ihobBKatVEgsLR9Oh6DpIqjGeN-QOYQGlw"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-slate-950 text-slate-200`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
