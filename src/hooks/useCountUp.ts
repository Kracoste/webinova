import { useEffect, useRef, useState } from "react";

type Options = {
  duration?: number;
};

/**
 * Smoothly animates a value from 0 to the target using requestAnimationFrame.
 */
export function useCountUp(target: number, options: Options = {}) {
  const { duration = 1200 } = options;
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const nextValue = Number((target * progress).toFixed(1));

      setValue(progress === 1 ? target : nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    let frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}
