"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion, useAnimationFrame } from "framer-motion";

const items = Array.from({ length: 10 });

export default function TopBar() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [x, setX] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const [contentWidth, setContentWidth] = React.useState(0);

  React.useEffect(() => {
    setIsClient(true);
    function checkVisibility() {
      setVisible(localStorage.getItem("introSeen") === "true");
    }
    window.addEventListener("storage", checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener("storage", checkVisibility);
    };
  }, []);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth / 2);
    }
  }, [isClient, visible]);

  useAnimationFrame(() => {
    setX((prev) => {
      if (contentWidth && Math.abs(prev) >= contentWidth) {
        return 0;
      }
      return prev - 1.2;
    });
  });

  if (!isClient || !visible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "32px",
        background: "#f9f9f9",
        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        fontSize: 16,
        letterSpacing: 0.1,
      }}
    >
      <motion.div
        ref={contentRef}
        style={{
          display: "inline-flex",
          alignItems: "center",
          position: "absolute",
          left: x,
        }}
      >
        {Array(2)
          .fill(null)
          .map((_, j) =>
            items.map((_, i) => (
              <span key={j + '-' + i} style={{ display: "flex", alignItems: "center", marginRight: 32, gap: 8 }}>
                <Icon icon="formkit:happy" width={22} height={22} style={{ color: '#888' }} />
                <span style={{ display: "flex", alignItems: "center", marginLeft: 20, fontWeight: 400, fontSize: 14, color: '#888' }}>
                  <Icon icon="material-symbols:refresh" width={16} height={16} style={{ marginRight: 6, color: '#bbb' }} />
                  New theme, new vibe—just&nbsp;<b>refresh!</b>
                </span>
              </span>
            ))
          )}
      </motion.div>
    </div>
  );
}