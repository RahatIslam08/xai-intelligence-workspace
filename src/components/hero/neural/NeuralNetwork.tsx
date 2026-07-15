"use client";

import Glow from "./Glow";
import Connection from "./Connection";
import Particle from "./Particle";

export default function NeuralNetwork() {
  return (
    <div className="relative h-[620px] w-[260px]">

      <Glow />

      <Connection />

      <Particle
        x={15}
        y={300}
      />

      <Particle
        x={165}
        y={170}
      />

      <Particle
        x={250}
        y={30}
      />

      <Particle
        x={170}
        y={420}
      />

      <Particle
        x={250}
        y={590}
      />

    </div>
  );
}