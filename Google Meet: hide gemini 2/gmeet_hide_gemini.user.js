// ==UserScript==
// @name     Google Meet: Hide Gemini
// @version  1
// @match    https://meet.google.com/*
// @grant    none
// ==/UserScript==

const style = `
    button[aria-label*="Gemini"], div[data-promo-anchor-id] {
        display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);