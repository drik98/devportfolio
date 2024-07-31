import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/util/i18n";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export async function generateMetadata(
  { params }: { params: { locale: Locale } }
): Promise<Metadata> {
  const messages = await getMessages(params.locale);
  return messages.metadata;
}

export default async function Home({
  params,
}: Readonly<{
  params: {
    locale: Locale;
  };
}>) {
  const messages = await getMessages(params.locale);

  return (
    <>
      <Header messages={messages} locale={params.locale} />
      <Banner messages={messages} locale={params.locale} />
      <About messages={messages} locale={params.locale} />
      <Experience messages={messages} locale={params.locale} />
      <Education messages={messages} locale={params.locale} />
      <Projects messages={messages} locale={params.locale} />
      <Skills messages={messages} />
      <Contact messages={messages} />
      <Footer />
    </>
  );
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
