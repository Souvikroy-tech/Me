import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursor.current || !follower.current) return;

      cursor.current.style.transform =
        `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      follower.current.animate(
        {
          transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)`,
        },
        {
          duration: 500,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursor} className="cursor" />
      <div ref={follower} className="cursor-follower" />
    </>
  );
}