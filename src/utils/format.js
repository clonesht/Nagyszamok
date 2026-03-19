export const byDiv = {
  "adofizetokre": 4_609_000,
  "allampolgaronkent":  9_540_000,
  "csaladonkent": 2_713_000,
  "haztartasonkent": 4_004_823,
}

export function formatHuf(number) {
  return new Intl.NumberFormat('hu-HU').format(Math.round(number));
}

export function calcValueSmall(valueBig, by="adofizetokre") {
  const total = valueBig * 1_000_000_000;
  return total / byDiv[by];
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