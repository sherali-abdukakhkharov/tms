const repository = require('../repositories/organizationRepo');
const auth = require('../middlewares/auth');
const jwt = require('../utils/jwt');
const { MODULES } = require('../../config');

const updateOrganization = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('update', MODULES.organizations, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundOrganization = await repository.getById(id);
    if (foundOrganization) {
      const organization = await repository.updateOrganization(req.body, id);
      return res.send(organization);
    }
    return res.status(404).send('Organization with this ID not found!');
  } catch (error) {
    throw Error(`organization controller [updateOrganization]:${error}`);
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('delete', MODULES.organizations, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundOrganization = await repository.getById(id);
    if (foundOrganization) {
      await repository.deleteOrganization(id);
      return res.send('Organization successfully deleted!');
    }
    return res.status(404).send('Organization with this ID not found!');
  } catch (error) {
    throw Error(`organization controller [deleteUser]:${error}`);
  }
};

const getOrganizations = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.organizations, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const organizations = await repository.getOrganizations();
    return res.send(organizations);
  } catch (error) {
    throw Error(`organization controller [getOrganizations]:${error}`);
  }
};

const getOrganization = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.organizations, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const organization = await repository.getById(id);
    return res.send(organization);
  } catch (error) {
    throw Error(`organization controller [getOrganization]:${error}`);
  }
};

const insertOrganization = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('insert', MODULES.organizations, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { name } = req.body;

    const payload = jwt.verify(token);

    const organization = await repository.insertOrganization(name, payload.userId);
    return res.send(organization);
  } catch (error) {
    throw Error(`organization controller [insertOrganization]:${error}`);
  }
};

module.exports = {
  updateOrganization,
  deleteOrganization,
  getOrganizations,
  getOrganization,
  insertOrganization
};
