import { Overlay, Text } from "@/packages/components";
import styled from "@emotion/styled";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Overlay>
      <Text size="title" fontWeight="bold">
        페이지를 찾을 수 없습니다.
      </Text>
      <BackButton href="/">
        <Text size="body1">홈으로 이동</Text>
      </BackButton>
    </Overlay>
  );
}

const BackButton = styled(Link)`
  padding: var(--spacing4);
  text-decoration: none;
  color: white;
  display: inline-block;
  background-color: var(--color-red);
  border-radius: var(--radius2);
`;
