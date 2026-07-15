"use client";

import Connection from "./Connection";

const paths = [
  "M50 8 Q41 13 32 18",
  "M50 8 Q59 13 68 18",

  "M32 18 Q27 26 22 34",
  "M68 18 Q73 26 78 34",

  "M22 34 Q35 35 50 36",
  "M50 36 Q65 35 78 34",

  "M50 36 Q42 44 34 52",
  "M50 36 Q58 44 66 52",

  "M34 52 Q26 60 18 70",
  "M66 52 Q74 60 82 70",

  "M18 70 Q34 78 50 84",
  "M82 70 Q66 78 50 84",
];

export default function Connections() {
  return (
    <>
      {paths.map((path, index) => (
        <Connection
          key={index}
          d={path}
        />
      ))}
    </>
  );
}