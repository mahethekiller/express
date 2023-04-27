import _xin_employees from "../models/xin_employees";
import sequelizeDb from "../dbConfig/index";
import _sequelize, { Op } from "sequelize";

// const fspro
const DataTypes = _sequelize.DataTypes;
const xin_employees = _xin_employees.init(sequelizeDb, DataTypes);

const getAllEmployees = (req, res) => {
  xin_employees.findAll().then((employees) => {
    if (employees) {
      res.json({
        employees,
      });
    } else {
      res.status(401).json({
        message: "No data found",
      });
    }
  });
};

const getActiveEmployees = (req, res) => {
  xin_employees
    .findAll({
      where: {
        is_active: {
          [Op.or]: [0, 1],
        },
      },
    })
    .then((employees) => {
      if (employees) {
        res.json({
          employees,
        });
      } else {
        res.status(401).json({
          message: "No data found",
        });
      }
    });
};

// Get all active employees for emp page
const getActiveEmployeesEMP = (req, res) => {
  xin_employees
    .findAll({
      attributes: ["user_id", "first_name", "last_name", "contact_no", "date_of_birth", "email", "date_of_joining"],
      where: {
        is_active: {
          [Op.or]: [0, 1],
        },
      },
    })
    .then((employees) => {
      if (employees) {
        res.json({
          employees,
        });
      } else {
        res.status(401).json({
          message: "No data found",
        });
      }
    });
};

const addEmployee = (req, res) => {
  // connection.query("SELECT * FROM announcement_submissions ", (err, rows, fields) => {
  //   if (err) {
  //     //   throw err;
  //     res.json(err);
  //   }
  //   rows.map((row) => {
  //     console.log(row.name);
  //   });
  //   res.json(rows);
  // });
};

const updateEmployee = (req, res) => {};
const deleteEmployee = (req, res) => {};

export { getAllEmployees, getActiveEmployees, getActiveEmployeesEMP, addEmployee, updateEmployee, deleteEmployee };
