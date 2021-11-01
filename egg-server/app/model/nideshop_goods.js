const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_goods', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_sn: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    brand_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    goods_brief: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    goods_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_on_sale: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    add_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 100
    },
    is_delete: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attribute_category: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    counter_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "专柜价格"
    },
    extra_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "附加价格"
    },
    is_new: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    goods_unit: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "商品单位"
    },
    primary_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "商品主图"
    },
    list_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "商品列表图"
    },
    retail_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "零售价格"
    },
    sell_volume: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "销售量"
    },
    primary_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "主sku　product_id"
    },
    unit_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "单位价格，单价"
    },
    promotion_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    promotion_tag: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    app_exclusive_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      comment: "APP专享价"
    },
    is_app_exclusive: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "是否是APP专属"
    },
    is_limited: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    is_hot: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nideshop_goods',
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
        name: "goods_sn",
        using: "BTREE",
        fields: [
          { name: "goods_sn" },
        ]
      },
      {
        name: "cat_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "brand_id",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
      {
        name: "goods_number",
        using: "BTREE",
        fields: [
          { name: "goods_number" },
        ]
      },
      {
        name: "sort_order",
        using: "BTREE",
        fields: [
          { name: "sort_order" },
        ]
      },
    ]
  });
};
