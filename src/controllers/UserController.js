const repository = require('../repositories/userRepo');
const auth = require('../middlewares/auth');
const jwt = require('../utils/jwt');
const { MODULES } = require('../../config');

const updateUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('update', MODULES.users, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundUser = await repository.getById(id);
    if (foundUser) {
      const user = await repository.updateUser(req.body, id);
      res.send(user);
    } else {
      res.status(404).send('User with this ID not found!');
    }
  } catch (error) {
    throw Error(`users controller [updateUser]:${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('delete', MODULES.users, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundUser = await repository.getById(id);
    if (foundUser) {
      const user = await repository.deleteUser(id);
      return res.send('User successfully deleted!');
    }
    res.status(404).send('User with this ID not found!');
  } catch (error) {
    throw Error(`users controller [deleteUser]:${error}`);
  }
};

const getUsers = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.users, token);
    console.log(permission);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const users = await repository.getUsers();
    res.send(users);
  } catch (error) {
    throw Error(`users controller [getUsers]:${error}`);
  }
};

const getUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.users, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const user = await repository.getById(id);
    res.send(user);
  } catch (error) {
    throw Error(`users controller [getUser]:${error}`);
  }
};

const insertUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('insert', MODULES.users, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const phone_number = req.body.phone_number.replace('+', '');
    const { full_name, password } = req.body;

    const payload = jwt.verify(token);

    const user = await repository.insertUser(full_name, phone_number, password, payload.userId);
    res.send(user);
  } catch (error) {
    throw Error(`users controller [insertUser]:${error}`);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  updateUser,
  getUsers,
  getUser,
  insertUser
};
