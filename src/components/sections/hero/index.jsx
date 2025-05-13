"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// GSAP Hover Hook
const useHoverEffect = (ref, baseColor = "#065f46", hoverColor = "#00ff90") => {
  useEffect(() => {
    if (!ref.current) return;

    const spans = ref.current.querySelectorAll("span");

    spans.forEach((span) => {
      // Color is already set inline, so we skip setting it here

      const onEnter = () =>
        gsap.to(span, { color: hoverColor, duration: 0.05, ease: "none" });

      const onLeave = () =>
        gsap.to(span, { color: baseColor, duration: 0.05, ease: "none" });

      span.addEventListener("pointerenter", onEnter);
      span.addEventListener("pointerleave", onLeave);

      return () => {
        span.removeEventListener("pointerenter", onEnter);
        span.removeEventListener("pointerleave", onLeave);
      };
    });
  }, [ref]);
};

// Text Splitter with Initial Style
const splitText = (text, baseColor = "#065f46") =>
  text.split("").map((char, idx) => (
    <span
      key={idx}
      className="inline-block"
      style={{ color: baseColor, transition: "none" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const HeroSection = () => {
  const designerRef = useRef(null);
  const developerRef = useRef(null);

  useHoverEffect(designerRef);
  useHoverEffect(developerRef);

  return (
    <div className="flex justify-center my-35 px-35">
      <div className="text-center">
        <h2 className="text-9xl font-bold">
          Tomilayo is a <br />
          <span ref={designerRef}>{splitText("web designer")}</span>
          <br /> and{" "}
          <span ref={developerRef}>{splitText("front-end developer.")}</span>
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
