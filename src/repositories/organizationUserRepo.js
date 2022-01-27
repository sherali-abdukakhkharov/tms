const pg = require('../utils/pg');

async function getById(id) {
  try {
    return await pg(
      true,
      ` SELECT
          *
        FROM organization_users
        WHERE id=$1;`,
      id
    );
  } catch (error) {
    throw Error(`organization users repository [findById]:${error}`);
  }
}

async function getOrganizationUsers() {
  try {
    return await pg(
      false,
      ` SELECT
          *
        FROM organization_users
        ORDER BY created_at desc;
        `
    );
  } catch (error) {
    throw Error(`organization users repository [getOrganizationUsers]:${error}`);
  }
}

async function insertOrganizationUser(orgId, userId) {
  try {
    return await pg(
      true,
      'INSERT INTO organization_users (org_id, user_id) VALUES ($1, $2) returning *',
      orgId,
      userId
    );
  } catch (error) {
    throw Error(`organization users repository [insertOrganizationUser]:${error}`);
  }
}

async function updateOrganizationUser(args, orgUserId) {
  try {
    const { org_id, user_id } = args;
    return await pg(
      true,
      'UPDATE organization_users SET org_id=$1, user_id=$2 WHERE id=$3 returning *',
      org_id,
      user_id,
      orgUserId
    );
  } catch (error) {
    throw Error(`organization users repository [updateOrganizationUser]:${error}`);
  }
}

async function deleteOrganizationUser(id) {
  try {
    return await pg(false, 'DELETE FROM organization_users WHERE id=$1', id);
  } catch (error) {
    throw Error(`organization users repository [deleteOrganizationUser]:${error}`);
  }
}

module.exports = {
  getById,
  getOrganizationUsers,
  insertOrganizationUser,
  updateOrganizationUser,
  deleteOrganizationUser
};
