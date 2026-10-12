export function formatName(first, last) {
  return `${String(first ?? "").trim()} ${String(last ?? "").trim()}`;
}
