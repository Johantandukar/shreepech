"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.4, 1], [-10, 0, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    scaleDimensions().concat(scaleDimensions()[1]),
  );
  const translate = useTransform(scrollYProgress, [0, 0.4, 1], [0, -50, -50]);

  return (
    <div
      className="z-0 h-200 md:h-[240] flex items-center justify-center relative"
      ref={containerRef}
      {...props}
    >
      <div
        className="w-full"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ rotateX: rotate, scale }}
      className="max-w-sm mx-auto h-50 md:h-80 w-full"
    >
      <div className="h-full w-full overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};
