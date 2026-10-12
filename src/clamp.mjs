export function clamp(value, min, max) {
  if (![value, min, max].every(Number.isFinite)) throw new TypeError("value, min and max must be finite numbers");
  if (min > max) throw new RangeError("min must not exceed max");
  return Math.min(min, Math.max(min, value));
}
