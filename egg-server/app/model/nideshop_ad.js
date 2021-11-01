const DataTypes = require('mysql2');
module.exports = function(app) {
  return  app.model.define('nideshop_ad', {
    ad_position_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    media_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    end_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'nideshop_ad',
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
        name: "position_id",
        using: "BTREE",
        fields: [
          { name: "ad_position_id" },
        ]
      },
      {
        name: "enabled",
        using: "BTREE",
        fields: [
          { name: "enabled" },
        ]
      },
    ]
  });
};
