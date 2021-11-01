var DataTypes = require("sequelize").DataTypes;
var _nideshop_ad = require("./nideshop_ad");
var _nideshop_ad_position = require("./nideshop_ad_position");
var _nideshop_address = require("./nideshop_address");
var _nideshop_admin = require("./nideshop_admin");
var _nideshop_attribute = require("./nideshop_attribute");
var _nideshop_attribute_category = require("./nideshop_attribute_category");
var _nideshop_brand = require("./nideshop_brand");
var _nideshop_cart = require("./nideshop_cart");
var _nideshop_category = require("./nideshop_category");
var _nideshop_channel = require("./nideshop_channel");
var _nideshop_collect = require("./nideshop_collect");
var _nideshop_comment = require("./nideshop_comment");
var _nideshop_comment_picture = require("./nideshop_comment_picture");
var _nideshop_coupon = require("./nideshop_coupon");
var _nideshop_feedback = require("./nideshop_feedback");
var _nideshop_footprint = require("./nideshop_footprint");
var _nideshop_goods = require("./nideshop_goods");
var _nideshop_goods_attribute = require("./nideshop_goods_attribute");
var _nideshop_goods_gallery = require("./nideshop_goods_gallery");
var _nideshop_goods_issue = require("./nideshop_goods_issue");
var _nideshop_goods_specification = require("./nideshop_goods_specification");
var _nideshop_keywords = require("./nideshop_keywords");
var _nideshop_order = require("./nideshop_order");
var _nideshop_order_express = require("./nideshop_order_express");
var _nideshop_order_goods = require("./nideshop_order_goods");
var _nideshop_product = require("./nideshop_product");
var _nideshop_region = require("./nideshop_region");
var _nideshop_related_goods = require("./nideshop_related_goods");
var _nideshop_search_history = require("./nideshop_search_history");
var _nideshop_shipper = require("./nideshop_shipper");
var _nideshop_specification = require("./nideshop_specification");
var _nideshop_topic = require("./nideshop_topic");
var _nideshop_topic_category = require("./nideshop_topic_category");
var _nideshop_user = require("./nideshop_user");
var _nideshop_user_coupon = require("./nideshop_user_coupon");
var _nideshop_user_level = require("./nideshop_user_level");
var _users = require("./users");

function initModels(sequelize) {
  var nideshop_ad = _nideshop_ad(sequelize, DataTypes);
  var nideshop_ad_position = _nideshop_ad_position(sequelize, DataTypes);
  var nideshop_address = _nideshop_address(sequelize, DataTypes);
  var nideshop_admin = _nideshop_admin(sequelize, DataTypes);
  var nideshop_attribute = _nideshop_attribute(sequelize, DataTypes);
  var nideshop_attribute_category = _nideshop_attribute_category(sequelize, DataTypes);
  var nideshop_brand = _nideshop_brand(sequelize, DataTypes);
  var nideshop_cart = _nideshop_cart(sequelize, DataTypes);
  var nideshop_category = _nideshop_category(sequelize, DataTypes);
  var nideshop_channel = _nideshop_channel(sequelize, DataTypes);
  var nideshop_collect = _nideshop_collect(sequelize, DataTypes);
  var nideshop_comment = _nideshop_comment(sequelize, DataTypes);
  var nideshop_comment_picture = _nideshop_comment_picture(sequelize, DataTypes);
  var nideshop_coupon = _nideshop_coupon(sequelize, DataTypes);
  var nideshop_feedback = _nideshop_feedback(sequelize, DataTypes);
  var nideshop_footprint = _nideshop_footprint(sequelize, DataTypes);
  var nideshop_goods = _nideshop_goods(sequelize, DataTypes);
  var nideshop_goods_attribute = _nideshop_goods_attribute(sequelize, DataTypes);
  var nideshop_goods_gallery = _nideshop_goods_gallery(sequelize, DataTypes);
  var nideshop_goods_issue = _nideshop_goods_issue(sequelize, DataTypes);
  var nideshop_goods_specification = _nideshop_goods_specification(sequelize, DataTypes);
  var nideshop_keywords = _nideshop_keywords(sequelize, DataTypes);
  var nideshop_order = _nideshop_order(sequelize, DataTypes);
  var nideshop_order_express = _nideshop_order_express(sequelize, DataTypes);
  var nideshop_order_goods = _nideshop_order_goods(sequelize, DataTypes);
  var nideshop_product = _nideshop_product(sequelize, DataTypes);
  var nideshop_region = _nideshop_region(sequelize, DataTypes);
  var nideshop_related_goods = _nideshop_related_goods(sequelize, DataTypes);
  var nideshop_search_history = _nideshop_search_history(sequelize, DataTypes);
  var nideshop_shipper = _nideshop_shipper(sequelize, DataTypes);
  var nideshop_specification = _nideshop_specification(sequelize, DataTypes);
  var nideshop_topic = _nideshop_topic(sequelize, DataTypes);
  var nideshop_topic_category = _nideshop_topic_category(sequelize, DataTypes);
  var nideshop_user = _nideshop_user(sequelize, DataTypes);
  var nideshop_user_coupon = _nideshop_user_coupon(sequelize, DataTypes);
  var nideshop_user_level = _nideshop_user_level(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    nideshop_ad,
    nideshop_ad_position,
    nideshop_address,
    nideshop_admin,
    nideshop_attribute,
    nideshop_attribute_category,
    nideshop_brand,
    nideshop_cart,
    nideshop_category,
    nideshop_channel,
    nideshop_collect,
    nideshop_comment,
    nideshop_comment_picture,
    nideshop_coupon,
    nideshop_feedback,
    nideshop_footprint,
    nideshop_goods,
    nideshop_goods_attribute,
    nideshop_goods_gallery,
    nideshop_goods_issue,
    nideshop_goods_specification,
    nideshop_keywords,
    nideshop_order,
    nideshop_order_express,
    nideshop_order_goods,
    nideshop_product,
    nideshop_region,
    nideshop_related_goods,
    nideshop_search_history,
    nideshop_shipper,
    nideshop_specification,
    nideshop_topic,
    nideshop_topic_category,
    nideshop_user,
    nideshop_user_coupon,
    nideshop_user_level,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
