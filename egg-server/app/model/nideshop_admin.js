const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_admin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "''"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "''"
    },
    password_salt: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "''"
    },
    last_login_ip: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "''"
    },
    last_login_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    add_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    update_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "''"
    },
    admin_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'nideshop_admin',
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
