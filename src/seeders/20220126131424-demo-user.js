module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          full_name: 'Foydalanuvchi 1',
          phone_number: '901234567',
          password: '12345678',
          created_by: null,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '9b5dd9ef-e3b1-4211-8a41-e73b14651013',
          full_name: 'Foydalanuvchi 2',
          phone_number: '911234567',
          password: '12345678',
          created_by: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '6a68c0a4-dd64-40f9-97ce-3e2c2d75f870',
          full_name: 'Foydalanuvchi 3',
          phone_number: '921234567',
          password: '12345678',
          created_by: '9b5dd9ef-e3b1-4211-8a41-e73b14651013',
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
