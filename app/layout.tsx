import { Kanit } from "next/font/google";
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased ${kanit.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
