'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'role_access',
      [
        {
          id: 1,
          role_id: 1,
          module_id: 1,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          role_id: 1,
          module_id: 2,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          role_id: 1,
          module_id: 3,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          role_id: 1,
          module_id: 4,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          role_id: 1,
          module_id: 5,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          role_id: 1,
          module_id: 6,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          role_id: 1,
          module_id: 7,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          role_id: 1,
          module_id: 8,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          role_id: 1,
          module_id: 9,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          role_id: 2,
          module_id: 1,
          insert: false,
          read: true,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          role_id: 2,
          module_id: 2,
          insert: false,
          read: true,
          update: true,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          role_id: 2,
          module_id: 3,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          role_id: 2,
          module_id: 4,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          role_id: 2,
          module_id: 5,
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          role_id: 2,
          module_id: 6,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          role_id: 2,
          module_id: 7,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          role_id: 2,
          module_id: 8,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          role_id: 2,
          module_id: 9,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          role_id: 3,
          module_id: 1,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          role_id: 3,
          module_id: 2,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 21,
          role_id: 3,
          module_id: 3,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 22,
          role_id: 3,
          module_id: 4,
          insert: false,
          read: true,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 23,
          role_id: 3,
          module_id: 5,
          insert: false,
          read: true,
          update: true,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 24,
          role_id: 3,
          module_id: 6,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 25,
          role_id: 3,
          module_id: 7,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 26,
          role_id: 3,
          module_id: 8,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 27,
          role_id: 3,
          module_id: 9,
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('role_access', null, {});
  }
};
