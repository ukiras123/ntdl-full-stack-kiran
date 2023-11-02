const Task = require("../model/Task");
const {
  API_STATUS: { FAILURE, SUCCESS },
} = require("../utils/const");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({
      status: SUCCESS,
      data: tasks,
    });
  } catch (e) {
    res.staus(500).json({
      status: FAILURE,
      message: `something went wrong - ${e.message}`,
    });
  }
};

const createTasks = async (req, res) => {
  try {
    const { body } = req;
    const tasks = await Task.create(body);
    res.status(201).json({
      staus: SUCCESS,
      data: tasks,
    });
  } catch (e) {
    res.staus(500).json({
      status: FAILURE,
      message: `something went wrong - ${e.message}`,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Task.findByIdAndUpdate(id, body);
    res.json({
      status: SUCCESS,
    });
  } catch (e) {
    res.staus(500).json({
      status: FAILURE,
      message: `something went wrong - ${e.message}`,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const tasks = await Task.findByIdAndDelete(id);
    res.json({
      staus: SUCCESS,
      data: tasks,
    });
  } catch (e) {
    res.staus(500).json({
      status: FAILURE,
      message: `something went wrong - ${e.message}`,
    });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  updateTask,
  deleteTask,
};
