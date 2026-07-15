"use client";

import Glow from "./Glow";
import Core from "./Core";
import Nodes from "./Nodes";
import Connections from "./Connections";
import MainBeam from "./MainBeam";

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0">

    <Glow />

<MainBeam />

<Connections />

<Nodes />

<Core />

    </div>
  );
}