export const TAXPAYERS = 4_609_000;

export function formatHuf(number) {
  return new Intl.NumberFormat('hu-HU').format(Math.round(number));
}

export function calcValueSmall(valueBig) {
  const total = valueBig * 1_000_000_000;
  return total / TAXPAYERS;
}

export function urlSlug(s) {
  return s
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/[^A-Za-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}