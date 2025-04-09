const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


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
            allowNull: false,
            validate:{
                isEmail: true
            }
            
            
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        salary:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                is: /^[0-9a-z!@#$%^&*()]{10}$/i,
                len: [6,10]
            }
        }

    }, 
   
    {
        sequelize,
        modelName: "Employee",
        freezeTableName: true,
        tableName: "userEmploye"
    }
)


module.exports = Employee

console.log(Employee === sequelize.models.Todo);