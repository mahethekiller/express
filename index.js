import express, { response } from "express";
import connection from "./db.js";
import data from "./data/mock.json" assert { type: "json" };
const app = express();

const PORT = 4001;

// connection.end();

// using public folder at root for files
app.use(express.static("public"));
// using images folder at root for files at route /images
app.use("/images", express.static("images"));

// using express. json and express. url encoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST- express.json and express.urlencoded
app.post("/item", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Get
app.get("/", (request, response) => {
  connection.query("SELECT * FROM announcement_submissions ", (err, rows, fields) => {
    if (err) {
      //   throw err;
      response.json(err);
    }

    rows.map((row) => {
      console.log(row.name);
    });
    response.json(rows);
  });
});

// Get with next

app.get(
  "/next",
  (request, response, next) => {
    console.log("Req will be sent by next function");
    next();
  },
  (request, response) => {
    response.send("I just setup a route with a secont callback.");
  }
);

// GET Download Method

app.get("/download", (req, res) => {
  res.download("images/mountains_2.jpeg");
});

// GET Redirect Method

app.get("/redirect", (req, res) => {
  res.redirect("http://google.com");
});

// Get with routing params

app.get("/class/:id", (req, res) => {
  // MIDDLEWARE: Access the routing parameters
  const studentId = Number(req.params.id);
  const student = data.filter((student) => student.id === studentId);
  //   Everithing above this line is middleware
  res.send(student);
});

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

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something is broken");
});

// ERROR handler

app.listen(PORT, () => {
  console.log(`Server is runnint on port ${PORT}`);
});
