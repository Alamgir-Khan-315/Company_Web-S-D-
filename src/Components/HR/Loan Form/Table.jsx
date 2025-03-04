import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [Filter, setFilter] = useState("list");

  const [data, setData] = useState([
    {
      Select: "Select",
      ID: 1,
      Enroll_Number: 123,
      Loan_Entitle: "Demo",
      Granter_1: 1,
      Granter_2: 2,
      Loan_amount: 1212,
      Deduction_amount: 1212,
      Loan_deduction: 1212,
      Admin: 1212,
      Approved: 1212,
    },
    {
      Select: "Select",
      ID: 2,
      Enroll_Number: 43234,
      Loan_Entitle: "Demo",
      Granter_1: 1,
      Granter_2: 2,
      Loan_amount: 1212,
      Deduction_amount: 1212,
      Loan_deduction: 1212,
      Admin: 1212,
      Approved: 1212,
    },
  ]);

  const columns = [
    {
      name: "Select 1",
      selector: (row) => row.Select,
    },
    {
      name: "ID",
      width: "70px",
      selector: (row) => row.ID,
    },
    {
      name: "Enroll #",
      selector: (row) => row.Enroll_Number,
    },
    {
      name: "Loan Entitle",
      selector: (row) => row.Loan_Entitle,
    },
    {
      name: "Granter 1",
      selector: (row) => row.Granter_1,
    },
    {
      name: "Granter 2",
      selector: (row) => row.Granter_2,
    },
    {
      name: "Loan Amount",
      selector: (row) => row.Loan_amount,
    },
    {
      name: "Deduction Amount",
      selector: (row) => row.Deduction_amount,
    },
    {
      name: "Loan Deduction",
      selector: (row) => row.Loan_deduction,
    },
    {
      name: "Admin",
      selector: (row) => row.Admin,
    },
    {
      name: "Approved",
      selector: (row) => row.Approved,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        backgroundColor: "#f3f4f6",
        textAlign: "left",
        padding: "0.5rem",
      },
    },
    cells: {
      style: {
        padding: "0.5rem",
      },
    },
  };

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

      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
      />

      {/* <table className="w-full text-sm table-auto p-2">
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
      </table> */}
    </div>
  );
};

export default Table;
