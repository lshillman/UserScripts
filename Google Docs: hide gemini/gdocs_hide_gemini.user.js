// ==UserScript==
// @name     Google Docs: Hide Gemini
// @version  2
// @match    https://docs.google.com/*
// @grant    none
// ==/UserScript==

const style = `
    div[aria-label="Refine"],
	div[aria-label="Help me write"],
	.docs-titlebar-buttons div:has(> span):has(button[aria-label="Ask Gemini"]),
    .docs-instant-docos-content div div[data-tooltip="Help me write"],
    .ai-priority-menu-item,
    .goog-menuitem:has(div[class*='-ai-']),
    .goog-menuitem:has(div[class*='-ai-'])+.apps-hoverable-menu-separator-container {
        display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);
