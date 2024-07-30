import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hendrik Schmitz | Mein Portfolio",
  description:
    "Experienced Fullstack Software Engineer with a strong focus on Frontend Development. Explore my portfolio showcasing innovative web solutions and cutting-edge technology expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
