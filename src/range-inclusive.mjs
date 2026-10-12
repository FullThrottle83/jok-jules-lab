export function rangeInclusive(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) throw new TypeError("start and end must be integers");
  if (start > end) return [];
  const values = [];
  for (let value = start; value <= end; value += 1) values.push(value);
  return values;
}
