const router = require("express").Router();
const formidable = require('express-formidable')
const { create, students, image, deleteStudent, update, read, readOne, updateScore } = require("../controllers/student");
const verifiedToken = require("./verifiyToken");


router.post("/create-student", formidable() ,create);
router.get("/students/image/:studentId", image);
// router.post("/login", login);
router.get('/students', verifiedToken, students)
router.delete("/delete-student/:studentId", verifiedToken, deleteStudent);
router.put("/update-student/:studentId", verifiedToken, formidable(), update);
router.get("/student/:studentId", verifiedToken, read);
router.get("/one-student/:studentId", verifiedToken, readOne);
router.put('/update-score/:studentId',verifiedToken, formidable(), updateScore)


module.exports = router;
