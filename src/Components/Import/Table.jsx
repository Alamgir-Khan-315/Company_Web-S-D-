import { useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [data, setData] = useState([
    {
      Ttile_1: "title",
      Ttile_2: 1,
      Ttile_3: "Demo",
    },
    {
      Ttile_1: "demo",
      Ttile_2: 2,
      Ttile_3: "Demo",
    },
  ]);

  const columns = [
    {
      name: "Ttile 1",
      selector: (row) => row.Ttile_1,
    },
    {
      name: "Ttile 2",
      selector: (row) => row.Ttile_2,
    },
    {
      name: "Ttile 3",
      selector: (row) => row.Ttile_3,
    },
  ];

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

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
      />
    </div>
  );
};

export default Table;
