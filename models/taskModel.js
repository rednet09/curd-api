let tasks = [];
let currentId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find((task) => task.id === id);

const createTask = (title, description) => {
  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, title, description) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.title = title;
    task.description = description;
  }
  return task;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
