export function dedupe(items) {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  return [...new Set(items)].sort();
}
