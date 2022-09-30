import { useState, useEffect } from "react";

const useNavBar = () => {
  const [height, setHeight] = useState("12vh");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setHeight("10vh");
        setOpacity(0.9);
      }

      if (
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        setHeight("12vh");
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return {
    height,
    opacity,
  };
};

export default useNavBar;
