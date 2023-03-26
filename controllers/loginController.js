import connection from "../db";
import bcrypt from "bcrypt";
// import xin_employees from "../models/xin_employees";
import _xin_employees from "../models/xin_employees";
import sequelizeDb from "../dbConfig/index";
import _sequelize from "sequelize";

const DataTypes = _sequelize.DataTypes;
const xin_employees = _xin_employees.init(sequelizeDb, DataTypes);

const Login = async (req, res) => {
  // xin_employees = new xin_employees(sequelizeDb);
  const username = req.body.username;
  const password = req.body.password;
  const saltRounds = 12;

  // res.status(200).json({});

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  await xin_employees
    .findOne({ where: { username: username } })
    .then(function (user) {
      if (user) {
        const login = bcrypt.compareSync(
          password,
          user.password.replace("$2y$", "$2a$")
        );

        if (login) {
          res.json({
            result: user,
            message: "Login successfull",
          });
        } else {
          res.status(401).json({
            message: "User name or password is incorrect",
          });
        }
      } else {
        // throw err;
        res.status(401).json({
          message: "User not found",
        });
      }
    })
    .catch(function (error) {
      if (error.name === "SequelizeDatabaseError") {
        res.status(400).json({ message: error.parent.sqlMessage });
      }
      console.log(error);
      res.status(400).json({ message: "Database error" });
    });
};

export { Login };
