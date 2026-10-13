"use client";
import React, { useMemo } from "react";

interface CircularTextProps {
  text?: string;
  radius?: number;
  fontSize?: number;
  color?: string;
}

interface TextData {
  finalizedText: string;
  letterSpacing: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text = "CREATIVE • AGENCY • DESIGN • ",
  radius = 70,
  fontSize = 15,
  color = "black",
}) => {
  // Calculate circumference (2 * PI * r)
  const circumference = 2 * Math.PI * radius;

  const { finalizedText, letterSpacing }: TextData = useMemo(() => {
    let repeatedText = text.endsWith(" ") ? text : `${text} `;

    // Repeat text if it's too short to cover the circumference
    // Mono fonts are roughly 0.5 - 0.6 of fontSize in width
    while (repeatedText.length * (fontSize * 0.5) < circumference * 0.8) {
      repeatedText += text.endsWith(" ") ? text : `${text} `;
    }

    const estimatedWidth = repeatedText.length * (fontSize * 0.5);
    const extraSpace = (circumference - estimatedWidth) / repeatedText.length;

    return {
      finalizedText: repeatedText,
      letterSpacing: `${extraSpace / fontSize}em`,
    };
  }, [text, circumference, fontSize]);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center animate-spin-slow">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <path
            id="dynamicCirclePath"
            d={`M 100, 100 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill={color}
          className="font-mono font-bold uppercase"
          style={{
            fontSize: `${fontSize}px`,
            letterSpacing: letterSpacing,
          }}
        >
          <textPath
            href="#dynamicCirclePath"
            xlinkHref="#dynamicCirclePath"
            textLength={circumference}
            lengthAdjust="spacing"
          >
            {finalizedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
