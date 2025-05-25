"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  // Prevent scroll when canScroll is false
  useEffect(() => {
    if (!canScroll) {
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [canScroll]);

  // Handle scroll attempt: fade overlay in on first scroll down
  useEffect(() => {
    const handleFirstScroll = () => {
      if (canScroll) return;

      gsap.to(overlayRef.current, {
        duration: 1.5,
        opacity: 1,
        onComplete: () => {
          setCanScroll(true);
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

          if (videoRef.current) {
            videoRef.current.pause();
          }
        },
      });

      window.removeEventListener("wheel", onWheelScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };

    const onWheelScroll = (e) => {
      const delta = e.deltaY || -e.wheelDelta || e.detail;
      if (delta > 0) {
        handleFirstScroll();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 20) {
        handleFirstScroll();
      }
    };

    window.addEventListener("wheel", onWheelScroll, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheelScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [canScroll]);

  // Detect scroll back to top and resume video
  useEffect(() => {
    const onWindowScroll = () => {
      if (window.scrollY === 0 && canScroll) {
        setCanScroll(false);
        gsap.to(overlayRef.current, { duration: 0.5, opacity: 0.85 });

        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [canScroll]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://videos.pexels.com/video-files/9694443/9694443-hd_1920_1080_25fps.mp4"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: 0.85, pointerEvents: "none" }}
      />

      <div className="relative z-20 flex flex-col gap-y-4 items-center justify-center h-full text-white">
        <h2 className="text-xl lg:text-3xl">Tomilayo Ijarotimi</h2>
        <p className="text-lg">Frontend Developer</p>
      </div>
    </div>
  );
};

export default HeroSection;
