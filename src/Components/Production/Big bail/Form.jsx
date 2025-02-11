import React, { useEffect, useState } from 'react'

const Form = ({ sendDataToParent }) => {

    const [Data, setData] = useState({
        id: "", name: "", section: "", catogary: "", qty: "", date: "", lbs: "", machine_no: ""
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

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Name :</h2>
                    <input className="input" type="text" name="name" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Section :</h2>
                    <input className="input" type="text" name="section" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Catogary :</h2>
                    <input className="input" type="number" name="catogary" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Qty :</h2>
                    <input className="input" type="number" name="qty" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Date :</h2>
                    <input className="input" type="number" name="date" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Lbs :</h2>
                    <input className="input" type="number" name="lbs" onChange={handleInputData} />
                </div>

                <div className="weight flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label !w-[9pc]">Machine # :</h2>
                    <input className="input" type="number" name="machine_no" onChange={handleInputData} />
                </div>

            </div>
        </div>
    )
}

export default Form
