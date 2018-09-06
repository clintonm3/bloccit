'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  },
 {});
    Topic.associate = function(models) {
    Topic.hasMany(models.Banner, {
      foreignKey: "topicId",
      as: "banners",
  });
    Topic.hasMany(models.Rule, {
       foreignKey: "topicIdRule",
       as: "rules",
     });
  };
  return Topic;
};