import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react"; 

const Issuance_form = () => {

    const currentDate = new Date();
    const DateNow = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    const [Data, setData] = useState(""); 
    const handleChildData = (data) => {
        setData(data);
    };
    
    return (
        <div>
            <div className="main h-full w-full bg-gray-200">
                <div className="navigation ml-5 p-2 flex items-center font-semibold text-gray-500">
                    <Link to="/">
                        <h1 className="text hover:text-black cursor-pointer">Home</h1>
                    </Link>
                    &nbsp; / &nbsp;
                    <h1 className="text-black cursor-pointer">Import</h1>
                    &nbsp; / &nbsp;
                    <h1 className="text-black cursor-pointer">Issuance Form</h1>
                </div>
    
                <div className="box mt-[1rem] !p-[1rem]">
                    <h1 className="Rounded_Title mb-4">Issuance Form</h1>
                    <h2 className="md:ml-[80%] font-semibold">Date : {DateNow}</h2>

                    <Form sendDataToParent={handleChildData} />

                    <div className="flex w-[80%] items-center gap-5 p-2">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-lg">
                        Save
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-2 rounded-lg">
                        Update
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-2 rounded-lg">
                        Delete
                        </button>
                    </div>

                    <div className="flex w-[80%] -mt-4 items-center gap-5">
                        <button className="btn_gray">
                            Rags Sum
                        </button>
                        <button className="btn_gray">
                            Daily Rags
                        </button>
                        <button className="btn_gray">
                            Pending Rags
                        </button>
                    </div>

                </div>
            </div>

            <pre className="mt-4 p-2 bg-gray-100 rounded">{JSON.stringify(Data, null, 2)}</pre>
        </div>
    );
}

export default Issuance_form;