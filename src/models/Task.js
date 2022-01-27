const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Task.init(
    {
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
          model: 'organizations_users',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('CREATED', 'GOING', 'DONE'),
        allowNull: true,
        defaultValue: 'CREATED'
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'tasks',
      modelName: 'Task'
    }
  );
  return Task;
};
