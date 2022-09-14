const Student = require("../model/Student");
const fs = require("fs");

const create = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let student = new Student(fields);
    //handle image
    if (files.image) {
      student.image.data = fs.readFileSync(files.image.path);
      student.image.contentType = files.image.type;
    }
    student.save((error, result) => {
      if (error) {
        console.log("Cannot save student", error);
        res.status(400).send("Saving student error");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

const students = async (req, res) => {
  let all = await Student.find({ postedBy: req.user })
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .exec();
  //console.log(all)
  res.json(all);
};

const image = async (req, res) => {
  let student = await Student.findById(req.params.studentId).exec();
  if (student && student.image && student.image.data !== null) {
    res.set("Content-Type", student.image.contentType);
    return res.send(student.image.data);
  }
};

const deleteStudent = async (req, res) => {
  let removed = await Student.findByIdAndDelete(req.params.studentId)
    .select("-image.data")
    .exec();
  res.json(removed);
};

const update = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let data = { ...fields, ...files };

    if (files.image) {
      let image = {};
      image.data = fs.readFileSync(files.image.path);
      image.contentType = files.image.type;

      data.image = image;
    }

    let updated = await Student.findByIdAndUpdate(req.params.studentId, data, {
      new: true,
    }).select("-image.data");
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send("Student Update Failed");
  }
};

const updateScore = async (req, res) => {
  try {
    let fields = req.fields;
    let files = req.files;

    let data = { ...fields, ...files };

    if (files.image) {
      let image = {};
      image.data = fs.readFileSync(files.image.path);
      image.contentType = files.image.type;

      data.image = image;
    }

    let updated = await Student.findByIdAndUpdate(req.params.studentId, data, {
      new: true,
    }).select("-image.data");
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send("Student Update Failed");
  }
};

const read = async (req, res) => {
  let singlestudent = await Student.findOne({ email: req.params.studentId })
    .select("-image.data")
    // .populate("postedBy", "_id name")
    .exec();
  console.log("SINGLE STUDENT", singlestudent);
  res.json(singlestudent);
};

const readOne = async (req, res) => {
  let onestudent = await Student.findById(req.params.studentId)
    .select("-image.data")
    // .populate("postedBy", "_id name")
    .exec();
  console.log("SINGLE STUDENT", onestudent);
  res.json(onestudent);
};

module.exports = { create, students, image, deleteStudent, update, read, readOne, updateScore };
