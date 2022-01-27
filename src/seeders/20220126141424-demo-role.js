module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          name: 'Admin',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          name: 'Rahbar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          name: 'Xodim',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
