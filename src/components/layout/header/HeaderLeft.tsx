import { PropsWithChildren } from "react";

export function HeaderLeft({ children }: PropsWithChildren) {
  return (
    <div
      css={{
        marginLeft: "var(--spacing7)",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
}
