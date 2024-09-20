export function waitForPreload(querySelector: string) {
    return new Promise((resolve, reject) => {
      const preloader = document.querySelector(querySelector);
      if (preloader) {
        return resolve("loaded");
      }
  
      const observer = new MutationObserver(() => {
        if (preloader) {
          observer.disconnect();
          return resolve("loaded");
        }
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }