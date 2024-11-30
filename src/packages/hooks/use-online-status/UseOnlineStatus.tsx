import { useOnlineStatus } from ".";

export const UseOnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return <p>{isOnline ? "✅ Online" : "'❌ Disconnected"}</p>;
};
