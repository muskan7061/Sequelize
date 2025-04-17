const Baisc = require("../models/basic.model");
const { Sequelize, Op } = require("sequelize");

const basicQueries = async (req, res) => {
  try {
    // const { name} = req.body;
    // console.log(name);

    //1- bluckCreate

    // Convert array of names to array of objects
    // const basicData = name.map((item) => ({ name: item }));
    // const basicQueries = await Baisc.bulkCreate(basicData);
    //  {
    //       validate: true,
    //       ignoreDuplicates: true,   // MySQL/MariaDB/SQLite only
    //       updateOnDuplicate: ['columnName'],  // MySQL/MariaDB/Postgres
    //       returning: true,           // Postgres only
    //       individualHooks: true,     // Runs beforeCreate hook per row
    //   }
    // console.log(basicQueries);
    // console.log(basicQueries.length);
    // console.log(basicQueries[0] instanceof Baisc);
    // console.log(basicQueries[0].name);
    // console.log(basicQueries[0].id);
    //2
    // const basicQueries = await Baisc.create({name, age})

    return res.status(200).json({
      data: basicQueries,
    });
  } catch (error) {
    console.log("Error in basicQueries Api", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

//2 ordering
const finderMethod = async (req, res) => {
  try {
    // const { name, age} = req.body;

    const basicQueries = await Baisc.findAll({
      //1 - rename the attribute
      // attributes: ["name", ["age", "ages"]]

      //2 count the age and give name
      // attributes: [[Sequelize.fn('COUNT', Sequelize.col('age')), 'how much']]

      //3 nikalne ke liye name  nikal jayega
      // attributes: { exclude: ['name'] },

      //4 where with eq op
      // where: {
      //   id: {[Op.eq ]:2}
      // }

      //5 can add multiple
      // where: {
      //   id: 2,
      //   name: "z"
      // }

      //6 and op
      // where: {
      //   [Op.and]: [{id:2}, {id:99}]
      // }

      //7 or op
      // where: {
      //   [Op.or]: [{id:2}, {id:99}]
      // }

      //8 eq and ne
      // where:{
      //   id: { [Op.ne]:2}
      // }

      //9 is and not
      //  check krega agar age null he ya nhi similayr for not
      // where:{
      //   age: {   [Op.is]: null,}
      // }

      //10 gt and gte
      // where:{
      //   age :{ [Op.gt] :50}
      // }

      //11 lt and lte
      // where:{
      //   age :{ [Op.lt] :50}
      // }

      //12 btween and notbetween
      // where: {
      //   age: { [Op.between]: [20, 30]},
      // },
      
    });
    return res.status(200).json({
      data: basicQueries,
    });
  } catch (error) {
    console.log("Error in finderMethod Api", error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { basicQueries, finderMethod };
