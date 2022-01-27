const uuid = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'permissions',
      [
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          user_id: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
