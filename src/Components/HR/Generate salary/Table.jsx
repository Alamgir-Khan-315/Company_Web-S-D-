import React from "react";

const Table = () => {
  return (
    <div>
      <table className="w-full table-auto p-2 my-5">
        <thead className="thead">
          <tr className="text-center border-2 border-gray-200">
            <td className="td border border-gray-200">Days</td>
            <td className="td border">Allowance</td>
            <td className="td">Conveyance</td>
            <td className="td">Overtime</td>
            <td className="td">Transport</td>
            <td className="td">1</td>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-2 border-gray-100">
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td">#</td>
                    <td className="td">ID</td>
                    <td className="td">Name</td>
                    <td className="td">Section</td>
                    <td className="td">G_Sal</td>
                    <td className="bg-white">Total</td>
                    <td className="bg-white">P</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b-2 border-gray-100">
                    <td className="td">1</td>
                    <td className="td">2</td>
                    <td className="td">3</td>
                    <td className="td">4</td>
                    <td className="td">5</td>
                    <td className="td">6</td>
                    <td className="td">
                      <input
                        className="w-[3pc] h-full px-1"
                        type="text"
                        placeholder="0"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td">Salary</td>
                    <td className="td bg-white">E</td>
                    <td className="td bg-white">Attendence</td>
                    <td className="td bg-white">E</td>
                    <td className="td bg-white">New</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-gray-100">
                    <td className="td">1</td>
                    <td className="td">2</td>
                    <td className="td">3</td>
                    <td className="td">4</td>
                    <td className="td">5</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td bg-white">Actual</td>
                    <td className="td bg-white">Adjusted</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-gray-100">
                    <td className="td">1</td>
                    <td className="td">2</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td bg-white">HR</td>
                    <td className="td bg-white">Amount</td>
                    <td className="td bg-white">Sunday</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-gray-100">
                    <td className="td">1</td>
                    <td className="td">2</td>
                    <td className="td">3</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td bg-white">Sunday</td>
                    <td className="td bg-white">OT</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-gray-100">
                    <td className="td">1</td>
                    <td className="td">2</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td key="i" className="td">
              <table className="w-full">
                <thead className="thead">
                  <tr className="border-b-2 border-gray-100">
                    <td className="td">Loan</td>
                    <td className="td">Advnc</td>
                    <td className="td">Food</td>
                    <td className="td">Extra</td>
                    <td className="td">N_Total</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b-2 border-gray-100">
                    <td className="td">
                      <input
                        className="w-[3pc] px-1"
                        type="text"
                        placeholder="0"
                      />
                    </td>
                    <td className="td">
                      <input
                        className="w-[3pc] px-1"
                        type="text"
                        placeholder="0"
                      />
                    </td>
                    <td className="td">3</td>
                    <td className="td">
                      <input
                        className="w-[3pc] px-1"
                        type="text"
                        placeholder="0"
                      />
                    </td>
                    <td className="td">5</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
