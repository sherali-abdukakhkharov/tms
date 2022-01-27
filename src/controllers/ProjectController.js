const repository = require('../repositories/projectRepo');
const auth = require('../middlewares/auth');
const jwt = require('../utils/jwt');
const { MODULES } = require('../../config');

const updateProject = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('update', MODULES.projects, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundProject = await repository.getById(id);
    if (foundProject) {
      const project = await repository.updateProject(req.body, id);
      return res.send(project);
    }
    return res.status(404).send('Project with this ID not found!');
  } catch (error) {
    throw Error(`projects controller [updateProject]:${error}`);
  }
};

const deleteProject = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('delete', MODULES.projects, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const foundProject = await repository.getById(id);
    if (foundProject) {
      await repository.deleteProject(id);
      return res.send('Project successfully deleted!');
    }
    return res.status(404).send('Project with this ID not found!');
  } catch (error) {
    throw Error(`projects controller [deleteProject]:${error}`);
  }
};

const getProjects = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.projects, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const projects = await repository.getProjects();
    return res.send(projects);
  } catch (error) {
    throw Error(`projects controller [getProjects]:${error}`);
  }
};

const getProject = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('read', MODULES.projects, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { id } = req.params;
    const project = await repository.getById(id);
    return res.send(project);
  } catch (error) {
    throw Error(`projects controller [getProject]:${error}`);
  }
};

const insertProject = async (req, res) => {
  try {
    const { token } = req.headers;
    const permission = await auth('insert', MODULES.projects, token);

    if (!permission) {
      return res.send('Permission denied!');
    }
    const { name, org_id } = req.body;

    const payload = jwt.verify(token);

    const project = await repository.insertProject(name, org_id, payload.userId);
    return res.send(project);
  } catch (error) {
    throw Error(`projects controller [insertProject]:${error}`);
  }
};

module.exports = {
  updateProject,
  deleteProject,
  getProjects,
  getProject,
  insertProject
};
