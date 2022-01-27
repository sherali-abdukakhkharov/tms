const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class OrganizationUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  OrganizationUser.init(
    {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      org_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'organizations',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'organization_users',
      modelName: 'OrganizationUser'
    }
  );
  return OrganizationUser;
};
