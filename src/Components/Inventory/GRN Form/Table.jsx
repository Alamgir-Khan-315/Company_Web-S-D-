import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import DataTable from "react-data-table-component";

const Table = ({ TableData }) => {
  // const Column = [
  //   { Title: "Code" },
  //   { Title: "Discription" },
  //   { Title: "Qty" },
  //   { Title: "Weight" },
  //   { Title: "Action", class: "w-[100px]" },
  // ];

  const [data, setData] = useState([
    {
      Code: "1",
      Discription: 1,
      Qty: "Demo",
      Weight: "2025-02-26",
      Action: "Tuesday",
    },
    {
      Code: "2",
      Discription: 1,
      Qty: "Demo",
      Weight: "2025-02-26",
      Action: "Tuesday",
    },
    {
      Code: "3",
      Discription: 1,
      Qty: "Demo",
      Weight: "2025-02-26",
      Action: "Tuesday",
    },
  ]);

  const columns = [
    {
      name: "Code",
      selector: (row) => row.Code,
    },
    {
      name: "Discription",
      selector: (row) => row.item,
    },
    {
      name: "Qty",
      selector: (row) => row.qty,
    },
    {
      name: "Weight",
      selector: (row) => row.weight,
    },
    {
      name: "Action",
      selector: (row) => row.actions,
    },
  ];

  function HandleDelete() {
    alert("deleted");
  }

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1rem",
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

  console.log(TableData);

  return (
    <div>
      <DataTable
        columns={columns}
        data={TableData.map((data) => ({
          Code: "sfsd",
          item: data?.item ?? "No Item",
          qty: data?.qty ?? 0,
          weight: data?.weight ?? 0,
          actions: (
            <div className="action w-fit flex mx-auto gap-2">
              <div className="edit_badge" onClick={() => EditUser(d["s.no"])}>
                <CiEdit />
              </div>
              <div className="del_badge" onClick={HandleDelete}>
                <MdOutlineDelete />
              </div>
            </div>
          ),
        }))}
        highlightOnHover
        customStyles={customStyles}
      />
      {/* <table className="w-full p-2 my-3">
        <thead>
          <tr className="thead">
            {Column.map((c, i) => (
              <th className={`border p-2 ${c.class}`}>{c.Title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((data, index) => (
            <tr key={index}>
              <td className="border p-2"></td>
              <td className="border p-2">{data.item}</td>
              <td className="border p-2">{data.qty}</td>
              <td className="border p-2">{data.weight}</td>
              <td className="border p-2">
                <div className="action w-fit flex mx-auto gap-2">
                  <div
                    className="edit_badge"
                    onClick={() => EditUser(d["s.no"])}
                  >
                    <CiEdit />
                  </div>
                  <div className="del_badge" onClick={HandleDelete}>
                    <MdOutlineDelete />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Table;
