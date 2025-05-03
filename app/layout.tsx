import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store , Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${kanit.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
