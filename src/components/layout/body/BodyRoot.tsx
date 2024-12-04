import { PropsWithChildren } from "react";

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        margin: "0 auto",

        "@media only screen and (min-width: 480px)": {
          maxWidth: "100%",
        },
        "@media only screen and (min-width: 768px)": {
          maxWidth: "66.7%",
        },
        "@media only screen and (min-width: 1024px)": {
          maxWidth: "50%",
        },
      }}
    >
      {children}
    </div>
  );
}
