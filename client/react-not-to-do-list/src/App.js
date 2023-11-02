import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import DisplayTask from "./components/DisplayEntryTask";
import DisplayBadTask from "./components/DisplayBadTask";
import { useDispatch, useSelector } from "react-redux";
import { setTaskList } from "./components/DisplayTaskSlice";
import { useEffect } from "react";
import {
  deleteTaskAction,
  getAllTasksAction,
} from "./components/DisplayAction";
import { switchTaskAction } from "./components/DisplayAction";

function App() {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // const params = useParams
  useEffect(() => {
    dispatch(getAllTasksAction());
  }, [dispatch]);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteTaskAction(id));
    }
  };

  const switchTask = (id, type) => {
    dispatch(switchTaskAction(id, { type }));
  };

  const total = () => {
    const ttl = taskList.reduce((acc, item) => acc + +item.hrs, 0);
    return ttl;
  };

  const badttl = taskList.reduce(
    (acc, item) => (item.type === "bad" ? acc + +item.hrs : acc),
    0
  );

  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title  --> */}
        <Title />
        {/* <!-- form area  --> */}
        <Form setTaskList={setTaskList} total={total} />
        {/* <!-- table area  --> */}
        <div className="row mt-5">
          <div className="col-md">
            <h3>Task Entry List</h3>
            <hr />

            <DisplayTask
              taskList={taskList}
              handleOnDelete={handleOnDelete}
              switchTask={switchTask}
            />
          </div>
          <div className="col-md">
            <h3>Bad List</h3>
            <hr />
            <DisplayBadTask
              handleOnDelete={handleOnDelete}
              switchTask={switchTask}
            />
            <p>
              You could have saved = <span id="badTotal">{badttl}</span> hr
            </p>
            {/* <!-- total hours  --> */}
            <div>
              Total hour per week allocated = <span id="total"> {total()}</span>
              hr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
