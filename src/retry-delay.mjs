export function retryDelay(attempt, { baseMs = 100, capMs = 30_000 } = {}) {
  if (!Number.isInteger(attempt) || attempt < 0) throw new RangeError("attempt must be a non-negative integer");
  if (!Number.isFinite(baseMs) || baseMs < 0 || !Number.isFinite(capMs) || capMs < 0) throw new RangeError("delays must be non-negative finite numbers");
  return Math.min(capMs, baseMs * 2 ** attempt);
}
