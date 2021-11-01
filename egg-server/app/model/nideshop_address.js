const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    user_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    country_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    province_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    city_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    district_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    address: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    mobile: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    is_default: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nideshop_address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
