import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const Small_bail = () => {
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
          </Link>
          &nbsp; / &nbsp;
          <h1 className="text-black cursor-pointer">Small Bail Form</h1>
        </div>

        <div className="box mt-[1rem] !p-[1rem]">
          <h2 className="Rounded_Title">Small Bail</h2>
          <div className="form">
            <Form sendDataToParent={handleChildData} />
          </div>

          <div className="btn md:w-[90%] mx-auto flex flex-wrap -mt-5 gap-3 gap-y-0 mb-5">
            <div className="btn_blue" onClick={handleSaveToServer}>
              Gen
            </div>
            <div className={`btn_blue`}>Sogo</div>
            <div className="btn_blue">SD</div>
            <div className="btn_blue">Cream</div>
            <div className="btn_blue">Liberty</div>
            <div className="btn_blue">40 Kg</div>
            <div className="btn_blue">Apple</div>
            <div className="btn_blue">Virtual</div>
          </div>

          <div className="table w-full bg-red-100">Yha table bny g</div>
        </div>
      </div>
      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(Data, null, 2)}
      </pre>
    </div>
  );
};

export default Small_bail;
