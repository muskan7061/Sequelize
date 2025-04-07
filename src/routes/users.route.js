const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
router.post("/addemploye", userController.addEmployee);
router.get("/getall", userController.getAll);


module.exports = router;
