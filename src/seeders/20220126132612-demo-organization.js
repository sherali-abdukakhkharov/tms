'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'organizations',
      [
        {
          id: '7f407dff-e28e-444a-a8c6-ccd3e5a7c960',
          name: 'Unicon',
          created_by: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('organizations', null, {});
  }
};
