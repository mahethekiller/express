import bcrypt from "bcrypt";
// import xin_employees from "../models/xin_employees";
import _xin_employees from "../models/xin_employees";
import sequelizeDb from "../dbConfig/index";
import _sequelize from "sequelize";
import path from "path";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

// const fspro
const DataTypes = _sequelize.DataTypes;
const xin_employees = _xin_employees.init(sequelizeDb, DataTypes);

const Login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  await xin_employees
    .findOne({ where: { username: username } })
    .then(function (user) {
      if (user) {
        const match = bcrypt.compareSync(
          password,
          user.password.replace("$2y$", "$2a$") //to match with ph bcrypt
        );

        if (match) {
          // JWT
          // Access Token
          const accessToken = jwt.sign(
            {
              username: user.username,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5m" }
          );

          // Refresh Token
          const refreshToken = jwt.sign(
            {
              username: user.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
          );

          // save refresh token with user
          try {
            xin_employees.update(
              {
                refreshToken: refreshToken,
              },
              {
                where: {
                  user_id: user.user_id,
                },
              }
            );
          } catch (err) {
            console.log(err);
          }
          // save refresh token with user
          // JWT

          res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: 24 * 60 * 60 * 1000 /* One day */,
          });

          res.json({
            accessToken,
            user,
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
