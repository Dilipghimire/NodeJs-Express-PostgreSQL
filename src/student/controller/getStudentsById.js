const pool = require("../../db");
const queries = require("../queries");

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

module.exports = getStudentById;
