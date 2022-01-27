const repository = require('../repositories/taskRepo');
const auth = require('../middlewares/auth');
const jwt = require('../utils/jwt');
const { MODULES } = require('../../config');

const updateTask = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('update', MODULES.tasks, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundTask = await repository.getById(id);
    if (foundTask) {
      const task = await repository.updateTask(req.body, id);
      return res.send(task);
    }
    return res.status(404).send('User with this ID not found!');
  } catch (error) {
    throw Error(`tasks controller [updateTask]:${error}`);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('delete', MODULES.tasks, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundTask = await repository.getById(id);
    if (foundTask) {
      await repository.deleteTask(id);
      return res.send('Task successfully deleted!');
    }
    return res.status(404).send('Task with this ID not found!');
  } catch (error) {
    throw Error(`tasks controller [deleteTask]:${error}`);
  }
};

const getTasks = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.tasks, token);
    console.log(permission);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const tasks = await repository.getTasks();
    return res.send(tasks);
  } catch (error) {
    throw Error(`tasks controller [getTasks]:${error}`);
  }
};

const getTask = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.tasks, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const task = await repository.getById(id);
    return res.send(task);
  } catch (error) {
    throw Error(`tasks controller [getTask]:${error}`);
  }
};

const insertTask = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('insert', MODULES.tasks, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { project_id, due_date, worker_user_id } = req.body;

    const payload = jwt.verify(token);

    const task = await repository.insertTask(project_id, due_date, worker_user_id, payload.userId);
    return res.send(task);
  } catch (error) {
    throw Error(`tasks controller [insertTask]:${error}`);
  }
};

module.exports = {
  updateTask,
  deleteTask,
  getTasks,
  getTask,
  insertTask
};
