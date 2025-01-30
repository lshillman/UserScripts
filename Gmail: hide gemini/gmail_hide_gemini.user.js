// ==UserScript==
// @name     Gmail: Hide Gemini in top nav
// @version  1
// @match    https://mail.google.com/*
// @grant    none
// ==/UserScript==

const style = `
    div:has(> span):has(button[aria-label="Ask Gemini"]) {
        display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);