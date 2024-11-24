import MdxPostListView from "@/components/MdxPostListView";
import { mdxPostTabList, mdxPostList } from "@/mdx";
import { Text } from "@/packages/components";
import styled from "@emotion/styled";
import { useState } from "react";

export default function HomePage() {
  const [currentTab, setCurrentTab] =
    useState<(typeof mdxPostTabList)[number]>("JS");

  return (
    <HomePageContainer>
      <MdxTabs>
        {mdxPostTabList.map((tab, index) => (
          <MdxTab
            onClick={() => setCurrentTab(tab)}
            key={index}
            isActive={tab === currentTab}
          >
            <Text size="subtitle1" fontWeight="bold">
              {tab}
            </Text>
          </MdxTab>
        ))}
      </MdxTabs>
      <MdxPostListView posts={mdxPostList[currentTab]} />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing4);
  gap: var(--spacing10);
  width: 100%;
  height: 100%;
`;

const MdxTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: : center;
  width: 100%;
  padding: var(--spacing4);
  gap: var(--spacing7);
  position: relative;
`;

const MdxTab = styled.button<{ isActive: boolean }>((props) => ({
  border: "none",
  backgroundColor: "inherit",
  cursor: "pointer",
  color: props.isActive ? "var(--color-gray1)" : "var(--color-gray7)",
  fontWeight: props.isActive ? 700 : 400,
  position: "relative",

  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: props.isActive ? "var(--color-gray1)" : "transparent",
  },
}));
