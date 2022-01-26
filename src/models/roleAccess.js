const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class RoleAccess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  RoleAccess.init(
    {
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
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'role_access',
      modelName: 'RoleAccess'
    }
  );
  return RoleAccess;
};
