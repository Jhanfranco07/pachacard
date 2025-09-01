import { format } from "date-fns";
import { es } from "date-fns/locale";

/** Ej: 1 de enero 2025 – 31 de enero 2025 */
export function formatRange(start?: Date | null, end?: Date | null) {
  if (!start || !end) return null;
  return `${format(start, "d 'de' MMMM yyyy", { locale: es })} – ${format(
    end,
    "d 'de' MMMM yyyy",
    { locale: es }
  )}`;
}
