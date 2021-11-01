const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_search_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    keyword: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    from: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "",
      comment: "搜索来源，如PC、小程序、APP等"
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "搜索时间"
    },
    user_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nideshop_search_history',
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
