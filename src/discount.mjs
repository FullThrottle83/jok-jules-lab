export function discountRate(subtotalCents) {
  if (!Number.isInteger(subtotalCents) || subtotalCents < 0) throw new TypeError("subtotalCents must be a non-negative integer");
  if (subtotalCents > 20_000) return 0.15;
  if (subtotalCents >= 10_000) return 0.1;
  return 0;
}
