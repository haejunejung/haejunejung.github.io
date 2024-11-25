import { Text } from "@/packages/components";
import { StrictOmit } from "@/types";
import { MDXPageProps } from "@/types/MDXPageProps";
import styled from "@emotion/styled";
import { Link } from "wouter";
import { JSIcon, PerformanceIcon, ReactIcon } from "./Icons";
import { mdxPostTabList } from "@/mdx";

interface MdxPostListProps {
  posts: MDXPageProps[];
}

type PostType = (typeof mdxPostTabList)[number];

export default function MdxPostListView({ posts }: MdxPostListProps) {
  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </PostListContainer>
  );
}

const getThumbnailBgColor = (type: PostType) => {
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
};

const getThumbnailIcon = (type: PostType) => {
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

const PostCard = ({
  path,
  title,
  description,
  date,
  type,
}: StrictOmit<MDXPageProps, "importMdx">) => {
  return (
    <StyledLink href={path}>
      <PostCardContainer>
        <PostCardThumbnail bgColor={getThumbnailBgColor(type)} content={type}>
          <PostCardThumbnailContent>
            {getThumbnailIcon(type)}
          </PostCardThumbnailContent>
        </PostCardThumbnail>
        <PostCardInfo>
          <PostCardTitle size="title" fontWeight="bold">
            {title}
          </PostCardTitle>
          <PostCardContent size="body1">{description}</PostCardContent>
          <PostCardDate size="caption1">{date}</PostCardDate>
        </PostCardInfo>
      </PostCardContainer>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PostListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: var(--spacing7);
`;

const PostCardContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing7);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PostCardThumbnail = styled.div<{ bgColor: string; content: string }>(
  (props) => ({
    width: "200px",
    height: "150px",
    border: "1px solid black",
    borderRadius: "var(--radius4)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    backgroundColor: props.bgColor,

    "::after": {
      content: `"${props.content}"`,
      position: "absolute",
      bottom: "0px",
      right: "5px",
      fontSize: "24px",
      color: "rgba(0,0,0,0.1)",
      fontWeight: "bold",
      pointerEvents: "none",
      zIndex: 0,
    },

    "@media (max-width: 480px)": {
      width: "100%",
    },
  })
);

const PostCardThumbnailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${PostCardThumbnail}:hover & {
    transform: scale(1.1);
  }
`;

const PostCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--spacing4);
  gap: var(--spacing4);
`;

const PostCardTitle = styled(Text)``;

const PostCardContent = styled(Text)`
  color: var(--color-gray4);
`;

const PostCardDate = styled(Text)`
  color: var(--color-gray4);
  margin-top: auto;
`;
