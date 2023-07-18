const pool = require("../../db");
const queries = require("../queries");

const removeStudent = (res, req) => {
  const { id } = req.params;
  pool.query(queries.getStudentById, [id], (error, result) => {
    const onStudentFound = !result.rows.length;
    if (onStudentFound) {
      res.send("could not find the student with the id", id);
    }

    pool.query(queries.removeStudent, [id], (error, result) => {
      if (error) throw error;
      res.status(200).send("student remove successfully");
    });
  });
};

module.exports = removeStudent;
