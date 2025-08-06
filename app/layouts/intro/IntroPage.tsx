"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function IntroPage({ onClose }: { onClose: () => void }) {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    localStorage.setItem("introSeen", "true");
    window.dispatchEvent(new Event("storage"));
    onClose();
  };

  return (
    <div style={{ height: "100vh", padding: "5%", background: "#121212", color: "white", boxSizing: "border-box"}}>
      <div style={{display: "flex", }}>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22
          }}
          onAnimationComplete={() => setRotated(true)}
        >
          <motion.div
            animate={rotated ? { rotate: 0 } : { rotate: 25 }}
            transition={{ 
              stiffness: 300,
              damping: 22,
              type: "spring" 
            }}
          >
            <Image
              src="/images/emojis/wave.png"
              width={100}
              height={100}
              alt="Waving Hand"
            />
          </motion.div>
        </motion.div>
      </div>
      <button onClick={handleClick}>Enter the site</button>
    </div>
  );
}