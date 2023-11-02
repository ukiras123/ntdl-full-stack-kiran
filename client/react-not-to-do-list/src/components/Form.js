import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskList } from "./DisplayTaskSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { createTaskAction } from "./DisplayAction";

const Form = ({ total }) => {
  const [title, setTitle] = useState("");
  const [hrs, setHrs] = useState("");
  const hoursPerWeek = 24 * 7;

  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.tasks);

  // const data = [...taskList];
  const handleOnChangeHr = (e) => {
    const { value } = e.target;
    setHrs(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const body = {
      title,
      hrs,
      type: "entry",
    };

    const ttl = total;

    if (ttl + +hrs > hoursPerWeek) {
      return alert("You have exceeded the total hours per week");
    }
    dispatch(createTaskAction(body));
  };
  const handleOnChangeTask = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <>
      <form
        // method='Post'
        onSubmit={handleOnSubmit}
      >
        <div className="row g-2 mt-5 border  rounded-4 p-3 bg-light shadow-lg">
          <div className="col-md-7">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Your Task"
              aria-label="First name"
              onChange={handleOnChangeTask}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              name="hr"
              type="number"
              className="form-control"
              placeholder="33"
              aria-label="Last name"
              onChange={handleOnChangeHr}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus" style={{ color: "#fcfcfd" }}></i>
              Add new Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
