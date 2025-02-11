import React, { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    input_bar: "",
    order: "",
    bail_date: "",
    transfer_order: "",
    order_item: "",
    item_transfer: "",
    remarks: "",
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
        <h2 className="label">Input Bar :</h2>
        <input
          className="input"
          type="text"
          name="input_bar"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Order :</h2>
        <input
          className="input"
          type="text"
          name="order"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Bail Date :</h2>
        <input
          className="input"
          type="text"
          name="bail_date"
          onChange={handleInputData}
          disabled
        />
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Transfer Order :</h2>
        <select
          className="input text-sm"
          name="transfer_order"
          onChange={handleInputData}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Order Item :</h2>
        <select
          className="input text-sm"
          name="order_item"
          onChange={handleInputData}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Item Transfer :</h2>
        <select
          className="input text-sm"
          name="item_transfer"
          onChange={handleInputData}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Remarks :</h2>
        <input
          className="input"
          type="text"
          name="remarks"
          onChange={handleInputData}
        />
      </div>
    </div>
  );
};

export default Form;
