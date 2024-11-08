import ExternalLink from "../ExternalLink";

interface MultiReferencesProps {
  references: string[];
}

const MultiReference: React.FC<MultiReferencesProps> = ({ references }) => {
  return (
    <section>
      <h3>참고 자료</h3>
      {references.map((reference) => (
        <ExternalLink link={reference} key={reference}>
          <p style={{ color: "#133E87", textDecoration: "underline" }}>
            {reference}
          </p>
        </ExternalLink>
      ))}
    </section>
  );
};

export default MultiReference;
