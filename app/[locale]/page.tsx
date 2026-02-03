import { Metadata } from "next";
import { Locale, getMessages } from "@/util/i18n";
import { getActivePerson } from "@/content/people/load";
import PersonPage from "@/components/PersonPage";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const messages = await getMessages(params.locale);
  const person = await getActivePerson();
  return {
    ...messages.metadata,
    title: messages.metadata.title.replace("{name}", person?.about.name ?? ""),
  };
}

export default async function Home({
  params,
}: Readonly<{
  params: {
    locale: Locale;
  };
}>) {
  const messages = await getMessages(params.locale);
  const person = await getActivePerson();

  return <PersonPage person={person} locale={params.locale} messages={messages} />;
}
