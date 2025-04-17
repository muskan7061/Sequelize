const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const sequelize = require("./config/db")
const curdUserRouter = require("./routes/crudUsers.route")
const rawRouter = require("./routes/raw.route")
const basicRouter = require("./routes/basic.route")
dotenv.config({path: "./.env"})
const app = express()


app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use("/crud-user", curdUserRouter)


app.use("/api/v1/raw", rawRouter )

app.use("/basic", basicRouter)

// sequelize.sync({ alter: true })
// .then(() =>{
//     console.log("Sync successfully") 

// })
// .catch((error) =>{
//     console.log("sync Failed", error)
    
// })

app.listen(process.env.PORT, () =>{
    console.log("App is listing on", process.env.PORT);
    
})




