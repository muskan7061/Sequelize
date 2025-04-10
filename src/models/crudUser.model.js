const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


class CrudUser extends Model {}

CrudUser.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            // unique: true,
            // validate:{
            //     isEmail: true
            // }
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
            // validate:{
            //     is: /^[0-9a-z!@#$%^&*()]{10}$/i,
            //     len: [6,10]
            // }
        }
    }, 
   
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedCrud"

      
    }
)


module.exports = CrudUser

// console.log(Employee === sequelize.models.Todo);