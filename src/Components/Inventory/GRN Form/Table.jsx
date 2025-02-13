import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const Table = ({ TableData }) => {
  const Column = [
    { Title: "Code" },
    { Title: "Discription" },
    { Title: "Qty" },
    { Title: "Weight" },
    { Title: "Action", class: "w-[100px]" },
  ];

  function HandleDelete() {
    alert("deleted");
  }

  return (
    <div>
      <table className="w-full p-2 my-3">
        <thead>
          <tr className="thead">
            {Column.map((c, i) => (
              <th className={`border p-2 ${c.class}`}>{c.Title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((data, index) => (
            <tr key={index}>
              <td className="border p-2"></td>
              <td className="border p-2">{data.item}</td>
              <td className="border p-2">{data.qty}</td>
              <td className="border p-2">{data.weight}</td>
              <td className="border p-2">
                <div className="action w-fit flex mx-auto gap-2">
                  <div
                    className="edit_badge"
                    onClick={() => EditUser(d["s.no"])}
                  >
                    <CiEdit />
                  </div>
                  <div className="del_badge" onClick={HandleDelete}>
                    <MdOutlineDelete />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
