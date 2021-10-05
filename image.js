'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      models.Image.hasOne(models.Image, {
        foreignKey: 'Gallery',
        as: 'gallery_id'
      })
    }
  }
  Image.init({
    id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, },
    name: DataTypes.STRING,
    source: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};