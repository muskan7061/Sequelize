const express = require("express")
const userPostController = require("../controllers/Association/user.controller")

const router = express.Router()

router.post("/user-post", userPostController.createUser)
router.get("/get-user-post", userPostController.getAllUsersWithPosts)


module.exports = router 