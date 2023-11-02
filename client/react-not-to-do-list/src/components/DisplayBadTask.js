import React from "react";
import { useSelector } from "react-redux";

const DisplayBadTask = ({ handleOnDelete, switchTask }) => {
  const { taskList } = useSelector((state) => state.tasks);
  const badArray = taskList.filter((task) => task.type === "bad");

  return (
    <table className="table table-striped table-hover border">
      <tbody id="bad">
        {badArray.map((item, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>{item.hrs}</td>
            <td>
              <button
                className="btn btn-sm btn-success"
                onClick={() => switchTask(item._id, "entry")}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleOnDelete(item._id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayBadTask;
