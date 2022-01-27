const repository = require('../repositories/organizationUserRepo');
const auth = require('../middlewares/auth');
const jwt = require('../utils/jwt');
const { MODULES } = require('../../config');

const updateOrganizationUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('update', MODULES.organizationUsers, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundOrganizationUser = await repository.getById(id);
    if (foundOrganizationUser) {
      const organizationUser = await repository.updateOrganizationUser(req.body, id);
      return res.send(organizationUser);
    }
    return res.status(404).send('Organization with this ID not found!');
  } catch (error) {
    throw Error(`organization users controller [updateOrganization]:${error}`);
  }
};

const deleteOrganizationUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('delete', MODULES.organizationUsers, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundOrganizationUser = await repository.getById(id);
    if (foundOrganizationUser) {
      await repository.deleteOrganizationUser(id);
      return res.send('Organization user successfully deleted!');
    }
    return res.status(404).send('Organization user with this ID not found!');
  } catch (error) {
    throw Error(`organization users controller [deleteOrganizationUser]:${error}`);
  }
};

const getOrganizationUsers = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.organizationUsers, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const organizationUsers = await repository.getOrganizationUsers();
    return res.send(organizationUsers);
  } catch (error) {
    throw Error(`organization users controller [getOrganizationUsers]:${error}`);
  }
};

const getOrganizationUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.organizationUsers, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const organizationUser = await repository.getById(id);
    return res.send(organizationUser);
  } catch (error) {
    throw Error(`organization users controller [getOrganizationUser]:${error}`);
  }
};

const insertOrganizationUser = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('insert', MODULES.organizationUsers, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { org_id, user_id } = req.body;

    const payload = jwt.verify(token);

    const organizationUser = await repository.insertOrganizationUser(
      org_id,
      user_id,
      payload.userId
    );
    return res.send(organizationUser);
  } catch (error) {
    throw Error(`organization users controller [insertOrganizationUser]:${error}`);
  }
};

module.exports = {
  updateOrganizationUser,
  deleteOrganizationUser,
  getOrganizationUsers,
  getOrganizationUser,
  insertOrganizationUser
};
