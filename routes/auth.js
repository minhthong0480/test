const router = require("express").Router();
const { register, login, update, read } = require("../controllers/auth");
const verifiedToken = require("./verifiyToken");
const formidable = require("express-formidable");

router.post("/register", register);
router.post("/login", login);
router.get('/teacher/:teacherId', read)
router.put("/update-teacher/:teacherId", verifiedToken, formidable(), update);

module.exports = router;
