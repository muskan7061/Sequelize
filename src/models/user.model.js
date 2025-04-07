const {DataTypes, Model} = require("sequelize")
const sequelize = require("../congif/db")


class Employee extends Model {}

Employee.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        salary:{
            type:DataTypes.INTEGER,
            allowNull: false
        },

    }, 
   
    {
        sequelize,
        modelName: "Employee",
    }
)


module.exports = Employee

console.log(Employee === sequelize.models.Todo);