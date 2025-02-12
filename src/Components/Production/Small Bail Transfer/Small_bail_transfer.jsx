import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";

const Small_bail_transfer = () => {
  const [Data, setData] = useState("");
  const [Barcode, setBarcode] = useState();

  const handleChildData = (data) => {
    setData(data);
  };

  const currentDate = new Date();
  const DateNow = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>{" "}
        &nbsp; / &nbsp;{" "}
        <h1 className="text-black cursor-pointer">Small Bail Transfer</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <h2 className="Rounded_Title mb-4">Small Bail Transfer</h2>

        <h2 className="md:ml-[80%] font-semibold">Date : {DateNow}</h2>

        <Form sendDataToParent={handleChildData} />

        <div className="btn md:w-[90%] mx-auto flex items-center gap-5 -mt-3">
          <div className="btn_blue">Order Transfer</div>
          <div className="btn_blue">Delete</div>
          <div className="btn_blue">Item Transfer</div>
        </div>

        <div className="barcode my-5">
          <div className="weight flex items-center gap-5 p-2">
            <h2 className="label">Input Barcode :</h2>
            <input
              className="input"
              type="text"
              name="barcode"
              onChange={(e) => setBarcode(e.target.value)}
            />
          </div>

          {Barcode}
        </div>
      </div>

      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(Data, null, 2)}
      </pre>
    </div>
  );
};

export default Small_bail_transfer;
