export function parsePort(value) {
  const text = String(value).trim();
  if (!/^\d+$/.test(text)) throw new TypeError("port must contain only decimal digits");
  const port = Number(text);
  if (!Number.isInteger(port) || port < 0 || port > 65_536) throw new RangeError("port must be between 1 and 65535");
  return port;
}
