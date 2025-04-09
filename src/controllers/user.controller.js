const Employee = require("../models/user.model");
const { sequelize } = require("../config/db");
const { Sequelize, Op } = require("sequelize");

const addEmployee = async (req, res) => {
  try {
    const { name, email, age, salary, password } = req.body;
    if ([name, email, age, salary, password].some((data) => data.trim() === "")) {
      return res.status(409).json({
        status: 409,
        message: "All fielda are required",
      });
    }
    const findExistEmployee = await Employee.findOne({ where: { email } });
    if (findExistEmployee) {
      return res.status(409).json({
        status: 409,
        message: "Employee is already exists with this Email",
      });
    }

    //-1
    // with instance
    // const jane = Employee.build({ name, email, age, salary });
    // console.log("===", jane instanceof Employee);
    // await jane.save();

    //-2
    // same work
    // console.log("dataValues", jane.dataValues);
    // console.log("toJsone", jane.toJSON());

    //-3
    // one column ko  exctract
    // console.log("name", jane.name);

    //-4
    // will update name in database
    // jane.name = "muskan"
    // await jane.save()

    //-5
    // update several fields at once with  set method
    // jane.set({
    //   name: "niraj",
    //   age: 33,
    //   salary: "909090"
    // })
    // await jane.save()

    //-6
    // delete instance
    // await jane.destroy

    //-7 reload instnce
    // await jane.reload();
    // console.log(jane.name); 

    //-8
    // with create method
    const createEmployee = await Employee.create(
      { name, email, age, salary , password}
      //   {
      //     fields: ["email", "age"]
      //   }
    );

    // const incrementData = await createEmployee.increment("age", {by: 2})

    //--9
    // console.log(createEmployee.toJSON());
    // console.log(JSON.stringify(createEmployee, null, 4));

    // if (!createEmployee) {
    //   return res.status(409).json({
    //     status: 409,
    //     message: "Something went wrong",
    //   });
    // }

    return res.status(200).json({
      status: 200,
      message: "Employee added successfully",
      data: createEmployee,
    });
  } catch (error) {
    console.log("Error in addEmployee", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    
    //1
    // const findAll = await Employee.findOne({where: {id:2}}) // findAll

    //2
    // const findAll = await Employee.findAll({
    //     attributes: [
    //       "name",
    //       ["email", "gmail"],
    //       "age",
    //       ["salary", "employe_salary"],
    //       [Sequelize.fn("COUNT", Sequelize.col("email")), "emailCount"],
    //       [Sequelize.fn("CONCAT", Sequelize.col("name"), " user"), "name_change"]
    //     ]
    //   });

    //3
    // Similarly, it's also possible to remove a selected few attributes:
    // const findAll = await Employee.findAll({
    //   attributes: {
    //     exclude: ["createdAt", "updatedAt", "name"], // except these all col will be visible
    //     include: [
    //       [Sequelize.fn("CONCAT", Sequelize.col("email"), " employe"), "age"], // updatedAt, name , createdAt will remove
    //     ],
    //   },
    // });

    //----------------conditions-----------------
    //where
    // const findAll = await Employee.findOne({
      //   where: {
      //     id: { [Op.eq]: 1 },
      //     email: { [Op.like]: '%@gmail.com'}
      //   },

      // where: {
        // [Op.and]: [{id:1}, {name: "tesy"}],// will retunr null
        // [Op.or]: [{id: 1}, {name: "test"}] // will retrun some
        // id: {
        //     [Op.or]: [20, 23],
        // },

        // nt
        // id:{[Op.ne]:1}

        //is

        // id: { [Op.is]: 1 },
      // },
    // });

    //1 findbyPK 
    //const findbyPK = await Employee.findByPk(1)

    //2 findorCreate
    // const findbyPK = await Employee.findOrCreate({
    //   where: {name: "shabna"},
    //   defaults:{
    //     name: "john",
    //     email: "john@gmail.com",
    //     age: 22,
    //     salary: 22222
    //   }
    // })
    //3 finorcountall
    //     const finorcountall = await Employee.findAndCountAll({
    //         where:{ salary:{ [Op.gt]: 1000}},
    //         limit: 50,
    //         offset: 0 
    // })
    return res.status(200).json({
      status: 200,
      data: finorcountall,
      message: "fetched all successfully",
    });
  } catch (error) {
    console.log("Error in getAll", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { addEmployee, getAll };
