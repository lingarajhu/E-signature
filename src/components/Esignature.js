import React, { useState } from "react";
import Setup from "./Setup";
import SignaturePad from "./SignaturePad";

const Esignature = () => {
  const [color, setColor] = useState("red");
  const [font, setFont] = useState("");

  return (
    <div className="relative p-1">
      <div className="my-3 md:my-4">
        <h1 className="text-lg md:text-3xl py-5 px-7 md:py-5 text-center font-semibold md:font-bold">
          Welcome to E-Signatuer Please sign below
        </h1>
        <div>
          <Setup
            color={color}
            setColor={setColor}
            font={font}
            setFont={setFont}
          />
          <SignaturePad color={color} font={font} />
        </div>
      </div>
    </div>
  );
};

export default Esignature;
