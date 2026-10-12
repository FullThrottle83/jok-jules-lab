export function formatName(first, last) {
  return [first, last]
    .map((part) => String(part ?? "").trim())
    .filter(Boolean)
    .join(" ");
}
