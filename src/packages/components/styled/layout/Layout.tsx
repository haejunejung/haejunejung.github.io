import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  min-height: 100vh;

  @media only screen and (min-width: 480px) {
    max-width: 100%;
  }

  @media only screen and (min-width: 768px) {
    max-width: 70%;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 50%;
  }
`;
