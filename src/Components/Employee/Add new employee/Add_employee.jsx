import React, { useState } from "react";
import { Link } from "react-router-dom";
import Add_form from "./Add_form";

const Add_employee = () => {
  const [Data, setData] = useState("");

  const handleChildData = (data) => {
    setData(data);
  };

  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>{" "}
        &nbsp; / &nbsp; <h1 className="text-black cursor-pointer">Add Employee</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <div className="title">
          <h1 className="heading">Add New Employee</h1>
        </div>
        <Add_form sendDataToParent={handleChildData} />
      </div>

      <pre className="mt-4 p-2 bg-gray-100 rounded">{JSON.stringify(Data, null, 2)}</pre>
    </div>
  );
};

export default Add_employee;
