const pg = require('../utils/pg');
const jwt = require('../utils/jwt');
const { getUserRoles, getUserRoleAccess } = require('../utils/roleAccessQueries');

module.exports = async (method, moduleName, token) => {
  try {
    if (!token) {
      return false;
    }

    const payload = jwt.verify(token);
    const data = await pg(true, getUserRoles, payload.userId);
    const permissions = await pg(true, getUserRoleAccess, data?.roles, moduleName);

    if (!permissions || !permissions[method]) {
      return false;
    }

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};
