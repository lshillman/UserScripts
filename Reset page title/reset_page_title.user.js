// ==UserScript==
// @name     Reset page title
// @version  1
// @match    https://www.concertina.net/*
// @grant    none
// ==/UserScript==

const originalTitle = document.title;
    
function resetTitle() {
  if( originalTitle != document.title ){    
    observer.disconnect();
    document.title = originalTitle;
    console.info("Reset the page title.");

    observer.observe(document.querySelector('title'), {
      childList: true,
      subtree: true
    });
  }

}
    
let observer = new MutationObserver(resetTitle);

observer.observe(document.querySelector('title'), {
  childList: true,
  subtree: true
});