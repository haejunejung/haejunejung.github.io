import {
	type PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { TabsProvider } from "./TabsContext";
import type { IndicatorRect, Tab, Variant } from "./types";

export interface TabsRootProps {
	tab: Tab;
	onTabChange?(newTab: Tab): void;
	variant?: Variant;
}

export function TabsRoot({
	children,
	...props
}: PropsWithChildren<TabsRootProps>) {
	const { tab, onTabChange, variant = "line" } = props;

	const [selectedTab, setSelectedTab] = useState<Tab>(tab);
	const [indicatorRect, setIndicatorRect] = useState<IndicatorRect>({
		left: 0,
		width: 0,
		top: 0,
		height: 0,
	});

	const tabRefs = useRef<HTMLButtonElement[]>([]);

	const handleSelectedTab = useCallback(
		(newTab: Tab) => {
			setSelectedTab(newTab);
			if (onTabChange) {
				onTabChange(newTab);
			}
		},
		[onTabChange],
	);

	const handleUpdateIndicatorRect = useCallback(
		(selectedTabRef: HTMLButtonElement) => {
			if (selectedTabRef) {
				const { offsetLeft, offsetWidth, offsetHeight, offsetTop } =
					selectedTabRef;
				setIndicatorRect({
					left: offsetLeft,
					width: offsetWidth,
					height: offsetHeight,
					top: offsetTop,
				});
			}
		},
		[],
	);

	useEffect(() => {
		const selectedTabRef = tabRefs.current.find(
			(tabRef) => tabRef.dataset.tabValue === selectedTab,
		);

		if (selectedTabRef) {
			// NOTE: `requestAnimationFrame`이 없으면 초기 렌더링에서 DOM이 생성되기 전에 애니메이션 업데이트가 되는 문제가 발생
			requestAnimationFrame(() => {
				handleUpdateIndicatorRect(selectedTabRef);
			});
		}
	}, [handleUpdateIndicatorRect, selectedTab]);

	return (
		<TabsProvider
			value={{
				selectedTab,
				indicatorRect,
				tabRefs,
				variant,
				handleSelectedTab,
			}}
		>
			<section>{children}</section>
		</TabsProvider>
	);
}
