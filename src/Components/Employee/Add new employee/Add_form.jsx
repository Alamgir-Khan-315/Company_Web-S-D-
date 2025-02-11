import React, { useEffect, useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Add_form = ({ sendDataToParent }) => {

    const [Data, setData] = useState({
        emp_id: "", emp_type: "", gender: "", f_name: "", m_name: "", sur_name: "", designation: "",
        tel_1: "", tel_2: "", mob_num: "", email: "", address_1: "", addres_2: "", city: "", state: "",
        country: "", pincode: "", pob: ""
    });

    function handleInputData(e) {
        const { name, value } = e.target
        setData({ ...Data, [name]: value })
    }

    useEffect(() => {
        sendDataToParent(Data);
    }, [Data]);

    const [Form, setForm] = useState(false);

    return (
        <div>

            <div className="form-body grid md:grid-cols-2 place-items-center p-3">

                <div className="name flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Employee ID :</h2>
                    <input className="input" type="text" name="emp_id" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Employee Type :</h2>
                    <select className="input" id="" name="emp_type" onChange={handleInputData}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Gender :</h2>
                    <select className="input" id="" name="gender" onChange={handleInputData}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="slection flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">First Name :</h2>
                    <input className="input" type="" name="f_name" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Middle Name :</h2>
                    <input className="input" type="" name="m_name" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Sur Name :</h2>
                    <input className="input" type="" name="sur_name" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Designation :</h2>
                    <select className="input" id="" name="designation" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>


            </div>

            <div className="communication-details container mx-auto my-2 p-4 rounded-lg text-xl font-bold bg-gray-100 flex justify-between">
                <div className="text">Communication details</div>
                <div className="icon text-xl mr-5" onClick={() => setForm(!Form)}>
                    {Form === true ? <FaMinusCircle /> : <FaPlusCircle />}
                </div>
            </div>


            <div className={`form-body grid md:grid-cols-2 place-items-center p-3 transition-all duration-500 ${Form === true ? 'flex' : 'hidden'}`}>

                <div className="slection flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Tel No 1 :</h2>
                    <input className="input" type="" name="tel_1" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Tell No 2 :</h2>
                    <input className="input" type="" name="tel_2" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Mobile No :</h2>
                    <input className="input" type="" name="mob_num" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Email :</h2>
                    <input className="input" type="" name="email" onChange={handleInputData} />
                </div>

                <div className="slection flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Address Line 1 :</h2>
                    <input className="input" type="" name="address_1" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Address Line 2 :</h2>
                    <input className="input" type="" name="address_2" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">City :</h2>
                    <input className="input" type="" name="city" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">State :</h2>
                    <input className="input" type="" name="state" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Country :</h2>
                    <input className="input" type="" name="country" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Pincode :</h2>
                    <input className="input" type="" name="pincode" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Place Of Birth :</h2>
                    <input className="input" type="" name="pob" onChange={handleInputData} />
                </div>

            </div>

        </div>
    )
}

export default Add_form
