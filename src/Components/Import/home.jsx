import { Link } from "react-router-dom";
// import Form from "./Form/Form";
// import Table from "../Common Component/Table";
import Taable from "./Table";

const Home = () => {
  // const TableData = [
  //   { Title: "Title 1", Data: "Data 1" },
  //   { Title: "Title 2", Data: "Data 2" },
  //   { Title: "Title 3", Data: "Data 3" },
  // ];

  return (
    <div>
      <div className="main h-full w-full">
        <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
          <Link to="/">
            <h1 className="text hover:text-black cursor-pointer">Home</h1>
          </Link>
          &nbsp; / &nbsp;
          <h1 className="text-black cursor-pointer">Import</h1>
        </div>

        <div className="box mt-[1rem] !p-[1rem]">
          <div className="title">
            <h1 className="heading">Import Form</h1>
          </div>

          {/* table */}
          <div className="search flex justify-between items-center">
            <input
              type="text"
              className="input !w-fit my-4"
              placeholder="Search..."
            />
            <Link to="/Import/form">
              <div className="btn_blue text-white !-mt-1">Add New</div>
            </Link>
          </div>
          <div>
            {/* <Table TableData={TableData} /> */}
            <Taable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
