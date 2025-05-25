"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const [shouldHide, setShouldHide] = useState(true); // Default to true

  useEffect(() => {
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isLoading = document.body.classList.contains("loading");

    // Hide on mobile or while loading
    setShouldHide(isMobile || isLoading);

    // When loading ends, re-check and possibly show
    const observer = new MutationObserver(() => {
      const loading = document.body.classList.contains("loading");
      if (!loading && !isMobile) {
        setShouldHide(false);
        observer.disconnect(); // Stop watching
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldHide) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      const speed = 0.15;
      position.current.x += (mouse.current.x - position.current.x) * speed;
      position.current.y += (mouse.current.y - position.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [shouldHide]);

  if (shouldHide) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 rounded-full bg-green-500 mix-blend-difference"
    />
  );
};

export default CustomCursor;
