import { useEffect, useState } from "react";

export default function FloatingDock() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScroll(max > 0 ? window.scrollY / max : 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-dock">
      <div className="dock-status">
        <span className="pulse" />
        SYSTEM ONLINE
      </div>

      <div className="dock-progress">
        <div
          style={{
            transform: `scaleX(${scroll})`,
          }}
        />
      </div>

      <div className="dock-coordinates">
        Y {Math.round(scroll * 1000)
          .toString()
          .padStart(4, "0")}
      </div>
    </div>
  );
}