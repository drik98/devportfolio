import { defaultPersonSlug, personSlugs, type PersonContent } from "./types";

function normalizeSlug(value: string | undefined): string | undefined {
  return value?.trim().toLowerCase();
}

export function getActivePersonSlug(): typeof personSlugs[number] {
  const envSlug = normalizeSlug(process.env.NEXT_PUBLIC_PERSON);
  if (envSlug && personSlugs.includes(envSlug as typeof personSlugs[number])) {
    return envSlug as typeof personSlugs[number];
  }
  return defaultPersonSlug;
}

async function getPersonBySlug(slug: string): Promise<PersonContent | null> {
  const normalizedSlug = normalizeSlug(slug);
  if (!normalizedSlug) {
    return null;
  }

  try {
    const personModule = await import(`./${normalizedSlug}/person`);
    return personModule.default;
  } catch {
    return null;
  }
}

export async function getActivePerson(): Promise<PersonContent> {
  const person = await getPersonBySlug(getActivePersonSlug());
  if (!person) {
    throw new Error("Active person could not be loaded.");
  }
  return person;
}
