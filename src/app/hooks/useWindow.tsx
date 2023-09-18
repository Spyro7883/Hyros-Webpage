import { useState, useEffect } from "react";

type WindowWidthType = number | undefined;

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<WindowWidthType>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
}
