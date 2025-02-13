import { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    id: "",
    department: "",
    date: "",
    catogary: "",
    meter_reading: "",
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
        <h2 className="label !w-[9pc]">Department :</h2>
        <select
          className="input text-sm"
          id=""
          name="department"
          onChange={handleInputData}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
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
        <h2 className="label !w-[9pc]">Catogary :</h2>
        <select
          className="input text-sm"
          id=""
          name="catogary"
          onChange={handleInputData}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="weight flex w-[80%] items-center gap-5 p-2">
        <h2 className="label !w-[9pc]">Meter Reading :</h2>
        <input
          className="input"
          type="text"
          name="meter_reading"
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
    </div>
  );
};

export default Form;
