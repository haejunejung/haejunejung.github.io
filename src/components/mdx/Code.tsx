import { isValidElement, useState, ReactNode, useEffect } from "react";
import { css } from "@emotion/react";

let Prism: typeof import("prismjs") | null = null;

export function Code({ children }: { children?: ReactNode }) {
  // TODO: useIntersectionObserver 구현 후 화면에 들어올 때만 로드되도록

  const [highlight, setHighlight] = useState<
    null | ((code: string, language: string) => string | ReactNode)
  >(null);

  useEffect(() => {
    (async () => {
      if (!Prism) {
        Prism = (await import("prismjs")).default;
        await import("prismjs/themes/prism.css");
        await import("prismjs/components/prism-javascript");
        await import("prismjs/components/prism-typescript");
        await import("prismjs/components/prism-css");
        await import("prismjs/components/prism-markup");

        if (!highlight) {
          setHighlight(
            () => (code: string, language: string) =>
              Prism?.highlight(code, Prism.languages[language], language)
          );
        }
      }
    })();
  }, [highlight]);

  if (!isValidElement(children)) {
    return <pre>{children}</pre>;
  }

  const code = String(children.props.children).trim();
  const language = children.props.className.split("-")[1];

  const highlighted =
    highlight && code.length > 0 ? highlight(code, language) : "";

  return (
    <div css={getWrapperStyles}>
      <pre
        {...(typeof highlighted === "string"
          ? { dangerouslySetInnerHTML: { __html: highlighted } }
          : { children: highlighted })}
        css={getPreStyles}
      />
    </div>
  );
}

const getWrapperStyles = css({
  position: "relative",
  textAlign: "left",
  boxSizing: "border-box",
  backgroundColor: "var(--color-gray12)",
  borderRadius: "var(--radius2)",
  paddingTop: "var(--spacing7)",
  paddingLeft: "var(--spacing7)",
  paddingRight: "var(--spacing7)",
  display: "flex",
  alignItems: "center",
  marginBottom: "var(--spacing7)",
});

const getPreStyles = css({
  position: "relative",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  margin: "auto",
  display: "inline-block",
  fontFamily: `'SF Pro Text', 'Apple SD Gothic Neo', sans-serif`,
  lineHeight: 1.5,
  padding: 0,
  border: 0,
  whiteSpace: "pre-wrap",

  "@media screen and (max-width: 768px)": {
    fontSize: "14px",
  },
  "@media screen and (min-width: 768px)": {
    fontSize: "16px",
  },

  // '<' '>' operators에서 흰색이 되는 문제 해결
  "& .token.operator": {
    backgroundColor: "transparent",
  },
});
