import { urlSlug } from "#utils/format.js";
import data from "./data.json" with { type: "json" };

const cards = [];
const cardDefault = data.cardDefault;

for (const card of data.cards) {
  for (const [key, val] of Object.entries(cardDefault)) {
    card[key] ??= val;
  }
  card["slug"] ??= urlSlug(card.title);
  cards.push(card);
}

export { cards, cardDefault };
