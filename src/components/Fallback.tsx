import { LoadingSpinner, Overlay } from "@/packages/components";

export default function Fallback() {
  return (
    <Overlay>
      <LoadingSpinner />
    </Overlay>
  );
}
