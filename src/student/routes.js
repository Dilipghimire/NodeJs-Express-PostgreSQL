const { Router } = require("express");
const { getStudents } = require("../student/controller/getStudents");
const { addStudents } = require("../student/controller/getStudents");
const { removeStudent } = require("../student/controller/removeStudent");
const { updateStudent } = require("../student/controller/updateStudent");
const { getStudentById } = require("../student/controller/getStudentsById");

const router = Router();

router.get("/", getStudents);
router.post("/", addStudents);
router.delete("/:id", removeStudent);
router.put("/:id", updateStudent);
router.get("/:id", getStudentById);

module.exports = router;
