import { Link } from "react-router-dom";
import { useState } from "react";
import DataTable from "react-data-table-component";

import { IoMdAddCircle, IoMdRefresh } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const Employee_list = () => {
  const [Search_Data, setSearch_Data] = useState({
    Search_Range: "",
    Search_Name: "",
  });

  const [data, setData] = useState([
    {
      s_no: "1",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "12312312312",
      status: "Active",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
    {
      s_no: "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
  ]);

  const columns = [
    {
      name: "S no",
      width: "60px",
      selector: (row) => row.s_no,
    },
    {
      name: "Code",
      width: "70px",
      selector: (row) => row.code,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "City",
      width: "80px",
      selector: (row) => row.city,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
    },
    {
      name: "Mobile",
      width: "130px",
      selector: (row) => row.mobile,
    },
    {
      name: "Status",
      width: "80px",
      selector: (row) => row.status,
      cell: (row) => <span className={`px-2 py-1 rounded text-white ${row.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>{row.status}</span>,
    },
    {
      name: "Action",
      width: "130px",
      selector: (row) => row.action,
      cell: (row) => (
        <div className="action w-fit flex items-center justify-center gap-2">
          <div className="view_badge cursor-pointer" onClick={() => ViewUser(row.s_no)}>
            <GrFormView />
          </div>
          <div className="edit_badge cursor-pointer" onClick={() => EditUser(row.s_no)}>
            <CiEdit />
          </div>
          <div className="del_badge cursor-pointer" onClick={() => DelUser(row.s_no)}>
            <MdOutlineDelete />
          </div>
        </div>
      ),
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

  function ViewUser(id) {
    alert(`View user of ${id}`);
  }
  function EditUser(id) {
    alert(`Edit user of ${id}`);
  }
  function DelUser(id) {
    alert(`Del user of ${id}`);
  }

  function handleSearchQuery(e) {
    const { name, value } = e.target;
    setSearch_Data({ ...Search_Data, [name]: value });
  }

  return (
    <div className="main h-[100vh] pt-[3pc]">
      <div className="box">
        <div className="top-btn-section h-20 border-b border-gray-200">
          <div className="top-button flex float-end p-4 gap-5">
            <Link to="Form">
              <div className="Add-New flex items-center rounded-lg cursor-pointer bg-blue-300">
                <div className="icon text-white p-2 text-xl">
                  <IoMdAddCircle />{" "}
                </div>
                <div className="add-form text-white p-2 rounded-tr-lg rounded-br-lg bg-blue-500">Add New</div>
              </div>
            </Link>
            <div className="Add-New flex items-center rounded-lg cursor-pointer bg-gray-300">
              <div className="icon p-2 text-xl">
                <IoMdRefresh />{" "}
              </div>
              <div className="add-form p-2 rounded-tr-lg rounded-br-lg bg-gray-200">Refresh</div>
            </div>
          </div>
        </div>

        <div className="search-portion flex justify-between p-5 box-border">
          <div className="search flex gap-3">
            <h3>Search : </h3>
            <input className="w-[8pc] border border-gray-300 rounded-lg pl-3" type="text" name="Search_Name" onChange={handleSearchQuery} />
          </div>
        </div>

        {Search_Data.Search_Name}

        <DataTable columns={columns} data={data} highlightOnHover customStyles={customStyles} pagination />
      </div>
    </div>
  );
};

export default Employee_list;
