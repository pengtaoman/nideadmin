const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_shipper', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "快递公司名称"
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "快递公司代码"
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      comment: "排序"
    }
  }, {
    sequelize,
    tableName: 'nideshop_shipper',
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
        name: "nideshop_shipper_id_uindex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
