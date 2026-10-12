export function inventoryTotal(lines) {
  if (!Array.isArray(lines)) throw new TypeError("lines must be an array");
  return lines.reduce((total, line) => {
    const quantity = Number(line?.quantity);
    const priceCents = Number(line?.priceCents);
    if (!Number.isInteger(quantity) || quantity < 0 || !Number.isInteger(priceCents) || priceCents < 0) {
      throw new TypeError("quantity and priceCents must be non-negative integers");
    }
    return total + priceCents;
  }, 0);
}
