async function shareCard(cardElem) {
  const valuesText = cardElem.querySelector(".values")
    .textContent.replace(/[ ]{2,99}/g, "\n")
    .trim();
  const descr = cardElem.querySelector(".descr").textContent;
  const shareData = {
    title: cardElem.querySelector("h2").textContent,
    text: valuesText + "\n" + descr,
    url: cardElem.querySelector(".share-link").href,
  }

  // Native share sheet
  if (navigator.share && navigator.canShare(shareData)) {
    await navigator.share(shareData)
    return
  }

  // Fallback to copy
  await navigator.clipboard.writeText(shareData.url)
  cardElem.querySelector(".share-link").textContent = "Link másolva!";
}

const cards = document.querySelectorAll(".card");

cards.forEach((cardElem) => {
  cardElem.querySelector(".share-link")?.addEventListener('click', async (e) => {
    e.preventDefault();
    await shareCard(cardElem);
  });
});