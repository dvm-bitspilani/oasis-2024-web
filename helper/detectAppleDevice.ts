export function detectAppleDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    return (
      userAgent.includes("iphone") ||
      userAgent.includes("ipad") ||
      userAgent.includes("ipod")
    );
  }