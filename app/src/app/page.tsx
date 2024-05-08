import { Cursor } from "@/widgets/Cursor";
import { PortfolioInformation } from "@/widgets/PortfolioInformation";
import { RippleBackground } from "@/widgets/RippleBackground";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Cursor />
      <PortfolioInformation />
      <RippleBackground />
    </Fragment>
  );
}
