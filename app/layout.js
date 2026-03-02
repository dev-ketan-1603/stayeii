import { Exo_2, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const exo = Exo_2({ subsets: ["latin"], variable: "--font-display" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "stayeii | Hostel Services",
  description: "Book hostel stays and services with stayeii"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${space.variable}`}>
        <div className="bg-grid" />
        <div className="gradient-orb orb-a" />
        <div className="gradient-orb orb-b" />
        <Header />
        {children}
      </body>
    </html>
  );
}
