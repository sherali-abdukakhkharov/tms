'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'organization_users',
      [
        {
          id: 'ad9921ae-8af7-40d2-b5ec-a159df9d6db7',
          org_id: '7f407dff-e28e-444a-a8c6-ccd3e5a7c960',
          user_id: '6a68c0a4-dd64-40f9-97ce-3e2c2d75f870',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('organization_users', null, {});
  }
};
