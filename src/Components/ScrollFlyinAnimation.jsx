import { useState, useEffect } from "react";
import "./button.scss"; // Import CSS for styling

function ScrollFlyInAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const triggerOffset = window.innerHeight * 0.7; // Adjust as needed

      if (yOffset > triggerOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fly-in ${isVisible ? "visible" : ""}`}>
      <h1>This element will fly in when scrolled</h1>
    </div>
  );
}

export default ScrollFlyInAnimation;
