const mongoose = require("mongoose");

const { Schema } = mongoose;
var { ObjectId } = require('mongodb').ObjectId

const studentSchema = new Schema(
  {
    studentName:{
      type: String,
      required: "Student name is required",
    },

    phone: {
      type: Number,
    },

    email: {
      type: String,
    },

    studentClass: {
      type: String,
    },

    role:{
      type: Number,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    image: {
      data: Buffer,
      contentType: String,
    },

    gender:{
      type:String,
    },

    fatherName:{
      type: String
    },

    motherName:{
      type: String,
    },

    math: {type: Number},

    english: {type: Number},

    physic: {type: Number},
  },
  { timestamps: true }
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
