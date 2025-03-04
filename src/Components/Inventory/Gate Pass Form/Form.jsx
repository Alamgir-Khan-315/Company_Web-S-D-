import { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    id: "",
    supplier: "",
    date: "",
    employee: "",
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
    <div className="form-body lg:grid lg:grid-cols-2 place-items-center p-3">
      <div className="w-[90%] mx-auto col-span-2">
        <div className="name flex w-fit items-center gap-5 p-2">
          <h2 className="label">ID :</h2>
          <input
            className="input"
            type="text"
            name="id"
            disabled
            onChange={handleInputData}
          />
        </div>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Supplier :</h2>
        <select
          className="input text-sm"
          id=""
          name="supplier"
          onChange={handleInputData}
        >
          <option>Select</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="name flex  w-[80%] items-center gap-5 p-2">
        <h2 className="label">Date :</h2>
        <input
          className="input"
          type="date"
          name="id"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Employee :</h2>
        <select
          className="input text-sm"
          id=""
          name="type"
          onChange={handleInputData}
        >
          <option>Select</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Type :</h2>
        <select
          className="input text-sm"
          id=""
          name="container"
          onChange={handleInputData}
        >
          <option>Select</option>
          <option>Medium</option>
          <option>Large</option>
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
