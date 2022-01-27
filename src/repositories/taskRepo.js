const pg = require('../utils/pg');

async function getById(id) {
  try {
    return await pg(
      true,
      ` SELECT
          *
        FROM tasks
        WHERE id=$1;`,
      id
    );
  } catch (error) {
    throw Error(`tasks repository [findById]:${error}`);
  }
}

async function getTasks() {
  try {
    return await pg(
      false,
      ` SELECT
         *
        FROM tasks
        ORDER BY created_at desc;
        `
    );
  } catch (error) {
    throw Error(`tasks repository [getTasks]:${error}`);
  }
}

async function insertTask(project_id, due_date, worker_user_id, userId) {
  try {
    return await pg(
      true,
      'INSERT INTO tasks (project_id, due_date, worker_user_id, created_by) VALUES ($1, $2, $3, $4) returning *',
      project_id,
      due_date,
      worker_user_id,
      userId
    );
  } catch (error) {
    throw Error(`tasks repository [insertTask]:${error}`);
  }
}

async function updateTask(args, taskId) {
  try {
    // prettier-ignore
    const {
      project_id,
      due_date,
      worker_user_id,
      status
    } = args;
    return await pg(
      true,
      'UPDATE task SET project_id=$1, due_date=$2, worker_user_id=$3, status=$4 WHERE id=$5 returning *',
      project_id,
      due_date,
      worker_user_id,
      status,
      taskId
    );
  } catch (error) {
    throw Error(`tasks repository [updateTask]:${error}`);
  }
}

async function deleteTask(id) {
  try {
    return await pg(false, 'DELETE FROM tasks WHERE id=$1', id);
  } catch (error) {
    throw Error(`tasks repository [deleteTask]:${error}`);
  }
}

module.exports = {
  getById,
  getTasks,
  insertTask,
  updateTask,
  deleteTask
};
