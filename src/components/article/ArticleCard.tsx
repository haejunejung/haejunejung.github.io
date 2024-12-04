import { ArticlePageProps } from "@/types";
import { memo } from "react";
import { Text, UnstyledLink } from "../ui";

export const ArticleCard = memo(function ArticleCard({
  slug,
  title,
  description,
  date,
}: Omit<ArticlePageProps, "importMdx">) {
  return (
    <li
      role="article"
      css={{
        display: "flex",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ":hover": {
          "& .title": {
            color: "var(--color-blue)",
          },
        },
      }}
    >
      <UnstyledLink to={slug}>
        <Text size="title" fontWeight="bold" className="title">
          {title}
        </Text>
        <Text size="body1" css={{ color: "var(--color-gray4)" }}>
          {description}
        </Text>
        <Text size="caption1" css={{ color: "var(--color-gray4)" }}>
          {date}
        </Text>
      </UnstyledLink>
    </li>
  );
});
