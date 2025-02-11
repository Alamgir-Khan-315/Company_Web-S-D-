import { Link } from "react-router-dom";
import { useState } from "react";

import { IoMdAddCircle, IoMdRefresh } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Employee_list = () => {
  const [Search_Data, setSearch_Data] = useState({
    Search_Range: "",
    Search_Name: "",
  });
  const TableData = [
    {
      "s.no": "1",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "12312312312",
      status: "Active",
    },
    {
      "s.no": "2",
      code: "2001",
      name: "Demo",
      city: "Karachi",
      designation: "Software Department",
      mobile: "124332312312",
      status: "Inactive",
    },
  ];

  function handleSearchQuery(e) {
    const { name, value } = e.target;
    setSearch_Data({ ...Search_Data, [name]: value });
  }

  function ViewUser(id) {
    alert(`View user of ${id}`);
  }
  function EditUser(id) {
    alert(`Edit user of ${id}`);
  }
  function DelUser(id) {
    alert(`Del user of ${id}`);
  }

  const [Pagination, setPagination] = useState("1");

  const handlePrev = () => {
    if (Pagination > 1) {
      setPagination((Pagination) => (parseInt(Pagination) - 1).toString());
    }
  };

  const handleNext = () => {
    setPagination((Pagination) => (parseInt(Pagination) + 1).toString());
  };

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
                <div className="add-form text-white p-2 rounded-tr-lg rounded-br-lg bg-blue-500">
                  Add New
                </div>
              </div>
            </Link>
            <div className="Add-New flex items-center rounded-lg cursor-pointer bg-gray-300">
              <div className="icon p-2 text-xl">
                <IoMdRefresh />{" "}
              </div>
              <div className="add-form p-2 rounded-tr-lg rounded-br-lg bg-gray-200">
                Refresh
              </div>
            </div>
          </div>
        </div>

        <div className="search-portion flex justify-between p-5 box-border">
          <div className="search-box flex gap-3">
            <h3>Show</h3>
            <select
              className="w-[50px] border rounded-lg border-gray-300 text-center text-sm"
              name="Search_Range"
              onChange={handleSearchQuery}
            >
              <option>0</option>
              <option>10</option>
              <option>50</option>
            </select>

            <h3>entries</h3>
          </div>
          <div className="search flex gap-3">
            <h3>Search : </h3>
            <input
              className="w-[8pc] border border-gray-300 rounded-lg pl-3"
              type="text"
              name="Search_Name"
              onChange={handleSearchQuery}
            />
          </div>
        </div>

        {Search_Data.Search_Name}
        {Search_Data.Search_Range}

        <div className="table w-full p-2 my-5">
          <table className="w-full">
            <thead className="thead">
              <tr className="border-b-2 border-gray-100">
                <td className="td w-[80px]">S No.</td>
                <td>Code</td>
                <td className="w-[25%]">First Name</td>
                <td className="w-[10pc]">City</td>
                <td className="w-[25%]">Designation</td>
                <td className="w-[10pc]">Mobile</td>
                <td className="w-[80px] text-center">Status</td>
                <td className="text-center w-[6pc]">Action</td>
              </tr>
            </thead>

            <tbody>
              {TableData.map((d, i) => {
                return (
                  <tr key={i} className="border-b-2 border-gray-100">
                    <td className="td">{d["s.no"]}</td>
                    <td className="td">{d.code}</td>
                    <td className="td">{d.name}</td>
                    <td className="td">{d.city}</td>
                    <td className="td">{d.designation}</td>
                    <td className="td">{d.mobile}</td>
                    <td
                      className={
                        d.status === "Active" ? "safe_badge" : "unsafe_badge"
                      }
                    >
                      {d.status}
                    </td>
                    <td className="w-fit">
                      <div className="action w-fit flex items-center justify-center gap-2">
                        <div
                          className="view_badge"
                          onClick={() => ViewUser(d["s.no"])}
                        >
                          <GrFormView />
                        </div>
                        <div
                          className="edit_badge"
                          onClick={() => EditUser(d["s.no"])}
                        >
                          <CiEdit />
                        </div>
                        <div
                          className="del_badge"
                          onClick={() => DelUser(d["s.no"])}
                        >
                          <MdOutlineDelete />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="pagination flex items-center justify-between mt-[1rem] p-[1rem]">
            <div className="page_index">Showing {Pagination}</div>
            <div className="pagination flex items-center gap-2">
              <div className="text-xl cursor-pointer" onClick={handlePrev}>
                <FaCircleArrowLeft />
              </div>
              <div
                className={`p-1 px-2.5 cursor-pointer rounded-full bg-gray-200`}
                onClick={() => setPagination(1)}
              >
                1
              </div>
              <div
                className="p-1 px-2.5 cursor-pointer rounded-full bg-gray-200"
                onClick={() => setPagination(2)}
              >
                2
              </div>
              <div
                className="p-1 px-2.5 cursor-pointer rounded-full bg-gray-200"
                onClick={() => setPagination(3)}
              >
                3
              </div>
              <div className="text-xl cursor-pointer" onClick={handleNext}>
                <FaCircleArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee_list;
