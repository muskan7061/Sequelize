const express = require("express");
const basicController = require("../controllers/basic.controllers");

const router = express.Router();
router.post("/basic", basicController.basicQueries);



module.exports = router;
