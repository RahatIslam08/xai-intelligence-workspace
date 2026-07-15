"use client";

import Glow from "./Glow";

export default function NeuralNetwork() {
  return (
    <div
      className="
      absolute
      left-[38%]
      top-1/2
      -translate-y-1/2
      w-[520px]
      h-[520px]
      pointer-events-none
      z-0
      "
    >
      <Glow />
    </div>
  );
}