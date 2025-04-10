import React, { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    id: "",
    ref_no_select: "",
    container_weight_s: "",
    total_bale: "",
    qty: "",
    issued_weight: "",
    issued_bales: "",
    weight: "",
    pending_weight: "",
    remain_bales: "",
    belt: "",
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
      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">ID :</h2>
        <input
          className="input"
          type="text"
          name="id"
          onChange={handleInputData}
        />
      </div>

       <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Ref_No Search :</h2>
        <select
          className="input text-sm"
          name="ref_no_select"
          onChange={handleInputData}
        >
          <option>Select Number</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Container Weight :s</h2>
        <input
          className="input"
          type="text"
          name="container_weight_s"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Total Bail :</h2>
        <input
          className="input"
          type="text"
          name="total_bail"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Qty :</h2>
        <input
          className="input"
          type="text"
          name="qty"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Issued weight :</h2>
        <input
          className="input"
          type="text"
          name="issued_weight"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Issued Bales :</h2>
        <input
          className="input"
          type="text"
          name="issued_bales"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Weight :</h2>
        <input
          className="input"
          type="text"
          name="weight"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Pending Weight :</h2>
        <input
          className="input"
          type="text"
          name="pending_weight"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Remain Bales :</h2>
        <input
          className="input"
          type="text"
          name="remain_bales"
          onChange={handleInputData}
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Belt :</h2>
        <select
          className="input text-sm"
          name="belt"
          onChange={handleInputData}
        >
          <option>Select Number</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

    </div>
  );
};

export default Form;
