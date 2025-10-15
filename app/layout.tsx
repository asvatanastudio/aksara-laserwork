import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aksara Laserwork",
  description: "Jasa Laser Cutting dan Engraving Presisi Tinggi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
