import { IBM_Plex_Sans_Thai } from "next/font/google";
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans-thai",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased ${ibmPlexSansThai.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
