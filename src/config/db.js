const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(
    "test", 
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
        logging: true
    }
)

sequelize.authenticate()
.then(() => console.log("Mysql connected successfully"))
.catch(() => console.log("Fialed connect to MYSQL"))


module.exports = sequelize 