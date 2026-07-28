import { useEffect, useState } from "react";

/**
 * Global custom cursor: a soft yellow sun-like halo that follows the pointer
 * and expands when hovering interactive elements.
 */
export function SunCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hot, setHot] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointers (skip touch devices)
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const interactiveSelector =
      'a, button, [role="button"], input, select, textarea, label, summary, [data-cursor="hot"], .cursor-pointer';

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as Element | null;
      const isHot = !!(target && target.closest && target.closest(interactiveSelector));
      setHot(isHot);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.style.cursor = "";
    };
  }, []);

  const size = hot ? 34 : 18;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`,
        width: size,
        height: size,
        borderRadius: "9999px",
        pointerEvents: "none",
        zIndex: 2147483647,
        opacity: visible ? 1 : 0,
        transition:
          "width 180ms ease, height 180ms ease, opacity 200ms ease, background 200ms ease, box-shadow 200ms ease",
        background:
          "radial-gradient(circle at 50% 50%, oklch(0.92 0.16 90 / 0.95) 0%, oklch(0.88 0.16 80 / 0.6) 45%, oklch(0.85 0.18 75 / 0) 70%)",
        boxShadow:
          "0 0 12px 4px oklch(0.9 0.17 85 / 0.55), 0 0 28px 10px oklch(0.88 0.16 80 / 0.28)",
        mixBlendMode: "screen",
      }}
    />
  );
}
