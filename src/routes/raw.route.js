const rawController = require("../controllers/raw.controller")
const express = require("express")
const router = express.Router()

router.post("/raw-create",rawController.user)


module.exports = router