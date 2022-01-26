'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'modules',
      [
        {
          id: 1,
          name: 'Foydalanuvchilar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Tashkilotlar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Tashkilot Xodimlari',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: 'Loyihalar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: 'Vazifalar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          name: 'Modullar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          name: 'Rollar',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          name: 'Rol imkoniyatlari',
          is_active: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
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
