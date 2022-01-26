'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      project_id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
