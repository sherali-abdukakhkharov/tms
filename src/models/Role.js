const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Role.init(
    {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'roles',
      modelName: 'Role'
    }
  );
  return Role;
};
