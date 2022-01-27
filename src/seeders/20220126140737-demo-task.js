module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          id: 'f7e1e05f-86f9-4822-81f4-7fcdf4b0355b',
          created_by: '385aec9e-fdff-4033-bdbb-1544a50bec5e',
          project_id: '09159ed4-70ee-4d3b-a817-53a623aa2f28',
          due_date: '2022-02-26T14:08:45.193Z',
          worker_user_id: 'ad9921ae-8af7-40d2-b5ec-a159df9d6db7',
          status: 'CREATED',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
