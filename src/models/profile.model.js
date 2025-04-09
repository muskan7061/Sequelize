const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")

class Profile extends Model {}

Profile.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        subject:{
            type:DataTypes.STRING,
            allowNull: false
        },
        studentId:{
                type:DataTypes.INTEGER,
                allowNull: false ,
        }
    },
    {
        sequelize,
        modelName: "Profile",
        tableName: "Profiles",
        freezeTableName: true,
    }
)

module.exports = {Profile}