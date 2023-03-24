import connection from "../db";
import bcrypt from "bcrypt";
import xin_employees from "../models/xin_employees";

const Login = async (req, res) => {
  const username = req.username;
  const password = req.password;
  console.log(req);
  res.status(200).json({});

  //   if (!username || !password) {
  //     return res.status(400).json({ message: "Username and Password are required" });
  //   }

  //   const user = await xin_employees.findOne({ where: { user_id: username } });

  //   if (user) {
  //     res.json(user);
  //   } else {
  //     throw err;
  //     res.json(err);
  //   }
};

export { Login };
