"use client";

import {createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode} from "react";
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";

const CursorEffect = dynamic(() => import("@/components/CursorEffect/CursorEffect"), {ssr: false});
const RegistrationContext = createContext<() => void>(() => {});
export const useRegistrationClosed = () => useContext(RegistrationContext);

export function OpenRegistrationOnLoad() {
  const open = useRegistrationClosed();
  useEffect(() => { open(); }, [open]);
  return null;
}

export default function Experience({children}: {children: ReactNode}) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(false);
  const showRegistration = useCallback(() => {
    opener.current = document.activeElement as HTMLElement;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  useEffect(() => {
    const media = matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setCursor(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const warmed = new Set<string>();
    const prefetch = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || /\.[a-z0-9]+$/i.test(url.pathname) || url.pathname === location.pathname || warmed.has(url.pathname)) return;
      warmed.add(url.pathname);
      router.prefetch(url.pathname);
    };
    document.addEventListener("pointerover", prefetch, {passive: true});
    document.addEventListener("focusin", prefetch);
    document.addEventListener("touchstart", prefetch, {passive: true});
    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("focusin", prefetch);
      document.removeEventListener("touchstart", prefetch);
    };
  }, [router]);

  return <RegistrationContext.Provider value={showRegistration}>
    {children}
    {cursor && <CursorEffect />}
    <dialog ref={dialog} className="registration-closed" aria-labelledby="registration-closed-title" onClose={() => {
      setOpen(false);
      if (opener.current?.isConnected) opener.current.focus();
    }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <h2 id="registration-closed-title">Registration is closed for this edition</h2>
      <button type="button" autoFocus onClick={() => dialog.current?.close()}>Close</button>
    </dialog>
  </RegistrationContext.Provider>;
}
