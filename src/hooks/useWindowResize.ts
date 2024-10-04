import { useState, useLayoutEffect } from "react";

const useWindowResize = () => {
  const [size, setSize] = useState<number[]>([0, 0]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
export default useWindowResize;