/**
 * Formats a date into "Aug 20th, 2025" format
 */
export function formatDate(date: Date): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = date.getDate();
  const suffix = d >= 11 && d <= 13 ? "th" : d % 10 === 1 ? "st" : d % 10 === 2 ? "nd" : d % 10 === 3 ? "rd" : "th";
  return `${months[date.getMonth()]} ${d}${suffix}, ${date.getFullYear()}`;
}
