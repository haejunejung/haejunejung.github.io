import { ReactNode } from "react";

interface SwitchCaseProps<Case extends string> {
  caseBy: Partial<Record<Case, ReactNode | null>>;
  value: Case | null;
  defaultComponent?: ReactNode | null;
}

const SwitchCase = <Case extends string>({
  caseBy,
  value,
  defaultComponent,
}: Readonly<SwitchCaseProps<Case>>) => {
  if (value === null) return defaultComponent;
  return caseBy[value] ?? defaultComponent;
};

export default SwitchCase;
