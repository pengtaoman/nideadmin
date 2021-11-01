const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "用户名，用作登录"
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "用户头像"
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "",
      comment: "密码"
    },
    password_salt: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "",
      comment: "密码盐"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "更新时间"
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "删除时间，不为 NULL 则表示数据已被软删除"
    }
  }, {
    sequelize,
    tableName: 'users',
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
