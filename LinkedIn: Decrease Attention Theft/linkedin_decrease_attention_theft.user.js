// ==UserScript==
// @name     LinkedIn: Decrease Attention Theft
// @version  1
// @match    https://www.linkedin.com/*
// @grant    none
// ==/UserScript==

const style = `
    .notification-badge.notification-badge--show {
        display: none !important;
    }
    
    aside .artdeco-card.pv-profile-card.break-words.mt2 {
    		display: none !important;
    }
`;


let linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(style));


document.head.append(linkElement);