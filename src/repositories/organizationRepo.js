const pg = require('../utils/pg');

async function getById(id) {
  try {
    return await pg(
      true,
      ` SELECT
          *
        FROM organizations
        WHERE id=$1;`,
      id
    );
  } catch (error) {
    throw Error(`organizations repository [findById]:${error}`);
  }
}

async function getOrganizations() {
  try {
    return await pg(
      false,
      ` SELECT
          *
        FROM organizations
        ORDER BY created_at desc;
        `
    );
  } catch (error) {
    throw Error(`organizations repository [getOrganizations]:${error}`);
  }
}

async function insertOrganization(name, userId) {
  try {
    return await pg(
      true,
      'INSERT INTO organizations (name, created_by) VALUES ($1, $2) returning *',
      name,
      userId
    );
  } catch (error) {
    throw Error(`organizations repository [insertOrganization]:${error}`);
  }
}

async function updateOrganization(name, orgId) {
  try {
    return await pg(true, 'UPDATE organizations SET name=$1 WHERE id=$2 returning *', name, orgId);
  } catch (error) {
    throw Error(`organizations repository [updateOrganization]:${error}`);
  }
}

async function deleteOrganization(id) {
  try {
    return await pg(false, 'DELETE FROM organizations WHERE id=$1', id);
  } catch (error) {
    throw Error(`organizations repository [deleteOrganization]:${error}`);
  }
}

async function getStatistics() {
  try {
    return await pg(
      false,
      `
      SELECT  (
        SELECT COUNT(*)
        FROM   organizations
        ) AS organizations_count,
        (
        SELECT COUNT(*)
        FROM   projects
        ) AS projects_count,
        (
        SELECT COUNT(*)
        FROM   tasks
        ) AS tasks_count
      `
    );
  } catch (error) {
    throw Error(`organizations repository [getStatistics]:${error}`);
  }
}

async function getStatisticsByOrgId(id) {
  try {
    return await pg(
      false,
      `
      SELECT
        o.id,
        o.name,
        (select count(*) from projects where projects.org_id = o.id) as projects_count,
        (select count(*) from tasks t join projects p on p.id = t.project_id join organizations o2 on p.org_id = o2.id where p.org_id = $1) as tasks_count
      FROM
        organizations o
      WHERE
        o.id = $1
      `,
      id
    );
  } catch (error) {
    throw Error(`organizations repository [getStatisticsByOrgId]:${error}`);
  }
}

module.exports = {
  getById,
  getOrganizations,
  insertOrganization,
  updateOrganization,
  deleteOrganization,
  getStatistics,
  getStatisticsByOrgId
};
