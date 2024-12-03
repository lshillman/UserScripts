// ==UserScript==
// @name     ProtonMail: Don't display scheduled messages in sent folder
// @version  1
// @match    https://mail.proton.me/*
// @grant    none
// ==/UserScript==

const style = `
    .item-container-wrapper:has(div):has(div):has(div):has(div):has(div):has(span):has(span):has(span[data-testid="item-location-Scheduled"]) {
        display: none;
    }
`;

let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));

document.head.append(linkElement);