import React, { useEffect, useState } from "react";

const Detail = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    id: "",
    container_no: "",
    barcode: "",
    bale: "",
    inv_lbs: "",
    zone_lbs: "",
    pol: "",
    pod: "",
    location: "",
    catogary: "",
    type: "",
    rags_type: "",
    off_load: "",
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
    <div className="Title">
      <h2 className="Rounded_Title">Details</h2>
      <div className="form-body grid md:grid-cols-2 place-items-center p-3">
        <div className="name flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">ID :</h2>
          <input
            className="input"
            type="text"
            name="id"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Container # :</h2>
          <input
            className="input"
            type="text"
            name="container_no"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Barcode :</h2>
          <input
            className="input"
            type="text"
            name="barcode"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Bale :</h2>
          <input
            className="input"
            type="number"
            name="bale"
            onChange={handleInputData}
          />
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Inv Lbs :</h2>
          <input
            className="input"
            type="number"
            name="inv_lbs"
            onChange={handleInputData}
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Zone Lbs :</h2>
          <input
            className="input sm:ml-5 md:m-0"
            type="number"
            name="zone_lbs"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">POL :</h2>
          <select
            className="input text-sminput text-sminput text-sm"
            name="pol"
            onChange={handleInputData}
            id=""
          >
            <option value="">1</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">POD :</h2>
          <select
            className="input text-sm"
            name="pod"
            onChange={handleInputData}
            id=""
          >
            <option value="">1</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Location :</h2>
          <select
            className="input text-sm"
            name="location"
            onChange={handleInputData}
            id=""
          >
            <option value="">1</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Catogary :</h2>
          <select
            className="input text-sm"
            name="catogary"
            onChange={handleInputData}
            id=""
          >
            <option value="">1</option>
          </select>
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Type :</h2>
          <select
            className="input text-sm"
            name="type"
            onChange={handleInputData}
            id=""
          >
            <option value="">1</option>
          </select>
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Rags Type :</h2>
          <input
            className="input"
            type="number"
            name="rags_type"
            onChange={handleInputData}
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label sm:ml-5 md:m-0">Off Load :</h2>
          <input
            className="input ml-5 md:m-0"
            type="number"
            name="off_load"
            onChange={handleInputData}
          />
        </div>

        <div className="weight flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Remarks # :</h2>
          <input
            className="input"
            type="remarks"
            name="remarks"
            onChange={handleInputData}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
