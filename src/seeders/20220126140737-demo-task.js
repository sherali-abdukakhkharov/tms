'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          id: 1,
          created_by: 1,
          project_id: 1,
          due_date: '2022-02-26T14:08:45.193Z',
          worker_user_id: 1,
          status: 'CREATED',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
