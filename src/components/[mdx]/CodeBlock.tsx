import { PropsWithChildren, useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import YAML from "highlight.js/lib/languages/yaml";
import styles from "./CodeBlock.module.scss";

hljs.registerLanguage("javascript", js);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("yaml", YAML);

const CodeBlock: React.FC<Readonly<PropsWithChildren>> = ({ children }) => {
  const codeRef = useRef<HTMLElement>(null);
  const [highlighted, setHighligted] = useState<boolean>(false);

  //TODO: dangerouslySetInnerHTML로 직접 HTML 삽입? coderef?
  //TODO: SSR이면 마운트 없이도 하이라이트 가능?? -> CSR->SSR 전환??
  //TODO: highlight 비용
  useEffect(() => {
    if (codeRef.current && !highlighted) {
      const result = hljs.highlightAuto(
        codeRef.current.textContent || ""
      ).value;

      codeRef.current.innerHTML = result;
      setHighligted(true);
    }
  }, [children, highlighted]);

  return (
    <code ref={codeRef} className={styles.code}>
      {children}
    </code>
  );
};

export default CodeBlock;
