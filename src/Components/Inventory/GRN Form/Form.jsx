import { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    id: "",
    supplier: "",
    type: "",
    date: "",
    remarks: "",
    container: "",
    in: "",
    out: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  useEffect(() => {
    sendDataToParent(Data);
  }, [Data]);

  return (
    <div className="form-body lg:grid lg:grid-cols-2 place-items-center py-3 lg:p-3">
      <div className="w-[90%] mx-auto col-span-2">
        <div className="name flex w-fit items-center gap-5 p-2">
          <h2 className="label mr-11 lg:mr-5">ID :</h2>
          <input
            className="input"
            type="text"
            name="date"
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
          name="type"
          onChange={handleInputData}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
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
        <h2 className="label !w-[9pc]">Remarks :</h2>
        <input
          className="input"
          type="text"
          name="remarks"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Container :</h2>
        <select
          className="input text-sm"
          id=""
          name="container"
          onChange={handleInputData}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">IN :</h2>
        <input
          className="input"
          type="date"
          name="in"
          onChange={handleInputData}
        />
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">OUT :</h2>
        <input
          className="input"
          type="date"
          name="out"
          onChange={handleInputData}
        />
      </div>
    </div>
  );
};

export default Form;
