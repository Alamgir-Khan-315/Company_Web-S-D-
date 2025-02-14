import React from "react";

const Table = () => {
  return (
    <div>
      <table className="w-full text-sm table-auto p-2 my-5">
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
      </table>
    </div>
  );
};

export default Table;
