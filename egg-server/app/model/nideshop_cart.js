const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_cart', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    session_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: ""
    },
    goods_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_sn: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    product_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    market_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    retail_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    number: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_specifition_name_value: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "规格属性组成的字符串，用来显示用"
    },
    goods_specifition_ids: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
      comment: "product表对应的goods_specifition_ids"
    },
    checked: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    list_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'nideshop_cart',
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
        name: "session_id",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
