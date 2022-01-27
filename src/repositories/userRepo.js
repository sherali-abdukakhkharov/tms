const pg = require('../utils/pg');

async function getById(id) {
  try {
    return await pg(
      true,
      ` SELECT
          u.id,
          u.full_name,
          u.password,
          cr.full_name as created_by,
          u.created_at,
          u.updated_at
        FROM users as u
        LEFT JOIN users as cr on u.created_by = cr.id
        WHERE u.id=$1;`,
      id
    );
  } catch (error) {
    throw Error(`users repository [findById]:${error}`);
  }
}
async function isAdminByUserId(id) {
  try {
    return await pg(
      true,
      ` SELECT
          *
        FROM permissions p
        WHERE p.user_id = $1 and p.role_id = 'f6a7203c-983b-460e-913c-63a1a1c4b94b';`,
      id
    );
  } catch (error) {
    throw Error(`users repository [findById]:${error}`);
  }
}

async function getUsers() {
  try {
    return await pg(
      false,
      ` SELECT
          u.id,
          u.full_name,
          u.password,
          cr.full_name as created_by,
          u.created_at,
          u.updated_at
        FROM users as u
        LEFT JOIN users as cr on u.created_by = cr.id
        ORDER BY u.id desc;
        `
    );
  } catch (error) {
    throw Error(`users repository [getUsers]:${error}`);
  }
}

async function insertUser(full_name, phone_number, password, userId) {
  try {
    return await pg(
      true,
      'INSERT INTO users (full_name, phone_number, password, created_by) VALUES ($1, $2, $3, $4) returning *',
      full_name,
      phone_number,
      password,
      userId
    );
  } catch (error) {
    throw Error(`users repository [insertUser]:${error}`);
  }
}

async function updateUser(args, userId) {
  try {
    const { full_name, password } = args;
    if (full_name && password) {
      return await pg(
        true,
        'UPDATE users SET full_name=$1, password=$2 WHERE id=$3 returning *',
        full_name,
        password,
        userId
      );
    }
    if (full_name) {
      return await pg(
        true,
        'UPDATE users SET full_name=$1 WHERE id=$2 returning *',
        full_name,
        userId
      );
    }
    return await pg(true, 'UPDATE users SET password=$1 WHERE id=$2 returning *', password, userId);
  } catch (error) {
    throw Error(`users repository [updateUser]:${error}`);
  }
}

async function deleteUser(id) {
  try {
    return await pg(false, 'DELETE FROM users WHERE id=$1', id);
  } catch (error) {
    throw Error(`users repository [deleteUser]:${error}`);
  }
}

async function findUserByPhone(phone_number) {
  try {
    return await pg(false, 'SELECT * FROM users WHERE phone_number=$1', phone_number);
  } catch (error) {
    throw Error(`users repository [findUserByPhone]:${error}`);
  }
}

module.exports = {
  getById,
  getUsers,
  insertUser,
  updateUser,
  deleteUser,
  findUserByPhone,
  isAdminByUserId
};
