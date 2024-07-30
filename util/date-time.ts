export function formatDate(date?: Date): string {
  if (!date) return "Heute";
  return new Intl.DateTimeFormat("de", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateRange(startDate?: Date, endDate?: Date): string {
  return [startDate, endDate].map(formatDate).join(" - ");
}
