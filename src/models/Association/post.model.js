const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Post extends Model {}

Post.init(
  {
    title:{
      type:DataTypes.STRING,
      allowNull: false
    }, 
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    
  }
)

module.exports = {Post}