import { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    order_id: "",
    item_name: "",
    section_name: "",
    item_lbs: "",
    weight: "",
    final_checker: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  useEffect(() => {
    sendDataToParent(Data);
  }, [Data]);

  return (
    <div>
      <div className="form-body grid md:grid-cols-2 place-items-center p-3">
        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Ordedr ID :</h2>
          <input
            className="input"
            type="text"
            name="order_id"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Item Name :</h2>
          <input
            className="input"
            type="text"
            name="order_id"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Section Name :</h2>
          <input
            className="input"
            type="text"
            name="section_name"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Item Lbs :</h2>
          <input
            className="input"
            type="number"
            name="item_lbs"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Weight :</h2>
          <input
            className="input"
            type="number"
            name="weight"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]">Final Checker :</h2>
          <select
            className="input text-sm"
            id=""
            name="final_checker"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[9pc]"> Search Item Name :</h2>
          <select
            className="input text-sm"
            id=""
            name="item_name"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
