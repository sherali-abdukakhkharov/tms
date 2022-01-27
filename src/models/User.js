const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  User.init(
    {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      full_name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      created_by: {
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
      tableName: 'users',
      modelName: 'User'
    }
  );
  return User;
};
