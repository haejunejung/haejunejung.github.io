import type { ReactNode } from "react";

export type SwitchCaseProps<Case extends string> = {
	value: Case;
	caseBy: Record<Case, ReactNode>;
};

export const SwitchCase = <Case extends string>({
	value,
	caseBy,
}: SwitchCaseProps<Case>) => {
	return <>{caseBy[value] ?? null}</>;
};
