/** Re-query observed DOM changes, and never let a missing loader block the page. */
export function waitForPreload(querySelector: string): Promise<void> {
  return new Promise(resolve => {
    if (document.querySelector(querySelector)) return resolve();
    const finish = () => { observer.disconnect(); clearTimeout(deadline); resolve(); };
    const observer = new MutationObserver(() => { if (document.querySelector(querySelector)) finish(); });
    const deadline = setTimeout(finish, 1000);
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
