export function normalizeIndianMobile(value: string): string {
  return value.replace(/^(\+91|91|0)/, '').trim();
}

export function isValidIndianMobile(value: string): boolean {
  const normalized = normalizeIndianMobile(value);
  return /^[6-9]\d{9}$/.test(normalized);
}
