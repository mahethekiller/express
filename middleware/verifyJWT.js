import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.sendStatus(401);
  }
  console.log(authHeader); //Bearer Token

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Invalid Token
    }
    req.user = decoded.username;
    next();
  });
};

export default verifyJWT;
