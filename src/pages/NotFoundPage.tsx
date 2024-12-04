import { Text } from "@/components";
import { Link } from "react-router-dom";

export function NotFoundPage() {
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
        페이지를 찾을 수 없습니다.
      </Text>
      <Link
        to="/"
        css={{
          display: "inline-block",
          textDecoration: "none",
          color: "white",
          backgroundColor: "var(--color-red)",
          borderRadius: "var(--radius2)",
          padding: "var(--spacing4)",
        }}
      >
        홈으로 이동
      </Link>
    </div>
  );
}
