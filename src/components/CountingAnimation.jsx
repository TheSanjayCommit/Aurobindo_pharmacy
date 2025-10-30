import React, { useState, useEffect, useRef } from 'react';

const CountingAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Parse the end value to handle numbers with commas
      const endValue = typeof end === 'string' 
        ? parseInt(end.replace(/,/g, '').replace(/\+/g, ''))
        : end;

      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  // Format the count with commas if the original end had commas
  const formatCount = (num) => {
    if (typeof end === 'string' && end.includes(',')) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <span ref={ref}>
      {formatCount(count)}{suffix}
    </span>
  );
};

export default CountingAnimation;
