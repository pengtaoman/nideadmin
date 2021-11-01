const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nideshop_topic', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "''"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    item_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    subtitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "'"
    },
    topic_category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    price_info: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    read_count: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    scene_pic_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    topic_template_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    topic_tag_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 100
    },
    is_show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'nideshop_topic',
    timestamps: false,
    indexes: [
      {
        name: "topic_id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
