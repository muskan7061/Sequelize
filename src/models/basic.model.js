const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


class Baisc extends Model {}

Baisc.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, 
   
    {
        sequelize, 
    }
)


module.exports = Baisc

