const Raw = require("../models/raw.model");
const sequelize = require("../config/db")

const user = async (req, res) => {
  try {
    const {name , age, city , marks, subject} = req.body
    // const rawCreate = await Raw.create({name , age, city , marks, subject })
    //--1 SELECT QUERY
    // const [result] = await sequelize.query('SELECT * FROM Raws where age > :age',{
    //     replacements: {age : 50},
    //     type: sequelize.QueryTypes.SELECT
    // })
    // const result = await sequelize.query('SELECT name, city FROM raws LIMIT 5',{
    //     type: sequelize.QueryTypes.SELECT
    // })
    // console.log(result);
    // console.log("METADATA", metadata);

    //--2 INSERT QUERY
    const result = await sequelize.query('INSERT INTO Raws (name , age, city, marks, subject) VALUES (?,?,?,?,?)',{
        replacements: ["muskan", 11, "surat", 44,"data"],
        type: sequelize.QueryTypes.INSERT
    })
    console.log(result);
    // console.log("METADATA", metadata);


    //--2 UPDATE QUERY
    // const [result, metadata] = await sequelize.query('UPDATE Raws  SET name = ? where id = ?',{
    //     replacements: ["niraj", 10],
    //     type: sequelize.QueryTypes.INSERT
    // })
    // console.log(result);
    // console.log("METADATA", metadata);


    //--2 DELETE QUERY
    // const [result] = await sequelize.query('DELETE FROM Raws WHERE id BETWEEN 11 AND 15'
    //   ,{
    //     replacements: [10],
    //     type: sequelize.QueryTypes.INSERT
    // })
    // console.log(result);
    // console.log("METADATA", metadata);

    return res.status(201).json({
        data: result
    })
  } catch (error) {
    console.log("Error in user", error);
    return res.status(500).json({
        error:error.message
    })
  }
};

module.exports = {user}