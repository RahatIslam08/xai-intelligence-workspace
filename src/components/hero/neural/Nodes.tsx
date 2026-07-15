"use client";

import Particle from "./Particle";

const nodes = [
  // Top
  { x: 50, y: 8, size: 8 },

  // Upper left
  { x: 32, y: 18, size: 6 },
  { x: 68, y: 18, size: 6 },

  // Middle
  { x: 22, y: 34, size: 7 },
  { x: 50, y: 36, size: 10 },
  { x: 78, y: 34, size: 7 },

  // Lower middle
  { x: 34, y: 52, size: 6 },
  { x: 66, y: 52, size: 6 },

  // Lower
  { x: 18, y: 70, size: 7 },
  { x: 82, y: 70, size: 7 },

  // Bottom
  { x: 50, y: 84, size: 6 },
];

export default function Nodes() {
  return (
    <>
      {nodes.map((node, index) => (
        <Particle
          key={index}
          x={node.x}
          y={node.y}
          size={node.size}
        />
      ))}
    </>
  );
}