import { Geist, Geist_Mono, Inter, Libre_Baskerville, Baskervville } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { TransitionProvider } from "@/components/TransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Baskerville = Baskervville({
  variable: "--font-baskervville",
  weight: ["400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "A+N ARCHITEKTUR",
  description: "EIN ARCHITEKTUR BUERO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${Baskerville.variable} antialiased bg-background text-foreground mx-auto max-w-[1210px] w-screen h-auto overflow-x-hidden`}
      >
        <TransitionProvider>
          <TopNav />
          {children}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
