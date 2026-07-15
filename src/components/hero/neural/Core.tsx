"use client";

export default function Core() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      {/* Outer Glow */}
      <div
        className="
          absolute
          inset-0
          h-20
          w-20
          -translate-x-4
          -translate-y-4
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* Ring */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-cyan-300/60
          bg-cyan-400/10
          backdrop-blur-xl
        "
      >
        {/* Inner Circle */}
        <div
          className="
            h-5
            w-5
            rounded-full
            bg-cyan-300
            shadow-[0_0_30px_#22d3ee]
          "
        />
      </div>
    </div>
  );
}