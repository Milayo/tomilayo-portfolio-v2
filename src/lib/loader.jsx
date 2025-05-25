"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const percentageRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("loading");

    const count = { val: 0 };
    gsap.to(count, {
      val: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (percentageRef.current) {
          percentageRef.current.textContent = `${Math.floor(count.val)}%`;
        }
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setIsLoading(false);
            document.body.classList.remove("loading");
          },
        });
      },
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      <span ref={percentageRef} className="text-6xl font-bold text-green-800">
        0%
      </span>
    </div>
  );
}
