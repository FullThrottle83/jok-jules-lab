export function sumBy(items, key) {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  return items.reduce((sum, item) => {
    const value = Number(item?.[key]);
    return sum + value;
  }, 0);
}
