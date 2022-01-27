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
        ORDER BY u.created_at desc;
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

module.exports = {
  getById,
  getOrganizations,
  insertOrganization,
  updateOrganization,
  deleteOrganization
};
