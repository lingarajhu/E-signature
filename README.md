# E - Signature

This is a web-based application that allows users to sign the signature pad without logging in to this application user can also change the color of the pen and also adjust the font width.

This application allows user to complete the signature process less than 5s.

This application is built under `React` library and it is also a responsive which can run in all devieces.

To implement the signature pad I used `SignatureCanvas`.

## Installation

```sh
npm i -S react-signature-canvas
```

##Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";
import SignatureCanvas from "react-signature-canvas";

ReactDOM.render(
  <SignatureCanvas
    penColor="green"
    canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
  />,
  document.getElementById("react-container")
);
```

## Features

    - User can change the color
    - User can change the width of the signature
    - User can clear the signature if they don't like it.
    - User can Save and download the signature in jpg formate.

## Demo

In Mobiles

![Screenshot (56)](https://github.com/lingarajhu/E-signature/assets/159787794/d76abfeb-a21c-48da-8da1-f7e0938ec193)

In Laptops

![Screenshot (58)](https://github.com/lingarajhu/E-signature/assets/159787794/54763fc3-9cb7-432a-b9dc-407b954cd6b0)

![Screenshot (60)](https://github.com/lingarajhu/E-signature/assets/159787794/105877c0-07d7-4f33-80ba-6896d78dec94)
