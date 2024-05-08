import { PortfolioInformation } from "@/widgets/PortfolioInformation";
import { RippleBackground } from "@/widgets/RippleBackground";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <PortfolioInformation />
      <RippleBackground />
    </Fragment>
  );
}
