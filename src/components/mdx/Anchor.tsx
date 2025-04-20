import { ExternalLink } from "../common";

interface AnchorProps {
	label: string;
	href: string;
}

export function Anchor({ label, href }: AnchorProps) {
	return <ExternalLink href={href}>{label}</ExternalLink>;
}

export function MultiAnchor({ anchors }: { anchors: AnchorProps[] }) {
	return (
		<>
			{anchors.map(({ label, href }) => (
				<ExternalLink key={href} href={href} css={{ display: "block" }}>
					{label}
					<div css={{ marginBottom: "8px" }} />
				</ExternalLink>
			))}
		</>
	);
}
