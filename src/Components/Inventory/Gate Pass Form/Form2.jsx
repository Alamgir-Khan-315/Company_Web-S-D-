import React, { useState } from "react";
import Table from "./Table";

const Form2 = () => {
  const [formData, setFormData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    item: "",
    qty: "",
    weight: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormInputData({ ...formInputData, [name]: value });
  };

  const handleSubmit = () => {
    if (formInputData.item && formInputData.qty && formInputData.weight) {
      setFormData([...formData, { ...formInputData }]);
      setFormInputData({ item: "", qty: "", weight: "" });
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="main">
      <div className="form-body grid md:grid-cols-2 place-items-center p-3">
        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Item :</h2>
          <select
            className="input text-sm"
            name="item"
            value={formInputData.item}
            onChange={handleInputData}
          >
            <option value="">Select Item</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Qty :</h2>
          <input
            className="input"
            type="number"
            name="qty"
            value={formInputData.qty}
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Weight :</h2>
          <input
            className="input"
            type="number"
            name="weight"
            value={formInputData.weight}
            onChange={handleInputData}
          />
        </div>
      </div>
      <div className="btn md:w-[90%] mx-auto flex flex-wrap gap-3 -mt-5 mb-5">
        <div className="btn_blue" onClick={handleSubmit}>
          Add
        </div>
      </div>
      <Table TableData={formData} />
    </div>
  );
};

export default Form2;
