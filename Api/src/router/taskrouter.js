const express = require("express");
const router = express.Router();

const taskController = require("../controller/TaskController");

router.get("/", taskController.getAllTasks);

router.post("/", taskController.createTasks);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
module.exports = router;
