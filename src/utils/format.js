export const TAXPAYERS = 4_500_000;

export function formatHuf(number) {
  return new Intl.NumberFormat('hu-HU').format(Math.round(number)) + " forint";
}

export function calcValueSmall(valueBig) {
  const total = valueBig * 1_000_000_000;
  return total / TAXPAYERS;
}