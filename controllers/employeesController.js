import connection from "../db";

const getAllEmployees = (req, res) => {
  connection.query("SELECT * FROM xin_employees", (err, rows, fields) => {
    if (err) {
      throw err;
      res.json(err);
    }
    res.json(rows);
  });
};

const addEmployee = (req, res) => {
  connection.query("SELECT * FROM announcement_submissions ", (err, rows, fields) => {
    if (err) {
      //   throw err;
      res.json(err);
    }

    rows.map((row) => {
      console.log(row.name);
    });
    res.json(rows);
  });
};

const updateEmployee = (req, res) => {};
const deleteEmployee = (req, res) => {};

export { getAllEmployees, addEmployee, updateEmployee, deleteEmployee };
