import React, { useEffect, useState } from 'react'

const Detail = ({ sendDataToParent }) => {

    const [Data, setData] = useState({
        id: "", name: "", f_name: "", designation: "", department: "", cost_center: "", floor: "", sex: "",
        salary: "", doj: "", dol: "", uom: "", status: ""
    });

    function handleInputData(e) {
        const { name, value } = e.target
        setData({ ...Data, [name]: value })
    }

    useEffect(() => {
        sendDataToParent(Data);
    }, [Data]);

    return (
        <div>

            <div className="form-body grid md:grid-cols-2 place-items-center p-3">

                <div className="name flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">ID :</h2>
                    <input className="input" type="text" name="id" onChange={handleInputData} />
                </div>

                <div className="slection flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Name :</h2>
                    <input className="input" type="" name="name" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Father Name :</h2>
                    <input className="input" type="" name="f_name" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Designation :</h2>
                    <select className="input" id="" name="designation" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>


                <div className="packing flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Department :</h2>
                    <select className="input" id="" name="department" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="packing flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Cost Center :</h2>
                    <select className="input" id="" name="cost_center" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="packing flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Floor :</h2>
                    <select className="input" id="" name="floor" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="packing flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Sex :</h2>
                    <select className="input" id="" name="sex" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Salary :</h2>
                    <input className="input" type="" name="salary" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">DOJ :</h2>
                    <input className="input" type="" name="doj" onChange={handleInputData} />
                </div>

                <div className="bail-size flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">DOL :</h2>
                    <input className="input" type="" name="dol" onChange={handleInputData} />
                </div>

                <div className="packing flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Status :</h2>
                    <select className="input" id="" name="status" onChange={handleInputData}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default Detail
