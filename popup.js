
export function showPopup(imageList) {
  const popupOverlay = document.getElementById("popup-overlay");
  const popupWrapper = document.getElementById("popup-wrapper");

  if (!popupOverlay || !popupWrapper) {
    console.error("Popup HTML elements not found.");
    return;
  }

  popupWrapper.innerHTML = "";

  imageList.forEach((imgSrc, index) => {
    let title =
      imageList.length === 1
        ? "Nama dan Detail Toko"
        : index === 0
        ? "Nama Toko"
        : "Detail Toko";

    const card = document.createElement("div");
    card.className = "popup-card-container";

    card.innerHTML = `
      <div class="popup-title">${title}</div>
      <img class="popup-image" src="${imgSrc}">
    `;

    popupWrapper.appendChild(card);
  });

  popupOverlay.style.display = "flex";
}

export function initPopupClose() {
  const popupOverlay = document.getElementById("popup-overlay");

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
}
