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
        WHERE u.id=$1
        ORDER BY u.id desc;`,
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

async function insertUser(args) {
  try {
    const { fullName, password } = args;
    return await pg(
      false,
      `INSERT INTO users (full_name, password) VALUES ($1, $2)`,
      fullName,
      password
    );
  } catch (error) {
    throw Error(`users repository [insertUser]:${error}`);
  }
}

async function updateUser(args, userId) {
  try {
    const { fullName, password } = args;
    if (fullName && password) {
      return await pg(
        true,
        `UPDATE users SET full_name=$1, password=$2 WHERE id=$3`,
        fullName,
        password,
        userId
      );
    }
    if (fullName) {
      return await pg(true, `UPDATE users SET full_name=$1 WHERE id=$3`, fullName, userId);
    }
    if (password) {
      return await pg(true, `UPDATE users SET password=$1 WHERE id=$3`, password, userId);
    }
  } catch (error) {
    throw Error(`users repository [updateUser]:${error}`);
  }
}

async function deleteUser(id) {
  try {
    return await pg(false, `DELETE FROM user WHERE id=$1`, id);
  } catch (error) {
    throw Error(`users repository [deleteUser]:${error}`);
  }
}

module.exports = {
  getById,
  getUsers,
  insertUser,
  updateUser,
  deleteUser
};
