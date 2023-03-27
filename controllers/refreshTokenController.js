import _xin_employees from "../models/xin_employees";
import sequelizeDb from "../dbConfig/index";
import _sequelize from "sequelize";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

// const fspro
const DataTypes = _sequelize.DataTypes;
const xin_employees = _xin_employees.init(sequelizeDb, DataTypes);

const handelRefreshToken = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  console.log(cookies.jwt);

  const refreshToken = cookies.jwt;

  xin_employees
    .findOne({ where: { refreshToken: refreshToken } })
    .then(function (user) {
      if (user) {
        // verify jwt

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err || user.username != decoded.username) {
            return res.sentStatus(403);
          }
          const accessToken = jwt.sign({ username: decoded.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
          res.json({ accessToken });
        });
      } else {
        // throw err;
        res.status(403).json({
          message: "User not found with refresh token",
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

export { handelRefreshToken };
