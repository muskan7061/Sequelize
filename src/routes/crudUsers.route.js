const express = require("express");
const userController = require("../controllers/crudUser.controller");
const router = express.Router();
router.post("/addemploye", userController.add);
router.get("/getall", userController.getAll);


module.exports = router;
