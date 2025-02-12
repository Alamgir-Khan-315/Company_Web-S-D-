import React, { useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Detail";
import Entitlement from "./Entitlement";

export default function Employee_form() {
  const [Data, setData] = useState("");

  const handleChildData = (data) => {
    setData(data);
  };

  const handleSaveToServer = () => {
    alert(Data.id || Data.ot);
  };

  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>{" "}
        &nbsp; / &nbsp;{" "}
        <h1 className="text-black cursor-pointer">Employee form</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <h2 className="Rounded_Title">Employee Form</h2>

        <Details sendDataToParent={handleChildData} />

        <h2 className="Rounded_Title">Entitlement</h2>
        <Entitlement sendDataToParent={handleChildData} />

        <div className="btn md:w-[90%] mx-auto flex gap-3 mb-5">
          <div className="btn_blue text-white" onClick={handleSaveToServer}>
            New
          </div>
          <div className={`btn_blue !cursor-not-allowed`}>Save</div>
          <div className="btn_blue">Edit</div>
          <div className="btn_blue">Update</div>
          <div className="btn_blue">Cancle</div>
          <div className="btn_gray">Export</div>
        </div>

        <pre className="mt-4 p-2 bg-gray-100 rounded">
          {JSON.stringify(Data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
