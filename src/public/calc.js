import { formatHuf, calcValueSmall } from '#utils/format.js';

const card = document.getElementById("card-editable");
const bigEl = card.querySelector(".value-big .number");
const smallEl = card.querySelector(".value-small .number");

function update() {
  const raw = bigEl.innerText.replace(/[^0-9.,]/g, "").replace(",", ".");
  const val = parseFloat(raw) || 0;
  smallEl.textContent = formatHuf(calcValueSmall(val));
}

bigEl.addEventListener("input", update);

bigEl.addEventListener("keydown", e => {
  if (e.key === "Enter") e.preventDefault();
});

bigEl.addEventListener("paste", e => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain")
    .replace(/[^0-9.,]/g, "");
  document.execCommand("insertText", false, text);
});
