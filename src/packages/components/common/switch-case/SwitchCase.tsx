import { ReactNode } from "react";

export interface SwitchCaseProps<Case extends string | number> {
  value: Case;
  caseBy: Partial<Record<Case, ReactNode>>;
  defaultComponent?: ReactNode;
}

export const SwitchCase = <Case extends string | number>({
  value,
  caseBy,
  defaultComponent,
}: SwitchCaseProps<Case>) => {
  if (!value) return defaultComponent;
  return caseBy[value] ?? defaultComponent;
};
