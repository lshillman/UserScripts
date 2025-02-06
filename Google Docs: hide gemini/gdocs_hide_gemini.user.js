// ==UserScript==
// @name     Google Docs: Hide Gemini features
// @version  1
// @match    https://docs.google.com/*
// @grant    none
// ==/UserScript==

const style = `
    .docs-titlebar-buttons div:has(> span):has(button[aria-label="Ask Gemini"]) {
        display: none !important;
    }
    
    .docs-instant-docos-content div div[data-tooltip="Help me write"] {
        display: none !important;
    }
    
    .ai-priority-menu-item {
        display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);