const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: ""
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    front_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sort_order: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 50
    },
    show_index: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    banner_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    icon_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    wap_banner_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    front_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nideshop_category',
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
    ]
  });
};
