const {model, Schema, Types} = require('mongoose')

const gallarySchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  description: {
    type: String,
    require: true,
  },
  image: [{
    type: String,
    require: false
  }],
  gallaryID: {
    type: String,
    require: true
  }
})

gallarySchema.method({
  getAllGallaries: function () {
    return this.title
  }
},
{ typeKey: '$type' }
)

module.exports = model('Gallary', gallarySchema)

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Gallery extends Model {
//     static associate(models) {
//       models.Gallery.hasMany(models.Image, {
//         foreignKey: 'id',
//         as: 'images'
//       })
//     }
//   }
//   Gallery.init({
//     id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, },
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'Gallery',
//   });
//   return Gallery;
// };