import React, { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    level_1: "",
    level_2: "",
    level_3: "",
    level_4: "",
    level_name: "",
    opening_value: "",
    opening_date: ""
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  useEffect(() => {
    sendDataToParent(Data);
  }, [Data]);

  return (
    <div className="form-body grid md:grid-cols-2 place-items-center p-3">
        <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Level 1 :</h2>
        <select
          className="input text-sm"
          name="level_1"
          onChange={handleInputData}
        >
          <option> </option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

       <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Level 2 :</h2>
        <select
          className="input text-sm"
          name="level_2"
          onChange={handleInputData}
        >
          <option>Select Number</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Level 3 :</h2>
        <select
          className="input text-sm"
          name="level_3"
          onChange={handleInputData}
        >
          <option>Select Number</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Level 4 :</h2>
        <select
          className="input text-sm"
          name="level_4"
          onChange={handleInputData}
        >
          <option>Select Number</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Level Name :</h2>
        <input
          className="input"
          type="text"
          name="level_name"
          onChange={handleInputData}
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Opening Value :</h2>
        <input
          className="input"
          type="text"
          name="opening_value"
          onChange={handleInputData}
        />
      </div>

    

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Opening Date :</h2>
        <input
          className="input"
          type="date"
          name="opening_date"
          onChange={handleInputData}
        />
      </div>


    </div>
  );
};

export default Form;
