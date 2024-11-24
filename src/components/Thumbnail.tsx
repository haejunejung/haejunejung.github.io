import { mdxPostTabList } from "@/mdx";
import styled from "@emotion/styled";
import { JSIcon, PerformanceIcon, ReactIcon } from "./Icons";

interface ThumbnailProps {
  type: (typeof mdxPostTabList)[number];
}

export default function Thumbnail({ type }: ThumbnailProps) {
  const bgColor = (function () {
    switch (type) {
      case "JS":
        return "#F2E857";
      case "React":
        return "#49A3C7";
      case "Performance":
        return "#249356";
      default:
        return "#000000";
    }
  })();

  const Icon = function () {
    switch (type) {
      case "JS":
        return <JSIcon />;
      case "React":
        return <ReactIcon />;
      case "Performance":
        return <PerformanceIcon />;
      default:
        return null;
    }
  };

  return (
    <Container bgColor={bgColor} content={type}>
      <Content>
        <Icon />
      </Content>
    </Container>
  );
}

const Container = styled.div<{ bgColor: string; content: string }>`
  width: 200px;
  height: 150px;
  border: 1px solid black;
  border-radius: var(--radius4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.bgColor};

  &::after {
    content: ${(props) => `"${props.content}"`};
    position: absolute;
    bottom: 0px;
    right: 5px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
    pointer-events: none;
    z-index: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;
