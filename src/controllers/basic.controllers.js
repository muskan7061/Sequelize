const Baisc = require("../models/basic.model");

const basicQueries = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("Request Body:", req.body);

    // Convert array of names to array of objects
    const basicData = name.map((item) => ({ name: item }));
    const basicQueries = await Baisc.bulkCreate(basicData, {
      ignoreDuplicates: true,
    });
    console.log(basicQueries);
    console.log(basicQueries.length);
    console.log(basicQueries[0] instanceof Baisc);
    console.log(basicQueries[0].name);
    console.log(basicQueries[0].id);

    //  {
    //       validate: true,
    //       ignoreDuplicates: true,   // MySQL/MariaDB/SQLite only
    //       updateOnDuplicate: ['columnName'],  // MySQL/MariaDB/Postgres
    //       returning: true,           // Postgres only
    //       individualHooks: true,     // Runs beforeCreate hook per row
    //   }

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

module.exports = { basicQueries };
