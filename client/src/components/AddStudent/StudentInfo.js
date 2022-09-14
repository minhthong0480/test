import { Fragment, React, useState } from "react";
import { toast } from "react-toastify";

import { Select } from "antd";
import "antd/dist/antd.css";
import { createStudent } from "../../action/student";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentDetailForm from "../forms/StudentDetailForm";
import RegisterForm from '../../components/forms/RegisterForm'
import { register } from "../../action/auth";

const StudentInfo = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const navigate = useNavigate();
  const { Option } = Select;
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    studentName: "",
    phone: "",
    email: "",
    studentClass: "",
    role: "",
    gender: "",
    fatherName: "",
    motherName: "",
    image: "",
    password: "",
    math:'0',
    english:'0',
    physic:'0'
  });

  const [preview, setPreview] = useState(
    "http://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const {
    studentName,
    phone,
    email,
    studentClass,
    role,
    gender,
    fatherName,
    motherName,
    image,
    password
  } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let studentData = new FormData();
    studentData.append("studentName", studentName);
    studentData.append("phone", phone);
    studentData.append("email", email);
    studentData.append("studentClass", studentClass);
    studentData.append("role", role);
    studentData.append("gender", gender);
    studentData.append("fatherName", fatherName);
    studentData.append("motherName", motherName);
    studentData.append("postedBy", auth.user._id);
    image && studentData.append("image", image);

    // let studentAccount = new FormData();
    const name = studentName
    // studentAccount.append("name", name);
    // studentAccount.append("email", email);
    // studentAccount.append("password", password);

    try {
      let res = await createStudent(token, studentData);
      dispatch(register({name, email, password}, navigate))

      console.log("STUDENT CREATE RES", res);
      toast.success("New Student added");
      setTimeout(() => {
        //window.location.reload();
        navigate("/student-list");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Student Details</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <StudentDetailForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleImageChange={handleImageChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />{" "}
            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </div>
        </div>
        {/* <div className="row">
          <RegisterForm />
        </div> */}
      </div>
    </Fragment>
  );
};

export default StudentInfo;
