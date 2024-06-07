const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  createNewTask,
  updateExistingTask,
  deleteExistingTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createNewTask);
router.put("/:id", updateExistingTask);
router.delete("/:id", deleteExistingTask);

module.exports = router;
