import ExternalLink from "../ExternalLink";
import styles from "./MultiReference.module.scss";

interface TReference {
  content: string;
  path: string;
}

interface MultiReferencesProps {
  title?: string;
  references: string[] | TReference[];
}

export const Reference: React.FC<{ reference: string | TReference }> = ({
  reference,
}) => {
  if (typeof reference === "string") {
    // string[]인 경우 content와 path를 동일하게 설정
    return (
      <ExternalLink link={reference} key={reference}>
        <p className={styles.reference}>{reference}</p>
      </ExternalLink>
    );
  }

  // Reference[]인 경우 content와 path를 별도로 사용
  return (
    <ExternalLink link={reference.path} key={reference.path}>
      <p className={styles.reference}>{reference.content}</p>
    </ExternalLink>
  );
};

const MultiReference: React.FC<MultiReferencesProps> = ({
  title = "참고 자료",
  references,
}) => {
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
