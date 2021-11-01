const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_region', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    agency_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nideshop_region',
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
        name: "parent_id",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "region_type",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "agency_id",
        using: "BTREE",
        fields: [
          { name: "agency_id" },
        ]
      },
    ]
  });
};
