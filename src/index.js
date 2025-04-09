const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const sequelize = require("./config/db")
const userRouter = require("./routes/users.route")
const  studentRouter  = require("./routes/student.route")
const rawRouter = require("./routes/raw.route")
require("./models/index")
dotenv.config({path: "./.env"})
const app = express()


app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/users", userRouter)

app.use("/api/v1/users", studentRouter)

app.use("/api/v1/raw", rawRouter )

sequelize.sync({ alter: true })
.then(() =>{
    console.log("Sync successfully")
    app.listen(process.env.PORT, () =>{
        console.log("App is listing on", process.env.PORT);
        
    })
})
.catch((error) =>{
    console.log("sync Failed", error)
    
})






