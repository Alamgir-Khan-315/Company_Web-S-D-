import { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [Date, setDate] = useState({
    from: "",
    to: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setDate({ ...Date, [name]: value });
  }

  return (
    <div className="main w-full overflow-x-auto">
      <div className="form-body w-fit mx-auto flex gap-3 items-center justify-center p-3">
        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[4pc]">From :</h2>
          <input
            className="input"
            type="date"
            name="from"
            onChange={handleInputData}
          />
        </div>

        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label !w-[4pc]">To :</h2>
          <input
            className="input"
            type="date"
            name="to"
            onChange={handleInputData}
          />
        </div>

        <div className="view btn_blue !mt-1">View</div>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <div className="btn_blue !mt-0">Generate</div>
        <h2>ID</h2>
      </div>

      <Table />
    </div>
  );
};

export default Form;
