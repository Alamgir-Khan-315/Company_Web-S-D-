import { useState } from "react";
import Table from "./Table";

const Form = ({ sendDataToParent }) => {
  const [Date, setDate] = useState({
    department: "",
    employee: "",
    from: "",
    to: "",
    h_adjust: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setDate({ ...Date, [name]: value });
  }

  return (
    <div className="main w-full">
      <div className="form-body  grid md:grid-cols-2 place-items-center p-3">
        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Department :</h2>
          <select
            className="input"
            id=""
            name="department"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Employee :</h2>
          <select
            className="input"
            id=""
            name="employee"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">From :</h2>
          <input
            className="input"
            type="date"
            name="from"
            onChange={handleInputData}
          />
        </div>

        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">To :</h2>
          <input
            className="input"
            type="date"
            name="to"
            onChange={handleInputData}
          />
        </div>

        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">H Adjust :</h2>
          <input
            className="input"
            type="text"
            name="h_adjust"
            onChange={handleInputData}
          />
        </div>
      </div>

      <div className="btn w-[85%] mx-auto -mt-5 flex gap-3">
        <div className="btn_blue">Search</div>
        <div className="btn_blue">Update</div>
        <div className="btn_blue">Adjust</div>
      </div>

      <section className=" my-5">
        <Table />
      </section>
    </div>
  );
};

export default Form;
