const getStudents = "SELECT * from Students";
const getStudentById = "SELECT * from Students where id = $1";
const addStudents =
  "INSERT INTO students (name, email, age, dob) values ($1, $2, $3, $4)";
const checkEmailExits = "SELECT email from students where email = $1";
const removeStudent = "DELTE from student where id = $1";
const updateStudent = "UPDATE students set name = $1 where id = $2";

module.exports = {
  getStudents,
  getStudentById,
  addStudents,
  checkEmailExits,
  removeStudent,
  updateStudent,
};
