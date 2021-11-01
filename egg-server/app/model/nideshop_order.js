const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_order', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_sn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      unique: "order_sn"
    },
    user_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    order_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shipping_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pay_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    consignee: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    province: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    city: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    district: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mobile: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    postscript: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    shipping_fee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pay_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    pay_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    actual_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "实际需要支付的金额"
    },
    integral: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    integral_money: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    order_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "订单总价"
    },
    goods_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "商品总价"
    },
    add_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    confirm_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pay_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    freight_price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "配送费用"
    },
    coupon_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "使用的优惠券id"
    },
    parent_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    coupon_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    callback_status: {
      type: DataTypes.ENUM('true','false'),
      allowNull: true,
      defaultValue: "true"
    }
  }, {
    sequelize,
    tableName: 'nideshop_order',
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
        name: "order_sn",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_sn" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "order_status",
        using: "BTREE",
        fields: [
          { name: "order_status" },
        ]
      },
      {
        name: "shipping_status",
        using: "BTREE",
        fields: [
          { name: "shipping_status" },
        ]
      },
      {
        name: "pay_status",
        using: "BTREE",
        fields: [
          { name: "pay_status" },
        ]
      },
      {
        name: "pay_id",
        using: "BTREE",
        fields: [
          { name: "pay_id" },
        ]
      },
    ]
  });
};
