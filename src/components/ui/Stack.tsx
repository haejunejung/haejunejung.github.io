import styled from "@emotion/styled";

const Stack = styled.div({
  display: "flex",
});

export const VStack = styled(Stack)({
  flexDirection: "column",
});

export const HStack = styled(Stack)({
  flexDirection: "row",
});
