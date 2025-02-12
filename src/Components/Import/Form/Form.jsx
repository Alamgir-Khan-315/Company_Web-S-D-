import React, { useState } from "react";
import Details from "./Detail";
import Forwarder from "./Forwarder";
import { Link } from "react-router-dom";

const Form = () => {
  const [Data, setData] = useState("");

  const handleChildData = (data) => {
    setData(data);
  };

  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>
        &nbsp; / &nbsp;
        <Link to="/Import">
          <h1 className="text hover:text-black cursor-pointer">Import</h1>
        </Link>
        &nbsp; / &nbsp;
        <h1 className="text-black cursor-pointer">Import Form</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <div className="title">
          <h1 className="heading">Import Form</h1>
        </div>

        <div>
          <Details
            className="container mx-auto"
            sendDataToParent={handleChildData}
          />

          <Forwarder
            className="container mx-auto"
            sendDataToParent={handleChildData}
          />

          <div className="btn md:w-[90%] mx-auto flex gap-3 mb-5">
            <div className={`btn_blue text-white !cursor-not-allowed`}>
              Save
            </div>
            <div className="btn_blue text-white">Edit</div>
            <div className="btn_blue text-white">Update</div>
            <div className="btn_blue text-white">Cancle</div>
            <div className="btn_gray">Export</div>
          </div>

          <pre className="mt-4 p-2 bg-gray-100 rounded">
            {JSON.stringify(Data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Form;
