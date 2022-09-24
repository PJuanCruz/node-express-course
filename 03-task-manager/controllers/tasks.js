const { createAppError } = require('../errors/custom-error');
const asyncWrapper = require('../middlewares/async');
const Task = require('../models/Task');

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    return next(createAppError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createAppError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).send({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);
  if (!task) {
    return next(createAppError(`No task with id: ${taskId}`, 404));
  }
  res.status(200).send({ task: null });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
