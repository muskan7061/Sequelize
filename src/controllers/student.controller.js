const { Profile } = require("../models/profile.model")
const { Student } = require("../models/student.model")


const studentDetails =async (req, res) =>{ 
    try {
        const {name} = req.body
        const createStudent = await Student.create({name})
        const createProfile = await Profile.create({subject: "hindi", studentId: createStudent.id})
        return res.status(201).json({
            status: 201,
            data: [createStudent, createProfile],
            message: "student details added"
        })
    } catch (error) {
        console.log("Error in studentDetailsApi: ", error);
        return res.status(500).json({
            status: 500,
            message: "Internal server erorr",
            error: error.message
        })
    
    }
}



module.exports = {studentDetails}