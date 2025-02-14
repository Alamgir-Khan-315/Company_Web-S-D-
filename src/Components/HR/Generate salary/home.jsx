import { Link } from "react-router-dom";

import Form from "./Form";

const Home = () => {
  return (
    <div className="main h-full w-full">
      <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
        <Link to="/">
          <h1 className="text hover:text-black cursor-pointer">Home</h1>
        </Link>
        &nbsp; / &nbsp;
        <Link to="/Import">
          <h1 className="text hover:text-black cursor-pointer">HR</h1>
        </Link>
        &nbsp; / &nbsp;
        <h1 className="text-black cursor-pointer">Generate Salary</h1>
      </div>

      <div className="box mt-[1rem] !p-[1rem]">
        <h1 className="Rounded_Title">Generate Salary</h1>

        <Form />
      </div>
    </div>
  );
};

export default Home;
