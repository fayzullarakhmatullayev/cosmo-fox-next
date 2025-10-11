import { useCallback, useEffect, useRef, useState } from "react";

interface NetworkConnection extends EventTarget {
  readonly effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  readonly saveData?: boolean;
  readonly downlink?: number;
  readonly rtt?: number;
  readonly type?: "bluetooth" | "cellular" | "ethernet" | "wifi" | "wimax" | "none" | "other" | "unknown";
}

declare global {
  interface Navigator {
    connection?: NetworkConnection;
  }
}

type ConnectionType = "slow-2g" | "2g" | "3g" | "slow-4g" | "4g" | "unknown";

interface UseConnectionSpeedReturn {
  isSlowConnection: boolean;
  connectionType: ConnectionType;
  isLoading: boolean;
  testSpeed: () => Promise<number>;
}

export const useConnectionSpeed = (): UseConnectionSpeedReturn => {
  const [isSlowConnection, setIsSlowConnection] = useState<boolean>(false);
  const [connectionType, setConnectionType] = useState<ConnectionType>("unknown");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const slowConnections = useRef<ConnectionType[]>(["slow-2g", "2g", "3g", "slow-4g"]);

  const testSpeed = useCallback(async (): Promise<number> => {
    try {
      const startTime = performance.now();

      // Test with favicon or small resource
      const response = await fetch(`/favicon.ico?${Math.random()}`, {
        cache: "no-cache",
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.blob();
      const endTime = performance.now();

      const duration = endTime - startTime; // milliseconds
      const estimatedSizeKB = 4; // Approximate favicon size
      const speedKbps = (estimatedSizeKB * 8) / (duration / 1000); // Kilobits per second

      // Update connection status based on speed test
      setIsSlowConnection(speedKbps < 500); // Consider < 500 Kbps as slow

      return speedKbps;
    } catch (error) {
      console.warn("Speed test failed:", error);
      // Default to slow connection on error
      setIsSlowConnection(true);
      return 0;
    }
  }, []);

  useEffect(() => {
    if ("connection" in navigator && navigator.connection) {
      const connection = navigator.connection;
      setConnectionType(connection.effectiveType || "unknown");

      const isSlow =
        slowConnections.current.includes(connection.effectiveType as ConnectionType) || Boolean(connection.saveData);
      setIsSlowConnection(isSlow);

      const handleConnectionChange = (): void => {
        if (connection.effectiveType) {
          setConnectionType(connection.effectiveType);
          const isSlow =
            slowConnections.current.includes(connection.effectiveType as ConnectionType) || Boolean(connection.saveData);
          setIsSlowConnection(isSlow);
        }
      };

      connection.addEventListener("change", handleConnectionChange);

      setIsLoading(false);

      // Cleanup function for component unmount
      return () => {
        connection.removeEventListener("change", handleConnectionChange);
      };
    } else {
      // Fallback: assume fast connection if API not available
      setIsSlowConnection(false);
      setConnectionType("unknown");
      setIsLoading(false);
    }
  }, []);

  return {
    isSlowConnection,
    connectionType,
    isLoading,
    testSpeed
  };
};
