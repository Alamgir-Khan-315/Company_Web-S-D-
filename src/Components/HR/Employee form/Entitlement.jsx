import React, { useEffect, useState } from "react";

const Entitlement = ({ sendDataToParent }) => {
  const [DataEntitlement, setDataEntitlement] = useState({
    ot: "",
    advance: "",
    loan_amount: "",
    loan: "",
    alwc: "",
    n: "",
    food: "",
    transport: "",
    sun_ot: "",
    cony: "",
    strength: "",
    envolope: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setDataEntitlement({ ...DataEntitlement, [name]: value });
  }

  useEffect(() => {
    sendDataToParent(DataEntitlement);
  }, [DataEntitlement]);

  return (
    <div>
      <div className="form-body grid md:grid-cols-2 place-items-center text-sm p-3">
        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">OT :</h2>
          <input
            className="input"
            type="text"
            name="ot"
            onChange={handleInputData}
          />
        </div>

        <div className="slection flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Advance :</h2>
          <input
            className="input"
            type=""
            name="advance"
            onChange={handleInputData}
          />
        </div>

        <div className="bail-size flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan Amount :</h2>
          <input
            className="input"
            type=""
            name="loan_amount"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Loan :</h2>
          <input
            className="input"
            type=""
            name="loan"
            onChange={handleInputData}
          />
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Alwc :</h2>
          <select
            className="input"
            id=""
            name="alwc"
            onChange={handleInputData}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">N :</h2>
          <select className="input" id="" name="n" onChange={handleInputData}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Food :</h2>
          <select
            className="input"
            id=""
            name="food"
            onChange={handleInputData}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Transport :</h2>
          <select
            className="input"
            id=""
            name="transport"
            onChange={handleInputData}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Sun. Ot :</h2>
          <input
            className="input"
            type=""
            name="sun_ot"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Cony :</h2>
          <input
            className="input"
            type=""
            name="cony"
            onChange={handleInputData}
          />
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Strength :</h2>
          <select
            className="input"
            id=""
            name="strength"
            onChange={handleInputData}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="packing flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Envelope :</h2>
          <select
            className="input"
            id=""
            name="envelope"
            onChange={handleInputData}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Entitlement;
