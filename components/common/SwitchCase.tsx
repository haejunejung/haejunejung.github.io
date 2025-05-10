"use client";

import type { ReactNode } from "react";

interface SwitchCaseProps<Case extends PropertyKey> {
	value: Case | null | undefined;
	caseBy: Record<Case, ReactNode>;
	defaultCase?: ReactNode;
}
export function SwitchCase<Case extends PropertyKey>({
	value,
	caseBy,
	defaultCase,
}: SwitchCaseProps<Case>) {
	if (value == null) {
		return <>{defaultCase ?? null}</>;
	}

	return <>{caseBy[value]}</>;
}
