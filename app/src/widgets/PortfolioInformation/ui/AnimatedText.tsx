import emotionStyled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PaintedText = emotionStyled.span({
  color: "rgb(254, 111, 94)",
  marginLeft: "10px",
});

export function AnimatedText({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const characters = text.split("");
    let currentLength = 0;
    let adding = true;

    const interval = setInterval(() => {
      if (adding) {
        currentLength++;
        if (currentLength > characters.length) {
          adding = false;
          currentLength = characters.length;
        }
      } else {
        currentLength--;
        if (currentLength < 0) {
          adding = true;
          currentLength = 0;
        }
      }
      setVisibleText(characters.slice(0, currentLength).join(""));
    }, 300);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <PaintedText>
      {visibleText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}
    </PaintedText>
  );
}
