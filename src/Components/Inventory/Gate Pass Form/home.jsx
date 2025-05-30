import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "./Form";
import Form2 from "./Form2";

const Home = () => {
  const [Data, setData] = useState("");

  const handleChildData = (data) => {
    setData(data);
  };

  return (
    <div className="main h-full w-full bg-gray-200">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>
        &nbsp; / &nbsp;
        <Link to="/Import">
          <h1 className="text hover:text-black cursor-pointer">Inventory</h1>
        </Link>
        &nbsp; / &nbsp;
        <h1 className="text-black cursor-pointer">Gate Pass Form</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <h1 className="Rounded_Title">Gate Pass Form</h1>

        <Form sendDataToParent={handleChildData} />

        <div className="btn md:w-[90%] mx-auto flex flex-wrap gap-3 -mt-5 gap-y-0 mb-5">
          <div className="btn_blue">Submit</div>
        </div>

        <Form2 />

        {/* <div className="btn md:w-[90%] mx-auto flex flex-wrap gap-3 gap-y-0 mb-5">
          <div className="btn_blue">Add</div>
        </div>

        <Table TableData={Data.form2Data} /> */}
      </div>

      <pre className="mt-4 p-2 bg-gray-100 rounded">
        {JSON.stringify(Data, null, 2)}
      </pre>
    </div>
  );
};

export default Home;
