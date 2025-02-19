import { useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Date, setDate] = useState({
    loan_id: "",
    loan_entitle: "",
    loan_amount: "",
    loan_deduction: "",
    loan_granter_1: "",
    loan_granter_2: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setDate({ ...Date, [name]: value });
  }

  return (
    <div className="main w-full overflow-x-auto">
      <div className="form-body  grid md:grid-cols-2 place-items-center p-3">
        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan ID :</h2>
          <input
            className="input"
            type="text"
            name="loan_id"
            onChange={handleInputData}
            disabled
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Entitle :</h2>
          <select
            className="input"
            id=""
            name="loan_entitle"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Amount :</h2>
          <input
            className="input"
            type="text"
            name="loan_amount"
            onChange={handleInputData}
          />
        </div>
        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Deduction :</h2>
          <input
            className="input"
            type="text"
            name="loan_deduction"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Granter 1 :</h2>
          <select
            className="input"
            id=""
            name="loan_granter_1"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Granter 2 :</h2>
          <select
            className="input"
            id=""
            name="loan_granter_2"
            onChange={handleInputData}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>

      <div className="btn w-[85%] mx-auto -mt-5 flex gap-3">
        <div className="btn_blue">Submit</div>
        <div className="btn_blue">Reject</div>
      </div>
    </div>
  );
};

export default Form;
