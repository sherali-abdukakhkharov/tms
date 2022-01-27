const repository = require('../repositories/userRepo');

const updateUser = async (req, res) => {
  try {
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
    const { id } = req.params;
    const foundUser = await repository.getById(id);
    if (foundUser) {
      const user = await repository.deleteUser(id);
      res.send(user);
    }
    res.status(404).send('User with this ID not found!');
  } catch (error) {
    throw Error(`users controller [deleteUser]:${error}`);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await repository.getUsers();
    res.send(users);
  } catch (error) {
    throw Error(`users controller [getUsers]:${error}`);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await repository.getById(id);
    res.send(user);
  } catch (error) {
    throw Error(`users controller [getUser]:${error}`);
  }
};

const insertUser = async (req, res) => {
  try {
    const user = await repository.insertUser(req.body);
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
