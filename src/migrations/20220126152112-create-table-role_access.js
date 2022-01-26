'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_access', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      module_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'modules',
          key: 'id'
        }
      },
      insert: {
        type: Sequelize.BOOLEAN
      },
      read: {
        type: Sequelize.BOOLEAN
      },
      update: {
        type: Sequelize.BOOLEAN
      },
      delete: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('role_access');
  }
};
