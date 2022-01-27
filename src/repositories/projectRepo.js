const pg = require('../utils/pg');

async function getById(id) {
  try {
    return await pg(
      true,
      ` SELECT
          *
        FROM projects
        WHERE id=$1;`,
      id
    );
  } catch (error) {
    throw Error(`projects repository [getById]:${error}`);
  }
}

async function getProjects() {
  try {
    return await pg(
      false,
      ` SELECT
          *
        FROM projects
        ORDER BY u.created_at desc;
        `
    );
  } catch (error) {
    throw Error(`projects repository [getProjects]:${error}`);
  }
}

async function insertProject(name, orgId, userId) {
  try {
    return await pg(
      true,
      'INSERT INTO projects (name, org_id, created_by) VALUES ($1, $2, $3) returning *',
      name,
      orgId,
      userId
    );
  } catch (error) {
    throw Error(`projects repository [insertProject]:${error}`);
  }
}

async function updateProject(args, projectId) {
  try {
    const { name, org_id } = args;
    return await pg(
      true,
      'UPDATE projects SET name=$1, org_id=$2 WHERE id=$3 returning *',
      name,
      org_id,
      projectId
    );
  } catch (error) {
    throw Error(`projects repository [updateProject]:${error}`);
  }
}

async function deleteProject(id) {
  try {
    return await pg(false, 'DELETE FROM projects WHERE id=$1', id);
  } catch (error) {
    throw Error(`projects repository [deleteProject]:${error}`);
  }
}

module.exports = {
  getById,
  getProjects,
  insertProject,
  updateProject,
  deleteProject
};
