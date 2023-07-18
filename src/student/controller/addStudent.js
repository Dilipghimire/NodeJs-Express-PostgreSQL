const pool = require("../../db");
const queries = require("../queries");

const addStudents = (res, req) => {
  const { name, email, age, dob } = req.body;

  pool.query(queries.checkEmailExits, [email], (error, result) => {
    if (result.rows.length) {
      res.send("Email already exists");
    }

    pool.query(
      queries.addStudents,
      [name, email, age, dob],
      (error, result) => {
        if (error) throw error;
        res.status(201).send("Student created successfully!");
      }
    );
  });
};

module.exports = addStudents;
