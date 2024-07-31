import { redirect } from "next/navigation";
import { defaultLocale } from "@/util/i18n";

/**
 * Just redirect to the default language
 */
export default function Home() {
  redirect(`/${defaultLocale}`);
}
