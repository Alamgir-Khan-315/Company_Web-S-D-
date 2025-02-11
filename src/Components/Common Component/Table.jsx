import React from "react";

const Table = ({ TableData }) => {
  return (
    <div className="">
      <table className="w-full p-2 my-3">
        <thead className="thead">
          <tr className="border-b-2 border-gray-100">
            {TableData.map((t, i) => (
              <td key="i" className="td">
                {t.Title}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-2 border-gray-100">
            {TableData.map((t, i) => (
              <td key="i" className="td">
                {t.Data}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
