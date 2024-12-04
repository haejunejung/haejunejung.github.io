import { PropsWithChildren } from "react";
import { getContentStyles } from "./styles";

export function TabsContent({ children }: PropsWithChildren) {
  return <div css={getContentStyles}>{children}</div>;
}
