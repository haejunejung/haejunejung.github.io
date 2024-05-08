"use client";

import AnimatedCursor from "react-animated-cursor";

export function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={24}
      outerStyle={{
        border: "2px solid rgb(254, 111, 94)",
        backgroundColor: "black",
      }}
      // "rgb(254, 111, 94)"
      innerStyle={{
        backgroundColor: "rgb(254, 111, 94)",
      }}
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
