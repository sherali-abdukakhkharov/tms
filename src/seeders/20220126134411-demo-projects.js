'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          id: '09159ed4-70ee-4d3b-a817-53a623aa2f28',
          name: 'Task Management System',
          org_id: '7f407dff-e28e-444a-a8c6-ccd3e5a7c960',
          created_by: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
