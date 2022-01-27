module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      project_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        }
      },
      due_date: {
        type: Sequelize.DATE
      },
      worker_user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'organization_users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('CREATED', 'GOING', 'DONE'),
        allowNull: true,
        defaultValue: 'CREATED'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tasks');
  }
};
