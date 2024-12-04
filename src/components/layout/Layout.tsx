import { Header } from "./header";
import { FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
import { Text, UnstyledLink, VStack } from "../ui";
import { Outlet } from "react-router-dom";
import { Body } from "./body";
import { Footer } from "./footer";
import { PropsWithChildren } from "react";
import { ExternalLink } from "../common";

export function Layout() {
  return (
    <VStack>
      <Header.Root>
        <Header.Left>
          <UnstyledLink to="/">
            <Text size="title" fontWeight="bold">
              정해준이 정해준
            </Text>
          </UnstyledLink>
        </Header.Left>
        <Header.Right>
          <SocialIcon href="https://github.com/haejunejung/blog">
            <FaGithub size={"20px"} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/%EC%A0%95-%ED%95%B4%EC%A4%80-747930325/">
            <FaLinkedin size={"20px"} />
          </SocialIcon>
          <FaRss size={"20px"} />
        </Header.Right>
      </Header.Root>
      <Body>
        <Outlet />
      </Body>
      {/* // TODO: Giscus */}
      <Footer></Footer>
    </VStack>
  );
}

function SocialIcon({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <ExternalLink
      href={href}
      css={{
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
    >
      {children}
    </ExternalLink>
  );
}
