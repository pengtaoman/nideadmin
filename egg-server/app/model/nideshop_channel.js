const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_channel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    icon_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 10
    }
  }, {
    sequelize,
    tableName: 'nideshop_channel',
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
    ]
  });
};
