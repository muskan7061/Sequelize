const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class User extends Model {}

User.init(
  {
    name:{
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    
  }
)

module.exports = {User}