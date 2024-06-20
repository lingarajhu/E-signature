import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ color, font }) => {
  const [signature, setSignature] = useState("");
  const [finalSign, setFinalSign] = useState(null);
  const [url, setUrl] = useState(null);

  const clearSignature = () => {
    signature.clear();
  };

  const handelSave = () => {
    const image = signature.getTrimmedCanvas().toDataURL("image/jpg");
    console.log(image);
    setFinalSign(image);
  };

  const downloadImage = () => {
    const base64String = "data:image/jpg;base64," + finalSign;
    const base64Data = base64String.split(",")[1];
    const binaryString = window.btoa(base64Data);

    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/jpg" });
    const imageLink = URL.createObjectURL(blob);
    setUrl(imageLink);
  };

  const handelClick = () => {
    // url && window.open(url, "_blank");
    console.log(url);
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
      <div className="flex justify-between w-10/12 gap-1 md:gap-0 md:w-7/12 right-0 left-0 my-2 mx-auto md:mx-auto p-1 ">
        <button
          onClick={clearSignature}
          className="border rounded-lg py-1 px-4 "
        >
          Clear
        </button>
        <button onClick={handelSave} className="border rounded-lg py-1 px-4 ">
          Save
        </button>
        {finalSign ? (
          <a
            className="border rounded-lg py-1 px-1 cursor-pointer"
            href={url}
            onClick={downloadImage}
          >
            <span onClick={handelClick}>Download</span>
          </a>
        ) : null}
      </div>
    </>
  );
};

export default SignaturePad;
