const { DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")

class Student extends Model {}

Student.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: "Student",
        tableName: "students",
        freezeTableName: true,
    }
)

module.exports = {Student}

