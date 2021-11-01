const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_goods_gallery', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    goods_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    img_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 5
    }
  }, {
    sequelize,
    tableName: 'nideshop_goods_gallery',
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
        name: "goods_id",
        using: "BTREE",
        fields: [
          { name: "goods_id" },
        ]
      },
    ]
  });
};
