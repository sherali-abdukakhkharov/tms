'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          full_name: 'Foydalanuvchi 1',
          password: '12345678',
          created_by: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          full_name: 'Foydalanuvchi 2',
          password: '12345678',
          created_by: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          full_name: 'Foydalanuvchi 3',
          password: '12345678',
          created_by: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
