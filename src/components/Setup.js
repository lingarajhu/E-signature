import React from "react";

const Setup = ({ color, font, setColor, setFont }) => {
  const handelColorChange = (e) => {
    setColor(e.target.value);
  };

  const handelFontSize = (e) => {
    setFont(e.target.value);
  };

  return (
    <div>
      <div className="w-10/12 md:w-7/12 flex justify-between right-0 left-0 mx-auto border-b-2 rounded-lg">
        <div className="grid m-2 gap-2 md:p-2">
          <label className="mx-0 text-white text-sm md:text-base">
            Select the Pen color
          </label>
          <div className="flex gap-3 items-center">
            <select
              className="p-1 bg-gray-900/65 text-white text-sm md:text-lg w-14 md:w-24 border rounded-md"
              id="color"
              name="color"
              onChange={(e) => handelColorChange(e)}
            >
              <option key="red" value="red">
                Red
              </option>
              <option key="green" value="green">
                Green
              </option>
              <option key="black" value="black">
                Black
              </option>
              <option key="blue" value="blue">
                Blue
              </option>
            </select>
            <div
              style={{
                width: "15px",
                height: "15px",
                background: `${color}`,
                borderRadius: "50%",
                boxShadow: "0 0 0 .1rem white",
              }}
            ></div>
          </div>
        </div>
        <div className="grid m-2 p-2 gap-2">
          <label className="text-white text-sm md:text-base">Font Size</label>
          <input
            className=" py-1 px-2 text-white bg-gray-900/65 rounded-full w-20 md:w-28 mx-0"
            type="text"
            placeholder="0.2 - 1"
            backgroundcolor="rgba(255, 255, 255, 1)"
            required
            value={font}
            onChange={(e) => handelFontSize(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Setup;
