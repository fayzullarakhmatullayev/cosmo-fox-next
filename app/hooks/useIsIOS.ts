import { useMemo } from "react";

export const useIsIOS = (): boolean => {
  const isIOS = useMemo(() => {
    if (typeof navigator === "undefined") {
      return false;
    }
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  }, []);

  return isIOS;
};
