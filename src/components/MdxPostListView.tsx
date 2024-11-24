import { Text } from "@/packages/components";
import { StrictOmit } from "@/types";
import { MDXPageProps } from "@/types/MDXPageProps";
import styled from "@emotion/styled";
import { Link } from "wouter";
import Thumbnail from "./Thumbnail";

interface MdxPostListProps {
  posts: MDXPageProps[];
}

export default function MdxPostListView({ posts }: MdxPostListProps) {
  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </PostListContainer>
  );
}

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
        <Thumbnail type={type} />
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
