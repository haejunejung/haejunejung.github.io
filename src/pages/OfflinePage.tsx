import { Text } from "@/components";

export function OfflinePage() {
  return (
    <div
      css={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "0 auto",
      }}
    >
      <Text size="headline0" fontWeight="bold">
        네트워크 연결 상태를 확인해주세요.
      </Text>
    </div>
  );
}
