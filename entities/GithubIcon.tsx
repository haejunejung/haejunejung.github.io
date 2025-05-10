import { ExternalLink } from "@/components/common";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function GithubIcon() {
	return (
		<ExternalLink href="https://github.com/haejunejung">
			<SiGithub size={24} />
		</ExternalLink>
	);
}
