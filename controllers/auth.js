const { registerValid } = require("../validation");
const { loginValid } = require("../validation");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//Register feature
const register = async (req, res) => {
  //validate data
  const { error } = registerValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user exited
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already existed");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
    isTeacher: req.body.isTeacher,
  });
  try {
    const saveUser = await user.save();
    //res.send({user: user._id})
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Login feature
const login = async (req, res) => {
  //validate login data
  //console.log(req.body);
  const { error } = loginValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check of email existed
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email has not registered");
  }

  //check if pass is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Password incorrect");
  }

  //Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).send({ token, user:{
    _id:user._id,
    name: user.name,
    email: user.email,
    isTeacher: user.isTeacher
  } });

  //res.send('Logged In')
};

const update = async (req, res) => {
  try {
    let fields = req.fields;

    let data = { ...fields };

    let updated = await User.findByIdAndUpdate(req.params.teacherId, data, {
      new: true,
    });

    return res.json(updated)
  } catch (error) {
    console.log(error);
    res.status(400).send("Teacher Update Failed");
  }
};

const read = async (req, res) => {
  let singleteacher = await User.findById(req.params.teacherId)
    .select("-image.data")
    // .populate("postedBy", "_id name")
    .exec();
  console.log("SINGLE TEACHER", singleteacher);
  res.json(singleteacher);
};

 module.exports = {register, login, update, read}