import { PropsWithChildren } from "react";

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <div
      css={{
        width: "100",
        height: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "0.5px solid var(--color-gray10)",
      }}
    >
      {children}
    </div>
  );
}
