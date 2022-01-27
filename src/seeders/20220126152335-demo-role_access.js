const uuid = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'role_access',
      [
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '6dce81f7-0e43-45c5-81a8-e401b700fe34',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '44942d80-bd8b-4f2b-a327-27e4a3df8970',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '4ce70e82-67b2-49c8-997e-41ff296412f5',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: 'c10e05aa-6e52-426b-be0b-724ea139ba2c',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '3c04e277-c2e6-4edb-a24d-56e63e53a63e',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '120b62fc-2614-4bdd-8038-1cd36af7d05c',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '02d04c21-3b2a-4d61-bcae-dd7ed1675db2',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: '1ae60e95-0d8d-450e-84a8-95ecb2af6539',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: 'f6a7203c-983b-460e-913c-63a1a1c4b94b',
          module_id: 'b0b8b2ad-1f55-4d91-94aa-f4e2016240d5',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '6dce81f7-0e43-45c5-81a8-e401b700fe34',
          insert: false,
          read: true,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '44942d80-bd8b-4f2b-a327-27e4a3df8970',
          insert: false,
          read: true,
          update: true,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '4ce70e82-67b2-49c8-997e-41ff296412f5',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: 'c10e05aa-6e52-426b-be0b-724ea139ba2c',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '3c04e277-c2e6-4edb-a24d-56e63e53a63e',
          insert: true,
          read: true,
          update: true,
          delete: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '120b62fc-2614-4bdd-8038-1cd36af7d05c',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '02d04c21-3b2a-4d61-bcae-dd7ed1675db2',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: '1ae60e95-0d8d-450e-84a8-95ecb2af6539',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '1a6fb12a-16db-4841-890b-dae54d95fed2',
          module_id: 'b0b8b2ad-1f55-4d91-94aa-f4e2016240d5',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '6dce81f7-0e43-45c5-81a8-e401b700fe34',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '44942d80-bd8b-4f2b-a327-27e4a3df8970',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '4ce70e82-67b2-49c8-997e-41ff296412f5',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: 'c10e05aa-6e52-426b-be0b-724ea139ba2c',
          insert: false,
          read: true,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '3c04e277-c2e6-4edb-a24d-56e63e53a63e',
          insert: false,
          read: true,
          update: true,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '120b62fc-2614-4bdd-8038-1cd36af7d05c',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '02d04c21-3b2a-4d61-bcae-dd7ed1675db2',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: '1ae60e95-0d8d-450e-84a8-95ecb2af6539',
          insert: false,
          read: false,
          update: false,
          delete: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: uuid.v4(),
          role_id: '6ae533d7-669b-4e3b-ac4c-2494c5dd93cd',
          module_id: 'b0b8b2ad-1f55-4d91-94aa-f4e2016240d5',
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
