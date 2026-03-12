"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  cursorChar?: string;
  className?: string;
}

export function Typing({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  cursorChar = "|",
  className,
}: TypingProps) {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        cursorChar,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, cursorChar]);

  return <span ref={el} className={className} style={{ whiteSpace: "pre" }} />;
}

export default Typing;