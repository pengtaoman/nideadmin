const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_coupon', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    type_money: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    send_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    min_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    max_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    send_start_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    send_end_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    use_start_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    use_end_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    min_goods_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'nideshop_coupon',
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
