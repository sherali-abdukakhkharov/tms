module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'modules',
      [
        {
          id: '6dce81f7-0e43-45c5-81a8-e401b700fe34',
          name: 'Foydalanuvchilar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '44942d80-bd8b-4f2b-a327-27e4a3df8970',
          name: 'Tashkilotlar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '4ce70e82-67b2-49c8-997e-41ff296412f5',
          name: 'Tashkilot Xodimlari',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'c10e05aa-6e52-426b-be0b-724ea139ba2c',
          name: 'Loyihalar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '3c04e277-c2e6-4edb-a24d-56e63e53a63e',
          name: 'Vazifalar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '120b62fc-2614-4bdd-8038-1cd36af7d05c',
          name: 'Modullar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '02d04c21-3b2a-4d61-bcae-dd7ed1675db2',
          name: 'Rollar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: '1ae60e95-0d8d-450e-84a8-95ecb2af6539',
          name: 'Rol imkoniyatlari',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'b0b8b2ad-1f55-4d91-94aa-f4e2016240d5',
          name: 'Ruxsatlar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('modules', null, {});
  }
};
