import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const state = [
    { Country: "Pakistan" },
    { Country: "India" },
    { Country: "England" },
    { Country: "etc" },
  ];
  const Level = [
    { level: "1" },
    { level: "2" },
    { level: "3" },
    { level: "4" },
  ];

  const [Data, setData] = useState({
    name: "",
    selection: "",
    bail_size: "",
    weight: "",
    packing: "",
    catogary: "",
    status: "",
    region: "",
    item_rate: "",
    level: "",
    label: "",
    uom: "",
    vintage: "",
    qty: "",
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  function handleData(e) {
    e.preventDefault();
    console.log(Data);
  }

  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>{" "}
        &nbsp; / &nbsp; <h1 className="text-black cursor-pointer">Form</h1>
      </div>

      <div className="box  mt-[1rem] pt-[1rem]">
        <form onSubmit={handleData} className="form p-3">
          <h1>ID</h1>

          <div className="form-body grid md:grid-cols-2 place-items-center p-3">
            <div className="name flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Name :</h2>
              <input
                className="input"
                type="text"
                name="name"
                onChange={handleInputData}
              />
            </div>

            <div className="slection flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Selection :</h2>
              <input
                className="input"
                type=""
                name="selection"
                onChange={handleInputData}
              />
            </div>

            <div className="bail-size flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Bail size :</h2>
              <input
                className="input"
                type=""
                name="bail_size"
                onChange={handleInputData}
              />
            </div>

            <div className="weight flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Weight :</h2>
              <input
                className="input"
                type=""
                name="weight"
                onChange={handleInputData}
              />
            </div>

            <div className="packing flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Packing :</h2>
              <select
                className="input text-sm"
                id=""
                name="packing"
                onChange={handleInputData}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            <div className="Catogrry flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Catogrry :</h2>
              <input
                className="input"
                type=""
                name="catogary"
                onChange={handleInputData}
              />
            </div>

            <div className="packing flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Status :</h2>
              <select
                className="input text-sm"
                name="status"
                onChange={handleInputData}
                id=""
              >
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>

            <div className="packing flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Region :</h2>
              <select
                className="input text-sm"
                name="region"
                onChange={handleInputData}
                id=""
              >
                {state.map((c, i) => {
                  return <option key={i}>{c.Country}</option>;
                })}
              </select>
            </div>

            <div className="Catogrry flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">Item rate :</h2>
              <input
                className="input"
                type=""
                name="item_rate"
                onChange={handleInputData}
              />
            </div>

            <div className="Catogrry overflow-hidden md:flex w-[80%] items-center py-2">
              <div className="Catogrry md:w-[50%] flex items-center gap-5 md:gap-[25%] p-2">
                <h2 className="label">Level :</h2>
                <select
                  className="input text-sm"
                  name="level"
                  onChange={handleInputData}
                  id=""
                >
                  {Level.map((c, i) => {
                    return <option key={i}>{c.level}</option>;
                  })}
                </select>
              </div>
              <div className="Catogrry md:w-[50%] flex items-center gap-5 md:gap-[25%] p-2">
                <h2 className="label">Label :</h2>
                <select
                  className="input text-sm"
                  name="label"
                  onChange={handleInputData}
                  id=""
                >
                  <option></option>
                </select>
              </div>
            </div>

            <div className="Catogrry flex w-[80%] items-center gap-5 p-2">
              <h2 className="label">UOM :</h2>
              <select
                className="input text-sm"
                name="uom"
                onChange={handleInputData}
                id=""
              >
                <option>Select value</option>
              </select>
            </div>

            <div className="Catogrry md:flex w-[80%] items-center py-2">
              <div className="Catogrry md:w-[50%] flex items-center gap-5 md:gap-[25%] p-2">
                <h2 className="label">Vintage Sec :</h2>
                <select
                  className="input text-sm"
                  name="vintage"
                  onChange={handleInputData}
                  id=""
                >
                  {Level.map((c, i) => {
                    return <option key={i}>{c.level}</option>;
                  })}
                </select>
              </div>
              <div className="Catogrry md:w-[50%] flex items-center gap-5 md:gap-[25%] p-2">
                <h2 className="label md:w-[13rem]">Exc. Qty :</h2>
                <select
                  className="input text-sm"
                  name="qty"
                  onChange={handleInputData}
                  id=""
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:w-[90%] mx-auto -mt-4 mb-3" type="Submit">
            <div className="btn_blue">Submit</div>
          </div>

          <pre className="mt-4 p-2 bg-gray-100 rounded">
            {JSON.stringify(Data, null, 2)}
          </pre>
        </form>
      </div>
    </div>
  );
}
