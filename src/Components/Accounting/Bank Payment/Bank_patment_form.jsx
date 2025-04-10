
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Bank_patment_form = () => {

    const [Data, setData] = useState({
        id: "",
        date: "",
        head: "",
        cheque: "",
        amount: "",
        tableData: []
      });
    
      function handleData(e) {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
      }

      function handleTableInput(e, index) {
        const { name, value } = e.target;
        const newTableData = [...Data.tableData];
        newTableData[index] = {
          ...newTableData[index],
          [name]: value
        };
        setData({...Data, tableData: newTableData});
      }

      function handleAddRow() {
        const newRow = {
          code: "",
          head: Data.head,
          debit: Data.amount,
          credit: "",
          description: ""
        };
        setData({
          ...Data,
          id: "",
          date: "",
          head: "",
          cheque: "",
          amount: "",
          tableData: [...Data.tableData, newRow]
        });
      }

      function handleDeleteRow(index) {
        const newTableData = Data.tableData.filter((_, i) => i !== index);
        setData({...Data, tableData: newTableData});
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
            <div className="form-body grid md:grid-cols-2 place-items-center p-3">
                <div className="flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">ID :</h2>
                    <input
                        className="input"
                        type="text"
                        name="id"
                        value={Data.id}
                        onChange={handleData}
                    />
                </div>

                <div className="flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Date :</h2>
                    <input
                    className="input"
                    type="date"
                    name="date"
                    value={Data.date}
                    onChange={handleData}
                    />
                </div>
               
                <div className="flex w-[80%] items-center gap-5 p-2">
                    <h2 className="label">Head :</h2>
                    <select className="input text-sm" name="head"
                    value={Data.head}
                    onChange={handleData}
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
                        value={Data.cheque}
                        onChange={handleData}
                        />
                    </div>

                    <div className="flex w-[80%] items-center gap-5 p-2">
                        <h2 className="label">Amount :</h2>
                        <input
                        className="input"
                        type="text"
                        name="amount"
                        value={Data.amount}
                        onChange={handleData}
                        />
                    </div>
                </div>
                <button className='btn_green' onClick={handleAddRow}>Add</button>

    {/* table */}
            <table className="w-full border-collapse border mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">S.No</th>
                  <th className="border p-2">Code</th>
                  <th className="border p-2">Head</th>
                  <th className="border p-2">Debit</th>
                  <th className="border p-2">Credit</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {Data.tableData?.map((row, index) => (
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
                        name="debit"
                        className="w-full p-1"
                        value={row.debit}
                        onChange={(e) => handleTableInput(e, index)}
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        name="credit"
                        className="w-full p-1"
                        value={row.credit}
                        onChange={(e) => handleTableInput(e, index)}
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        name="description"
                        className="w-full p-1"
                        value={row.description}
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

            </div>
            
        </div>

        <pre className="mt-4 p-2 bg-gray-100 rounded">{JSON.stringify(Data, null, 2)}</pre>
    </div>
      )
}

export default Bank_patment_form