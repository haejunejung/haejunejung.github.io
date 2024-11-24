import styled from "@emotion/styled";
import { ExternalLink } from "../../common";

interface TReference {
  content: string;
  path: string;
}

interface MultiReferencesProps {
  title?: string;
  references: string[] | TReference[];
}

export const Reference = ({
  reference,
}: {
  reference: string | TReference;
}) => {
  if (typeof reference === "string") {
    // string[]인 경우 content와 path를 동일하게 설정
    return (
      <ExternalLink href={reference} key={reference}>
        <StyledReference>{reference}</StyledReference>
      </ExternalLink>
    );
  }

  // Reference[]인 경우 content와 path를 별도로 사용
  return (
    <ExternalLink href={reference.path} key={reference.path}>
      <StyledReference>{reference.content}</StyledReference>
    </ExternalLink>
  );
};

const MultiReference = ({
  title = "참고 자료",
  references,
}: MultiReferencesProps) => {
  return (
    <section>
      <h3>{title}</h3>
      {references.map((reference, index) => (
        <Reference key={index} reference={reference} />
      ))}
    </section>
  );
};

export default MultiReference;

const StyledReference = styled.p`
  color: var(--color-blue);
  text-decoration: underline;
  word-break: break-all;
`;
