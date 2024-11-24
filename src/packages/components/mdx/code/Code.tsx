import { PropsWithChildren, useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import YAML from "highlight.js/lib/languages/yaml";
import styled from "@emotion/styled";

hljs.registerLanguage("javascript", js);
hljs.registerLanguage("typescript", ts);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("yaml", YAML);

const StyledCode = styled.code`
  display: block;
  line-height: 1.5;
  padding: var(--spacing6);
  overflow-x: scroll;
`;

const Code = ({ children }: PropsWithChildren) => {
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
    <pre style={{ backgroundColor: "var(--gray14)" }}>
      <StyledCode ref={codeRef}>{children}</StyledCode>
    </pre>
  );
};

export default Code;
