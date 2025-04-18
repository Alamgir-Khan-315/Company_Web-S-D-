import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Bank_patment_form = () => {
    
    const [formData, setFormData] = useState({
        id: "",
        date: "",
        head: "",
        cheque: "",
        amount: ""
    });

    // const [tableData, setTableData] = useState([{
    //     code: "",
    //     head: "",
    //     amount: ""
    // }]);

    const [tableData, setTableData] = useState([
        {
            code: "001",
            head: "Salary",
            amount: "50000"
        },
        {
            code: "002", 
            head: "Rent",
            amount: "25000"
        },
        {
            code: "003",
            head: "Utilities",
            amount: "10000"
        },
        {
            code: "",
            head: "",
            amount: ""
        }
    ]);

    function handleFormData(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleAdd() {
       alert("Form data added")
    }

        function handleTableInput(e, index) {
            const { name, value } = e.target;
            const newTableData = [...tableData];
            newTableData[index] = {
                ...newTableData[index],
                [name]: value
            };
            
            if (index === tableData.length - 1) {
                newTableData.push({
                    code: "",
                    head: "",
                    amount: ""
            });
        }
        
        setTableData(newTableData);
    }


    function handleDeleteRow(index) {
        const newTableData = tableData.filter((_, i) => i !== index);
        setTableData(newTableData);
    }

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
                    <h1 className="text-black cursor-pointer">Bank Payment Form</h1>
                </div>

                <div className="box mt-[1rem] !p-[1rem]">
                    <h1 className="Rounded_Title mb-4">Bank Payment Form</h1>

                    {/* form */}
                    <section>
                        <div className="form-body grid md:grid-cols-2 place-items-center p-3">
                            <div className="flex w-[80%] items-center gap-5 p-2">
                                <h2 className="label">ID :</h2>
                                <input
                                    className="input"
                                    type="text"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleFormData}
                                />
                            </div>

                            <div className="flex w-[80%] items-center gap-5 p-2">
                                <h2 className="label">Date :</h2>
                                <input
                                    className="input"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleFormData}
                                />
                            </div>

                            <div className="flex w-[80%] items-center gap-5 p-2">
                                <h2 className="label">Head :</h2>
                                <select 
                                    className="input text-sm" 
                                    name="head"
                                    value={formData.head}
                                    onChange={handleFormData}
                                >
                                    <option>Select Bank</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>

                            <div className="flex w-[80%] items-center gap-5 p-2">
                                <h2 className="label">Cheque :</h2>
                                <input
                                    className="input"
                                    type="text"
                                    name="cheque"
                                    value={formData.cheque}
                                    onChange={handleFormData}
                                />
                            </div>

                            <div className="flex w-[80%] items-center gap-5 p-2">
                                <h2 className="label">Amount :</h2>
                                <input
                                    className="input"
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleFormData}
                                />
                            </div>
                        </div>

                        <button className='btn_green text-white' onClick={handleAdd}>Add</button>
                    </section>

                    {/* table */}
                    <section>
                        <table className="w-full border-collapse border mt-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2">S.No</th>
                                    <th className="border p-2">Code</th>
                                    <th className="border p-2">Head</th>
                                    <th className="border p-2">Amount</th>
                                    <th className="border p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                name="code"
                                                className="w-full p-1"
                                                value={row.code}
                                                onChange={(e) => handleTableInput(e, index)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="text"
                                                name="head"
                                                className="w-full p-1"
                                                value={row.head}
                                                onChange={(e) => handleTableInput(e, index)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <input
                                                type="number"
                                                name="amount"
                                                className="w-full p-1"
                                                value={row.amount}
                                                onChange={(e) => handleTableInput(e, index)}
                                            />
                                        </td>
                                        <td className="border p-2">
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded"
                                                onClick={() => handleDeleteRow(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button
                            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
                            onClick={() => {
                                alert('Data saved successfully!');
                            }}
                        >
                            Save
                        </button>
                    </section>
                </div>
            </div>

            <pre className="mt-4 p-2 bg-gray-100 rounded">
                Form Data: {JSON.stringify(formData, null, 2)}
                Table Data: {JSON.stringify(tableData, null, 2)}
            </pre>
        </div>
    )
}

export default Bank_patment_form