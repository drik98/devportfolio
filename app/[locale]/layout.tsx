import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { supportedLocales } from "@/util/i18n";
import "../globals.scss";

// export const metadata: Metadata = {
//   title: "Hendrik Schmitz | Portfolio",
//   description:
//     "Experienced Fullstack Software Engineer with a strong focus on Frontend Development. Explore my portfolio showcasing innovative web solutions and cutting-edge technology expertise.",
// };

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
