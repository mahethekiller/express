import connection from "./db.js";

// constructor
const Tutorial = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
  connection.query("INSERT INTO announcement_submissions SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Tutorial.findById = (id, result) => {
  connection.query(`SELECT * FROM announcement_submissions WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.getAll = (title, result) => {
  let query = "SELECT * FROM announcement_submissions";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  connection.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("announcement_submissions: ", res);
    result(null, res);
  });
};

Tutorial.getAllPublished = (result) => {
  connection.query("SELECT * FROM announcement_submissions WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("announcement_submissions: ", res);
    result(null, res);
  });
};

Tutorial.updateById = (id, tutorial, result) => {
  connection.query("UPDATE announcement_submissions SET title = ?, description = ?, published = ? WHERE id = ?", [tutorial.title, tutorial.description, tutorial.published, id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("updated tutorial: ", { id: id, ...tutorial });
    result(null, { id: id, ...tutorial });
  });
};

Tutorial.remove = (id, result) => {
  connection.query("DELETE FROM announcement_submissions WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Tutorial.removeAll = (result) => {
  connection.query("DELETE FROM announcement_submissions", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} announcement_submissions`);
    result(null, res);
  });
};

module.exports = Tutorial;
