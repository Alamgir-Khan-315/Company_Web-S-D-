import React, { useState } from "react";

const Table = () => {
  const [Filter, setFilter] = useState("list");

  return (
    <div>
      <div className="toogle_box mt-[1rem] w-fit text-sm flex items-center gap-3 p-1 px-3 rounded-full  border border-gray-300 bg-gray-100">
        <div
          className={`list  ${
            Filter === "list" ? "toggle_gray_selected" : "toggle_gray"
          } `}
          onClick={() => setFilter("list")}
        >
          List
        </div>
        <div
          className={`list  ${
            Filter === "pending" ? "toggle_gray_selected" : "toggle_gray"
          } `}
          onClick={() => setFilter("pending")}
        >
          Pending
        </div>
        <div
          className={`list  ${
            Filter === "approved" ? "toggle_gray_selected" : "toggle_gray"
          } `}
          onClick={() => setFilter("approved")}
        >
          Approved
        </div>
      </div>

      <table className="w-full text-sm table-auto p-2">
        <thead className="thead">
          <tr className="text-center border-2 border-gray-200">
            <td className="td">Select</td>
            <td className="td">ID</td>
            <td className="td">Enroll Number</td>
            <td className="td">Loan Entitle</td>
            <td className="td">Granter one</td>
            <td className="td">Granter two</td>
            <td className="td">Loan Amount</td>
            <td className="td">Deduction Amount</td>
            <td className="td">Loan Deduction</td>
            <td className="td">Admin</td>
            <td className="td">Approved</td>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center text-sm border-2 border-gray-200">
            <td className="td border border-gray-200"> Select </td>
            <td className="td border w-[100px]">Emp ID</td>
            <td className="td w-[200px]">Name</td>
            <td className="td w-[100px]">In Time</td>
            <td className="td">Date</td>
            <td className="td">Day</td>
            <td className="td">Holiday</td>
            <td className="td">Holiday</td>
            <td className="td">Holiday</td>
            <td className="td">Holiday</td>
            <td className="td">Holiday</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
