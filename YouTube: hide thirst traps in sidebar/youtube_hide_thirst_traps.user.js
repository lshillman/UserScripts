// ==UserScript==
// @name     YouTube: Hide Thirst Traps in Sidebar
// @version  1
// @match    https://www.youtube.com/*
// @grant    none
// ==/UserScript==

const style = `
    #sparkles-container {
        display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);