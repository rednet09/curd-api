const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../models/taskModel");

const getTasks = (req, res, next) => {
  try {
    const tasks = getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

const getTask = (req, res, next) => {
  try {
    const task = getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

const createNewTask = (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      return res
        .status(400)
        .json({ message: "Title and description are required" });

    const newTask = createTask(title, description);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

const updateExistingTask = (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      return res
        .status(400)
        .json({ message: "Title and description are required" });

    const task = updateTask(parseInt(req.params.id), title, description);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

const deleteExistingTask = (req, res, next) => {
  try {
    const success = deleteTask(parseInt(req.params.id));
    if (!success) return res.status(404).json({ message: "Task not found" });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
  getTask,
  createNewTask,
  updateExistingTask,
  deleteExistingTask,
};
