import { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    dc_id: "",
    customer: "",
    item_name: "",
    qty: "",
    weight: "",
    date: "",
    type: "",
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
      <div className="w-[90%] mx-auto col-span-2">
        <div className="name flex w-fit items-center gap-5 p-2">
          <h2 className="label">DC ID :</h2>
          <input
            className="input"
            type="text"
            name="dc_id"
            disabled
            onChange={handleInputData}
          />
        </div>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Customer :</h2>
        <select
          className="input text-sm"
          id=""
          name="customer"
          onChange={handleInputData}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Item Name :</h2>
        <select
          className="input text-sm"
          id=""
          name="item_name"
          onChange={handleInputData}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="name flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Qty :</h2>
        <input
          className="input"
          type="text"
          name="qty"
          onChange={handleInputData}
        />
      </div>

      <div className="name flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Weight :</h2>
        <input
          className="input"
          type="number"
          name="weight"
          onChange={handleInputData}
        />
      </div>

      <div className="name flex w-[80%] items-center gap-5 p-2">
        <h2 className="label">Date :</h2>
        <input
          className="input"
          type="date"
          name="date"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Type :</h2>
        <select
          className="input text-sm"
          id=""
          name="type"
          onChange={handleInputData}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Remarks :</h2>
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
