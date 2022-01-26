const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Module.init(
    {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      tableName: 'modules',
      modelName: 'Module'
    }
  );
  return Module;
};
