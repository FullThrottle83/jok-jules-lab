import { discountRate } from "./discount.mjs";

export function orderTotal(lines) {
  if (!Array.isArray(lines)) throw new TypeError("lines must be an array");
  const subtotal = lines.reduce((sum, line) => {
    const quantity = Number(line?.quantity);
    const unitCents = Number(line?.unitCents);
    if (!Number.isInteger(quantity) || quantity < 0 || !Number.isInteger(unitCents) || unitCents < 0) {
      throw new TypeError("quantity and unitCents must be non-negative integers");
    }
    return sum + quantity * unitCents;
  }, 0);
  return Math.round(subtotal * (1 - discountRate(subtotal)));
}
