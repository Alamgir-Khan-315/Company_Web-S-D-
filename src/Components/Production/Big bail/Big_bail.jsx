import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const Big_bail = () => {
  const [Data, setData] = useState("");

  const handleChildData = (data) => {
    setData(data);
  };

  const handleSaveToServer = () => {
    alert(Data.order_id);
  };

  return (
    <div>
      <div className="main h-full w-full">
        <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
          <Link to="/">
            <h1 className="text hover:text-black cursor-pointer">Home</h1>
          </Link>{" "}
          &nbsp; / &nbsp;{" "}
          <h1 className="text-black cursor-pointer">Big Bail</h1>
        </div>

        <div className="box mt-[1rem] !p-[1rem]">
          <h2 className="Rounded_Title">Big Bail</h2>
          <div className="form">
            <Form sendDataToParent={handleChildData} />
          </div>

          <div className="btn md:w-[90%] mx-auto flex -mt-5 gap-3 mb-5">
            <div className="btn_blue" onClick={handleSaveToServer}>
              Submit
            </div>
          </div>

          <div className="weight flex mx-auto items-center gap-5 p-2">
            <h2 className="label">Input Barcode :</h2>
            <input className="input" type="number" name="barcode" />
          </div>
        </div>
      </div>
      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(Data, null, 2)}
      </pre>
    </div>
  );
};

export default Big_bail;
