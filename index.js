import express from "express";
import connection from "./db";
import path from "path";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import errorHandler from "./middleware/errorHandler";
import verifyJWT from "./middleware/verifyJWT";
import empRouter from "./routes/employeesRouter";
import loginRouter from "./routes/loginRouter";
import cookieParser from "cookie-parser";
import refreshTokenRouter from "./routes/refresh";
import logoutTokenRouter from "./routes/logout";
import credentials from "./middleware/credentials";
import { logger } from "./middleware/logEvents";

const app = express();

const PORT = process.env.PORT || 4001;

app.use(logger);

// handel options credential check - before cors
// allow fetch cookies credentials requirement
app.use(credentials);

// CORS cross origin

app.use(cors(corsOptions));
// CORS

// using express. json and express. url encoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for json data
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// without login routes
app.use("/login", loginRouter);

// without login routes

// refresh token
app.use("/refresh", refreshTokenRouter);
// LOGOUT
app.use("/logout", logoutTokenRouter);

// after login routes
app.use(verifyJWT);
app.use("/employees", empRouter);

// after login routes

// connection.end();

// let wl = new WeightLoss();

// using public folder at root for files
app.use(express.static("public"));
// using images folder at root for files at route /images
app.use("/images", express.static("images"));

// GET Download Method

app.get("/download", (req, res) => {
  res.download("images/mountains_2.jpeg");
});

// GET Redirect Method

app.get("/redirect", (req, res) => {
  res.redirect("http://google.com");
});

// Get with routing params

// app.get("/class/:id", (req, res) => {
//   // MIDDLEWARE: Access the routing parameters
//   const studentId = Number(req.params.id);
//   const student = data.filter((student) => student.id === studentId);
//   //   Everithing above this line is middleware
//   res.send(student);
// });

// Post
app.post("/create", (request, response) => {
  response.send("Post REQ Create");
});
// PUT
app.put("/edit", (request, response) => {
  response.send("PUT REQ EDIT");
});
// DELETE
app.delete("/delete", (request, response) => {
  response.send("DEL REQ DELETE");
});

// ROUTE CHAINING
app
  .route("/class")
  .get((req, res) => {
    res.send("Class GET REQ");
  })
  .post((req, res) => {
    res.send("Class POST REQ");
  })
  .put((req, res) => {
    res.send("Class PUT REQ");
  });

// ROUTE CHAINING

// ERROR handler

app.get("/error", (request, response) => {
  //   response.send("PUT REQ EDIT");
  throw new Error();
});

// 404
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not Fount");
  }
});

// ERROR handler
app.use(errorHandler);
// ERROR handler

app.listen(PORT, () => {
  console.log(`Server is runnint on port ${PORT}`);
});
