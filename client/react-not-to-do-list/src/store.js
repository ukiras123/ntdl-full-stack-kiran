import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/DisplayTaskSlice";

const Store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
export default Store;
