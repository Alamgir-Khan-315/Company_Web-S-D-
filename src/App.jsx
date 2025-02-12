import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Hr from "./Components/HR/home";
import Production from "./Components/Production/home";
import Small_bail from "./Components/Production/Small bail/Small_bail";
import Small_bail_transfer from "./Components/Production/Small Bail Transfer/Small_bail_transfer";
import Big_bail from "./Components/Production/Big bail/Big_bail";

import Import from "./Components/Import/home";
import Import_form from "./Components/Import/Form/Form";

import Inventory from "./Components/Inventory/home";
import Employee_list from "./Components/Employee_list";
import Form from "./Components/Form";

import Employee_form from "./Components/HR/Employee form/Employee_form";

import Add_employee from "./Components/Employee/Add new employee/Add_employee";

import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import {
  FaAddressCard,
  FaFileImport,
  FaPlusCircle,
  FaCalendarTimes,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { IoMdPersonAdd, IoIosTime } from "react-icons/io";
import { RiLogoutBoxFill, RiFileAddFill } from "react-icons/ri";
import { HiShoppingCart, HiDocumentReport } from "react-icons/hi";
import { MdInventory2, MdAccountBalance } from "react-icons/md";
import { FaToriiGate, FaAddressBook } from "react-icons/fa6";

const App = () => {
  const [NavToggle, setNavToggle] = useState(false);
  const [Nav_Selected, setNav_Selected] = useState("Home");
  const [Child_Selected, setChild_Selected] = useState("");
  const [ExpandedTab, setExpandedTab] = useState(null);

  const NavMenu = [
    {
      Title: "Production",
      Icon: HiShoppingCart,
      Name: "production",
      Link: "Production",
      Role: "",
      Children: [
        {
          Title: "Item Form",
          Icon: IoMdPersonAdd,
          Name: "item_form",
          Link: "item_form",
        },
        {
          Title: "Small Bail",
          Icon: IoMdPersonAdd,
          Name: "small_bail",
          Link: "Production/Small_bale",
        },
        {
          Title: "Small Bail Transfer",
          Icon: IoMdPersonAdd,
          Name: "small_bail_transfer",
          Link: "Production/Small_bale_transfer",
        },
        {
          Title: "Floor Transfer",
          Icon: IoMdPersonAdd,
          Name: "floor_transfer",
          Link: "floor_transfer",
        },
        {
          Title: "Customer Order",
          Icon: IoMdPersonAdd,
          Name: "customer_order",
          Link: "customer_order",
        },
        {
          Title: "Big Bail",
          Icon: IoMdPersonAdd,
          Name: "big_bail",
          Link: "Production/big_bail",
        },
        { Title: "Big Rags", Icon: IoMdPersonAdd, Name: "rags", Link: "rags" },
        {
          Title: "Report",
          Icon: IoMdPersonAdd,
          Name: "report",
          Link: "report",
        },
      ],
    },
    {
      Title: "HR",
      Icon: FaAddressCard,
      Name: "hr",
      Link: "Hr",
      Role: "",
      Children: [
        {
          Title: "Employee Form",
          Icon: FaAddressBook,
          Name: "emp_form",
          Link: "Employee_form",
        },
        {
          Title: "Attendence Form",
          Icon: FaCalendarTimes,
          Name: "attendence_form",
          Link: "Attendence_form",
        },
        {
          Title: "Time Download",
          Icon: IoIosTime,
          Name: "floor_transfer",
          Link: "Floor_transfer",
        },
        {
          Title: "Loan Form",
          Icon: FaAddressCard,
          Name: "loan_form",
          Link: "Loan_form",
        },
        {
          Title: "Department Form",
          Icon: FaAddressCard,
          Name: "department_form",
          Link: "Department_form",
        },
        {
          Title: "Designation form",
          Icon: FaAddressCard,
          Name: "designation_form",
          Link: "Designation_form",
        },
        {
          Title: "Increment Form",
          Icon: RiFileAddFill,
          Name: "increment_form",
          Link: "Increment_form",
        },
        {
          Title: "Pre Salary",
          Icon: FaMoneyBillAlt,
          Name: "pre_salary",
          Link: "Pre_salary",
        },
        {
          Title: "Generate Salary",
          Icon: FaMoneyBillAlt,
          Name: "generate_salary",
          Link: "Generate_salary",
        },
        {
          Title: "Report",
          Icon: HiDocumentReport,
          Name: "report",
          Link: "Report",
        },
        {
          Title: "Load Status Report",
          Icon: MdAccountBalance,
          Name: "load_status_report",
          Link: "Load_status_report",
        },
        {
          Title: "GatePass List",
          Icon: FaToriiGate,
          Name: "gatepass_list",
          Link: "Gatepass_list",
        },
      ],
    },
    {
      Title: "Inventory",
      Icon: MdInventory2,
      Name: "inventory",
      Link: "Inventory",
      Role: "",
      Children: [
        {
          Title: "Customer File",
          Icon: FaAddressBook,
          Name: "customer_file",
          Link: "Customer_file",
        },
        {
          Title: "Suplier File",
          Icon: FaCalendarTimes,
          Name: "suplier_file",
          Link: "Suplier_file",
        },
        {
          Title: "Item File",
          Icon: IoIosTime,
          Name: "item_file",
          Link: "Item_file",
        },
        {
          Title: "GRN List",
          Icon: FaAddressCard,
          Name: "grn_list",
          Link: "Grn_list",
        },
        {
          Title: "GRN Form",
          Icon: FaAddressCard,
          Name: "grn_form",
          Link: "Grn_form",
        },
        {
          Title: "GRN Report",
          Icon: FaAddressCard,
          Name: "grn_report",
          Link: "Grn_report",
        },
        {
          Title: "Insurance List",
          Icon: RiFileAddFill,
          Name: "insurance_list",
          Link: "Insurance_list",
        },
        {
          Title: "Insurance Form",
          Icon: FaMoneyBillAlt,
          Name: "insurance_form",
          Link: "Insurance_form",
        },
        {
          Title: "Insurance Report",
          Icon: FaMoneyBillAlt,
          Name: "insurance_report",
          Link: "Insurance_report",
        },
        {
          Title: "DC Form",
          Icon: HiDocumentReport,
          Name: "dc_form",
          Link: "Dc_form",
        },
        {
          Title: "GatePass List",
          Icon: MdAccountBalance,
          Name: "gatepass_list",
          Link: "Gatepass_list",
        },
        {
          Title: "GatePass Form",
          Icon: FaToriiGate,
          Name: "gatepass_form",
          Link: "Gatepass_form",
        },
        {
          Title: "GatePass Report",
          Icon: FaToriiGate,
          Name: "gatepass_report",
          Link: "Gatepass_report",
        },
      ],
    },
    {
      Title: "Import",
      Icon: FaFileImport,
      Name: "import",
      Link: "Import",
      Role: "",
      Children: [
        {
          Title: "Rags Form",
          Icon: FaAddressBook,
          Name: "rags_form",
          Link: "Rags_form",
        },
        {
          Title: "Rags Status",
          Icon: FaCalendarTimes,
          Name: "rags_status",
          Link: "Rags_status",
        },
        {
          Title: "Location Form",
          Icon: IoIosTime,
          Name: "location_form",
          Link: "Location_form",
        },
        {
          Title: "Range Form",
          Icon: FaAddressCard,
          Name: "range_form",
          Link: "Range_form",
        },
        {
          Title: "Report",
          Icon: FaAddressCard,
          Name: "report",
          Link: "Report",
        },
      ],
    },
    // { Title: 'Add Employee', Icon: IoMdPersonAdd, Name: 'Add_employee', Link: 'Add_employee' },
    // { Title: 'Employee Form', Icon: IoMdPersonAdd, Name: 'emp_form', Link: 'Employee_form' },
  ];

  const Handle_Nav_Selected = (name) => {
    setExpandedTab(ExpandedTab === name ? null : name);
    setNav_Selected(name);
  };

  return (
    <div className="bg body">
      <Router>
        <div className="home flex">
          <div className="Nav-body h-[100vh] overflow-y-auto relative">
            {/*  */}
            <div
              className={`nav font-semibold fixed top-0 left-0 h-[91vh] overflow-y-auto scrollbar-hide shadow-md
                     ${
                       NavToggle === true
                         ? "w-[116px]"
                         : " md:flex md:flex-col sm:w-[50px] md:w-[13.5pc]"
                     } transition-all duration-500`}
            >
              <div className="nav-top flex items-center justify-between w-full p-4">
                <div className={`${NavToggle === false && "hidden md:flex"}`}>
                  Logo
                </div>
                <div className="icon" onClick={() => setNavToggle(!NavToggle)}>
                  {NavToggle === true ? (
                    <GoSidebarCollapse className="text-xl" />
                  ) : (
                    <GoSidebarExpand className="text-xl" />
                  )}
                </div>
              </div>

              <div
                className={`nav-item w-full flex flex-col text-sm gap-3 ${
                  NavToggle === false && "hidden md:flex"
                } transition-all duration-300`}
              >
                {NavMenu.map((d, i) => (
                  <div key={i}>
                    <Link to={d.Link}>
                      <div
                        className={`flex gap-4 items-center border-l-4 p-2 rounded-tl-full rounded-bl-full shadow-md hover:bg-gray-100 relative 
                        ${
                          Nav_Selected === d.Name
                            ? "bg-white rounded-tl-full rounded-bl-full"
                            : "bg-transparent"
                        }`}
                        onClick={() => Handle_Nav_Selected(d.Name)}
                      >
                        <div
                          className={`icon text-xl ${
                            NavToggle === true ? "mx-auto" : "ml-4"
                          }`}
                        >
                          <d.Icon />
                        </div>
                        <div
                          className={`home ${
                            NavToggle === true ? "hidden" : "flex"
                          }  transition-all duration-500`}
                        >
                          {d.Title}
                        </div>
                        <div className="icon">
                          {d?.Children && (
                            <div className={`absolute right-5 top-2.5`}>
                              <FaPlusCircle />
                            </div>
                          )}
                        </div>
                      </div>

                      {ExpandedTab === d.Name &&
                        d.Children &&
                        d.Children.length > 0 &&
                        d.Children.map((c, j) => (
                          <div
                            key={j}
                            className="production_list w-full flex flex-col gap-1"
                          >
                            <Link to={c.Link}>
                              <p
                                className={`nav_list_p ${
                                  Child_Selected === c.Name
                                    ? "bg-gray-100 rounded-tl-full rounded-bl-full"
                                    : "bg-transparent"
                                }`}
                                onClick={() => setChild_Selected(c.Name)}
                              >
                                {NavToggle === true ? (
                                  <div className="-ml-[2pc] text-[12px]">
                                    {c.Title}
                                  </div>
                                ) : (
                                  <div>{c.Title}</div>
                                )}
                              </p>
                            </Link>
                          </div>
                        ))}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`log-out btn_gray fixed z-10 ${
                NavToggle === true ? "!w-[100px]" : "!w-[200px]"
              } bottom-2 text-center flex items-center ml-3 shadow-lg justify-center gap-3 hover:bg-gray-100`}
              onClick={() => alert("User Logged out")}
            >
              <div
                className={` ${
                  NavToggle === true ? "flex" : "hidden md:flex"
                } `}
              >
                <RiLogoutBoxFill
                  className={` ${
                    NavToggle === true ? "hidden md:flex" : "flex"
                  } `}
                />
              </div>
              <div
                className={` ${
                  NavToggle === true ? "flex md:hidden" : "hidden md:flex"
                } `}
              >
                Log out
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------- */}
          <div
            className={`routes px-4 w-full  ${
              NavToggle === true ? "ml-[100px]" : "md:ml-[13pc]"
            } transition-all duration-500`}
          >
            <Routes>
              {/* nav */}
              <Route path="/" element={<Employee_list />} />
              <Route path="/Production" element={<Production />} />
              <Route path="/Production/Small_bale" element={<Small_bail />} />
              <Route
                path="/Production/Small_bale_transfer"
                element={<Small_bail_transfer />}
              />
              <Route path="/Production/big_bail" element={<Big_bail />} />

              <Route path="/Hr" element={<Hr />} />
              <Route path="/Import" element={<Import />} />
              <Route path="/Import/form" element={<Import_form />} />

              <Route path="/Inventory" element={<Inventory />} />

              <Route path="/Form" element={<Form />} />
              <Route path="/Employee_form" element={<Employee_form />} />

              <Route path="/Add_employee" element={<Add_employee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
