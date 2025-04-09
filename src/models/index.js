const {Profile} = require("./profile.model")
const {Student} = require("./student.model")


Student.hasOne(Profile, {
    foreignKey: "studentId",
    as: "profile"
})


Profile.belongsTo(Student, {
    foreignKey: "studentId",
    as: "Student info "
})

module.exports = {
    Student,
    Profile,
  };