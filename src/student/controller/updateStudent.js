const pool = require("../../db");
const queries = require("../queries");

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age, dob } = req.body;

  pool.query(queries.getStudentById, [id], (error, result) => {
    const onStudentFound = !result.rows.length;
    if (onStudentFound) {
      res.send("could not find the student with the id", id);
    }

    pool.query(queries.updateStudent[(name, id)], (error, result) => {
      if (error) throw error;
      result.status(200).send("student name updated successfully");
    });
  });
};

module.exports = updateStudent;
