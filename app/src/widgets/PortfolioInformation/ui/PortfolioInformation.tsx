"use client";

import emotionStyled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Container = emotionStyled.div({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: 30,

  "@media (min-width: 480px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  zIndex: 1000,

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  justifyContent: "center",
  alignItems: "center",
});

const Avatar = emotionStyled(Image)({
  backgroundColor: "white",
  borderRadius: "16px",
  display: "block", // Ensures the image is treated as a block element
  marginLeft: "auto",
});

const Header = emotionStyled.div({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  marginBottom: 32,
});

const Title = emotionStyled.div({
  fontSize: 32,
});

const SubTitle = emotionStyled.div({
  fontSize: 20,
  gap: 8,
});

const PaintedText = emotionStyled.span({
  color: "rgb(254, 111, 94)",
  marginLeft: "10px",
});

const InformationContainer = emotionStyled.div({
  display: "flex",
  flexDirection: "column",
  borderRadius: 8,

  height: "100%",
  width: "400px",

  "@media (max-width: 480px)": {
    width: "300px",
  },
});

const Body = emotionStyled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: 16,
});

const Tag = emotionStyled.div({
  fontSize: 16,
  gap: 8,

  display: "flex",
  alignItems: "center",

  "@media (max-width: 480px)": {
    fontSize: 12,
  },
});

const Label = emotionStyled.span`
  width: 100px; 
  display: inline-block;
  text-align: left; 
  margin-right: 10px; 
`;

const Value = emotionStyled.span`
  display: inline-block;
  margin-left: 5px; // Space between the colon and the value
`;

const InfoContainer = emotionStyled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px; // Add some space between rows
`;

const Content = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <InfoContainer>
    <Label>{label}</Label>
    <span>:</span>
    <Value>{children}</Value>
  </InfoContainer>
);

export function PortfolioInformation() {
  const router = useRouter();

  return (
    <Container>
      <Avatar src={"/avatar.png"} alt="avatar" width={300} height={300} />
      <InformationContainer style={{ color: "white" }}>
        <Header>
          <Title>정해준</Title>
          <SubTitle>
            <span>Developer</span>
            <PaintedText>FrontEnd & DevOps</PaintedText>
          </SubTitle>
        </Header>
        <Body>
          <Tag>
            <span>💻 Github</span>
            <span
              onClick={() => {
                router.push("https://github.com/haejunejung/");
              }}
            >
              https://github.com/haejunejung
            </span>
          </Tag>
          <Tag>
            <span>🌱 Instagram</span>
            <span
              onClick={() => {
                router.push("https://www.instagram.com/hae._.june/");
              }}
            >
              @hae._.june
            </span>
          </Tag>
          <Tag>
            <span>📚 Portfolio</span>
            <span
              onClick={() => {
                router.push(
                  "https://www.notion.so/93bac40910264b53bd50675865bb151f"
                );
              }}
            >
              https://haejunejung.notion.site
            </span>
          </Tag>
          <Tag>
            <span>📞 Email</span>
            <span>jhj9422@unist.ac.kr</span>
          </Tag>
        </Body>
      </InformationContainer>
    </Container>
  );
}
