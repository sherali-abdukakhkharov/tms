const pg = require('../utils/pg');

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
    throw Error(`statistics repository [getStatistics]:${error}`);
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
    throw Error(`statistics repository [getStatisticsByOrgId]:${error}`);
  }
}

async function getProjectStats() {
  try {
    return await pg(
      false,
      `
      SELECT
        p.id,
        p.name,
        (select count(*) from tasks t where t.project_id = p.id) as tasks_count
      FROM
        projects p
      `
    );
  } catch (error) {
    throw Error(`statistics repository [getProjectStats]:${error}`);
  }
}

module.exports = { getStatistics, getStatisticsByOrgId, getProjectStats };
