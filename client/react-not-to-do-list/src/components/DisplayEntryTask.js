import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList } from "./DisplayTaskSlice";
import axios from "axios";

const DisplayTask = ({ handleOnDelete, switchTask }) => {
  const { taskList } = useSelector((state) => state.tasks);
  const entryArray = taskList.filter(
    (task) => task.type === "entry" || task.type === "good"
  );

  const dispatch = useDispatch();

  return (
    <table className="table table-striped table-hover border">
      <tbody id="entry">
        {entryArray.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>{item.hrs}</td>
            {/* <id>{item.id}</id> */}
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleOnDelete(item._id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={() => switchTask(item._id, "bad")}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTask;
