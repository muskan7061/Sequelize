const express = require("express");
const {basicQueries, finderMethod} = require("../controllers/basic.controllers");

const router = express.Router();
router.post("/basic",basicQueries);
router.get("/order", finderMethod);


module.exports = router;
