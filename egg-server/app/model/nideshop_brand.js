const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_brand', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    list_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    simple_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sort_order: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 50
    },
    is_show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    floor_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    app_list_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    is_new: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    new_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    new_sort_order: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 10
    }
  }, {
    sequelize,
    tableName: 'nideshop_brand',
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
        name: "is_show",
        using: "BTREE",
        fields: [
          { name: "is_show" },
        ]
      },
    ]
  });
};
