import _xin_employees from "../models/xin_employees";
import sequelizeDb from "../dbConfig/index";
import _sequelize from "sequelize";

// const fspro
const DataTypes = _sequelize.DataTypes;
const xin_employees = _xin_employees.init(sequelizeDb, DataTypes);

const handelLogout = (req, res) => {
  // On client also delete the access Token
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204); // No content
  }

  const refreshToken = cookies.jwt;

  //   If reftoken is in db
  xin_employees
    .findOne({ where: { refreshToken: refreshToken } })
    .then(function (user) {
      if (user) {
        // verify jwt

        xin_employees.update(
          {
            refreshToken: "",
          },
          {
            where: {
              user_id: user.user_id,
            },
          }
        );

        res.clearCookie("jwt", { httpOnly: true }); //secure:true - add if https
        res.sendStatus(204);
      } else {
        // throw err;
        res.clearCookie("jwt", { httpOnly: true });
        res.sendStatus(204);
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

export { handelLogout };
