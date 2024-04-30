// ==UserScript==
// @name     Bellinger's Button Boxes: Filter Sold Items
// @version  1
// @match    https://bellingersbuttonboxes.com/*
// @grant    none
// ==/UserScript==

let newButton = `<button id="remove-sold" style="margin:0 0 1rem 0; padding:0.5rem; background-color:darkred; color:white; border-radius:8px;">
Remove sold instruments
</button>`;

document.querySelector(".sortable-masonry").insertAdjacentHTML('afterbegin', newButton);

document.getElementById("remove-sold").addEventListener("click", () => {
document.querySelectorAll(".shop-item:has(div.label-tag)").forEach(item => {item.style.display = "none"});
});