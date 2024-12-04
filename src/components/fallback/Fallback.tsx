import { LoadingSpinner } from "../ui";

export function Fallback() {
  return (
    <div
      css={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "0 auto",
      }}
    >
      <LoadingSpinner />
    </div>
  );
}
