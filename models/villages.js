'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class villages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      villages.belongsTo(models.districts);
    }
  }
  villages.init(
    {
      districtId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      postalCodes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'villages',
    },
  );
  return villages;
};
