import React, { useEffect, useState } from "react";

const Forwarder = ({ sendDataToParent }) => {
  const [Data2, setData2] = useState({
    clearing_agent: "",
    charges: "",
    supplier: "",
    discount: "",
    forwarder: "",
    clothing_amount: "",
    invoice_date: "",
    invoice_num: "",
    freight_charges: "",
    truck_charges: "",
    value: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData2({ ...Data2, [name]: value });
  }

  useEffect(() => {
    sendDataToParent(Data2);
  }, [Data2]);

  return (
    <div className="Title">
      <h2 className="Rounded_Title">Forwarded</h2>
      <div className="form-body grid md:grid-cols-2 place-items-center p-3">
        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Clearing Agent :</h2>
          <select
            className="input text-sm"
            name="clearing_agent"
            onChange={handleInputData}
            id=""
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Charges :</h2>
          <input
            className="input"
            type="text"
            name="charges"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Supplier :</h2>
          <select
            className="input text-sm"
            name="supplier"
            onChange={handleInputData}
            id=""
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Discount :</h2>
          <input
            className="input"
            type="number"
            name="discount"
            onChange={handleInputData}
          />
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Forwarder :</h2>
          <select
            className="input text-sm"
            name="forwarder"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Clothing Amoount :</h2>
          <input
            className="input sm:ml-5 md:m-0"
            type="number"
            name="clothing_amount"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Invoice Date :</h2>
          <input
            className="input sm:ml-5 md:m-0"
            type="number"
            name="invoice_date"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Invoice # :</h2>
          <input
            className="input sm:ml-5 md:m-0"
            type="number"
            name="invoice_num"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Freight Charges :</h2>
          <input
            className="input sm:ml-5 md:m-0"
            type="number"
            name="freight_charges"
            onChange={handleInputData}
          />
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Truck Charges :</h2>
          <input
            className="input"
            type="number"
            name="truck_charges"
            onChange={handleInputData}
          />
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label sm:ml-5 md:m-0">Value :</h2>
          <input
            className="input ml-5 md:m-0"
            type="number"
            name="value"
            onChange={handleInputData}
          />
        </div>
      </div>
    </div>
  );
};

export default Forwarder;
