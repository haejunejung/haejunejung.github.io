import styled from "@emotion/styled";
import { ExternalLink } from "../../common/external-link/ExternalLink";

export default function Anchor({
  href = "#",
  children,
  ...props
}: React.JSX.IntrinsicElements["a"]) {
  return (
    <StyledAnchor href={href} {...props}>
      {children}
    </StyledAnchor>
  );
}

const StyledAnchor = styled(ExternalLink)`
  color: var(--color-bluegreen);
  text-decoration: underline;
  word-break: break-all;
`;
