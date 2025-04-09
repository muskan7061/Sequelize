const {DataTypes, Model} = require("sequelize")
const sequelize = require('../config/db')


class Raw extends Model {}

Raw.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        city:{
            type:DataTypes.STRING,
            allowNull: false
        },
        marks:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        subject:{
            type:DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
    }
)


module.exports = Raw