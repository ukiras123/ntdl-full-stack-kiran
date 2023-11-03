import axios from "axios";
import { setTaskList } from "./DisplayTaskSlice";

const API_PATH = process.env.NODE_ENV !== "production" ? "/" : "/";

export const getAllTasksAction = () => async (dispatch) => {
  try {
    console.log("Getting all tasks");
    const { data } = await axios.get(`${API_PATH}api/v1/task`);
    console.log("Data", data);
    dispatch(setTaskList(data.data));
  } catch (e) {
    console.log("error", e);
  }
};

export const createTaskAction = (obj) => async (dispatch) => {
  try {
    console.log("Getting all tasks");
    const { data } = await axios.post(`${API_PATH}api/v1/task`, obj);
    console.log("Data", data);
    dispatch(getAllTasksAction());
  } catch (e) {
    console.log("error", e);
  }
};

export const deleteTaskAction = (id) => async (dispatch) => {
  console.log(id);
  try {
    console.log("Getting all tasks");
    const { data } = await axios.delete(`${API_PATH}api/v1/task/${id}`);
    console.log("Data", data);
    dispatch(getAllTasksAction());
  } catch (e) {
    console.log("error", e);
  }
};
export const switchTaskAction = (id, type) => async (dispatch) => {
  console.log(id);
  try {
    console.log("Getting all tasks");
    const { data } = await axios.patch(`${API_PATH}api/v1/task/${id}`, type);

    dispatch(getAllTasksAction());
  } catch (e) {
    console.log("error", e);
  }
};
