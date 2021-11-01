const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_order_express', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shipper_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shipper_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: "",
      comment: "物流公司名称"
    },
    shipper_code: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
      comment: "物流公司代码"
    },
    logistic_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "快递单号"
    },
    traces: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: "",
      comment: "物流跟踪信息"
    },
    is_finish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    request_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "总查询次数"
    },
    request_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "最近一次向第三方查询物流信息时间"
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "添加时间"
    },
    update_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "更新时间"
    }
  }, {
    sequelize,
    tableName: 'nideshop_order_express',
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
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
