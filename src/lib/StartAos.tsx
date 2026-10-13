// "use client"; ensures this file is only executed on the client side
"use client";

import { useEffect } from "react";
import AOS from "aos";

// Initialize AOS only after component mounts
export default function StartAOS() {
  useEffect(() => {
    AOS.init({
      once: true, // Initialize only once per element
    });
  }, []); // Empty dependency array ensures it runs once after the first render
  return null; // No need to render anything
}
