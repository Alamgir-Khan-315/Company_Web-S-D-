import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from './Form'

const COA_Form = () => {

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
            <h1 className="text hover:text-black cursor-pointer">Accounting</h1>
            &nbsp; / &nbsp;
            <h1 className="text-black cursor-pointer">COA Form</h1>
        </div>

        <div className="box mt-[1rem] !p-[1rem]">
            <h1 className="Rounded_Title mb-4">COA Form</h1>
            <Form sendDataToParent={handleChildData} />
            <buton className="btn_green text-white font-bold">Submit</buton>
        </div>
        
    </div>

    <pre className="mt-4 p-2 bg-gray-100 rounded">{JSON.stringify(Data, null, 2)}</pre>
</div>
  )
}

export default COA_Form