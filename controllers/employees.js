import express from "express";
import connection from "../db.js";

export class Employees {
  constructor() {
    // this.test = this.test.bind(this);
  }

  test(req, res, next) {
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
  }

  about(req, res, next) {
    res.send("About this wiki");
  }
}

// const router = express.Router();
// // Home page route.
// router.get("/", function (req, res) {});

// // About page route.
// router.get("/about", function (req, res) {});

// export default router;
