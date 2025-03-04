import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [data, setData] = useState([
    {
      ID: "1",
      Emp_ID: 1,
      Name: "Demo",
      Date: "2025-02-26",
      Day: "Tuesday",
      Holiday: "No",
      In_Time: "9:00 AM",
      Out_Time: "5:00 PM",
      D: "",
      W: "",
      H: "",
      S: "",
      Hours: "8",
      OT: "0",
      Late: "No",
      Extra: "No",
    },
    {
      ID: "2",
      Emp_ID: 2,
      Name: "John Doe",
      Date: "2025-02-26",
      Day: "Tuesday",
      Holiday: "No",
      In_Time: "9:30 AM",
      Out_Time: "5:30 PM",
      D: "",
      W: "",
      H: "",
      S: "",
      Hours: "8",
      OT: "0",
      Late: "No",
      Extra: "No",
    },
    {
      ID: "2",
      Emp_ID: 2,
      Name: "John Doe",
      Date: "2025-02-26",
      Day: "Tuesday",
      Holiday: "No",
      In_Time: "9:30 AM",
      Out_Time: "5:30 PM",
      D: "",
      W: "",
      H: "",
      S: "",
      Hours: "8",
      OT: "0",
      Late: "No",
      Extra: "No",
    },
  ]);

  const handleInputChange = (e, field, index) => {
    const updatedData = [...data];
    updatedData[index][field] = e.target.value;
    setData(updatedData);
  };

  const columns = [
    { name: "ID", selector: (row) => row.ID, width: "50px" },
    { name: "Emp ID", selector: (row) => row.Emp_ID, width: "80px" },
    { name: "Name", selector: (row) => row.Name },
    { name: "Date", selector: (row) => row.Date, width: "100px" },
    { name: "Day", selector: (row) => row.Day, width: "80px" },
    { name: "Holiday", selector: (row) => row.Holiday, width: "80px" },
    {
      name: "In Time",
      selector: (row, index) => (
        <input
          type="time"
          value={row.In_Time}
          onChange={(e) => handleInputChange(e, "In_Time", index)}
          className="border w-[85px] border-gray-200 text-xs rounded-md"
        />
      ),
      width: "115px",
    },
    {
      name: "Out Time",
      selector: (row, index) => (
        <input
          type="time"
          value={row.Out_Time}
          onChange={(e) => handleInputChange(e, "Out_Time", index)}
          className="border w-[85px] border-gray-200 text-xs rounded-md"
        />
      ),
      width: "115px",
    },
    {
      name: "D",
      selector: (row, index) => (
        <input
          type="text"
          value={row.D}
          onChange={(e) => handleInputChange(e, "D", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "W",
      selector: (row, index) => (
        <input
          type="text"
          value={row.W}
          onChange={(e) => handleInputChange(e, "W", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "H",
      selector: (row, index) => (
        <input
          type="text"
          value={row.H}
          onChange={(e) => handleInputChange(e, "H", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "S",
      selector: (row, index) => (
        <input
          type="text"
          value={row.S}
          onChange={(e) => handleInputChange(e, "S", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "Hours",
      selector: (row, index) => (
        <input
          type="text"
          value={row.Hours}
          onChange={(e) => handleInputChange(e, "Hours", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "OT",
      selector: (row, index) => (
        <input
          type="text"
          value={row.OT}
          onChange={(e) => handleInputChange(e, "OT", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "Late",
      selector: (row, index) => (
        <input
          type="text"
          value={row.Late}
          onChange={(e) => handleInputChange(e, "Late", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
    {
      name: "Extra",
      selector: (row, index) => (
        <input
          type="text"
          value={row.Extra}
          onChange={(e) => handleInputChange(e, "Extra", index)}
          className="border w-10 border-gray-200 text-sm rounded-md"
        />
      ),
      width: "72px",
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pagination highlightOnHover />

      {/* <table className="w-full text-sm table-auto p-2 my-5">
        <thead className="thead">
          <tr className="text-center border-2 border-gray-200">
            <td className="td">ID</td>
            <td className="td">Emp ID</td>
            <td className="td">Name</td>
            <td className="td">In Time</td>
            <td className="td">Date</td>
            <td className="td">Day</td>
            <td className="td">Holiday</td>
            <td className="td">In Time</td>
            <td className="td">Out Time</td>
            <td className="td">D</td>
            <td className="td">W</td>
            <td className="td">H</td>
            <td className="td">S</td>
            <td className="td">Hours</td>
            <td className="td">OT</td>
            <td className="td">Late</td>
            <td className="td">Extra</td>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center text-sm border-2 border-gray-200">
            <td className="td border border-gray-200"> ID </td>
            <td className="td border w-[100px]">Emp ID</td>
            <td className="td w-[200px]">Name</td>
            <td className="td w-[100px]">In Time</td>
            <td className="td">Date</td>
            <td className="td">Day</td>
            <td className="td">Holiday</td>
            <td className="td">
              <input type="time" className="border border-gray-200" />
            </td>
            <td className="td">
              {" "}
              <input type="time" className="border border-gray-200" />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="appearance-none border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
            <td className="td">
              <input
                type="number"
                className="border w-[50px] border-gray-200"
                placeholder="0"
              />{" "}
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Table;
