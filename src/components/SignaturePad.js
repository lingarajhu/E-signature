import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ color, font }) => {
  const [signature, setSignature] = useState("");
  const [finalSign, setFinalSign] = useState(null);

  const clearSignature = () => {
    signature.clear();
  };

  const handelSave = () => {
    const image = signature.getTrimmedCanvas().toDataURL("image/jpg");
    setFinalSign(image);
  };

  const downloadImage = () => {
    // Remove the data URL prefix if it exists
    // const base64Data = finalSign.replace(/^data:image\/\w+;base64,/, "");
    const base64Data = finalSign.split(",");

    // Create a Blob from the base64 string
    const blob = new Blob([Buffer.from(base64Data[1], "base64")], {
      type: "image/png",
    });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "signature.png");

    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="w-10/12 md:w-7/12 right-0 left-0 my-2 mx-auto p-3 border rounded-lg">
        <div className="overflow-hidden">
          <SignatureCanvas
            minWidth={font}
            penColor={color}
            ref={(ref) => setSignature(ref)}
            canvasProps={{ width: 750, height: 300, className: "sigCanvas" }}
          />
        </div>
      </div>
      <div className="md:flex md:justify-between grid grid-flow-col w-10/12 gap-1 text-center md:gap-0 md:w-7/12 right-0 left-0 mx-auto md:mx-auto p-1 ">
        <div
          onClick={clearSignature}
          className="border border-b-[4px] my-0 cursor-pointer active:scale-95 rounded-lg py-1 px-2 "
        >
          Clear
        </div>
        <div
          onClick={handelSave}
          className="border border-b-[4px] my-0 cursor-pointer active:scale-95 rounded-lg py-1 px-2 "
        >
          Save
        </div>
        {finalSign ? (
          <div
            className="border border-b-[4px] my-0 cursor-pointer active:scale-95 rounded-lg py-1 px-2 "
            onClick={downloadImage}
          >
            Download
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SignaturePad;
