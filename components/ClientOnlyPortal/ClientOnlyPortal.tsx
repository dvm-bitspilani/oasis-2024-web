import { useRef, useEffect, useState, ReactElement } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactElement;
  selector: string;
}

export default function ClientOnlyPortal({ children, selector }: Props) {
  const ref = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
