const {studentDetails} = require("../controllers/student.controller")

const express = require("express")

const router = express.Router()


router.route("/student-details").post(studentDetails)

module.exports = router