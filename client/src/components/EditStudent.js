import { Fragment, React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useMatch } from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import { updateStudent, read, readOne } from "../action/student";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentEditForm from "./forms/StudentEditForm";
import { register } from "../action/auth";


const EditStudent = () => {
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
    password:''
  });

  const [image, setImage] = useState('')

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

    const name = studentName

    try {
      let res = await updateStudent(token, studentData, studentId);

      console.log("STUDENT UPDATED RES", res);
      toast.success(" Student Updated");
      setTimeout(() => {
        //window.location.reload();
        navigate("/student-list");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  let match = useMatch("/edit-student/:studentId");
  const {studentId} = useParams()
  
  const loadStudent = async () => {
    let res = await readOne(studentId, token);
    setValues({ ...values, ...res.data });
    setPreview(`${process.env.REACT_APP_API}/students/image/${studentId}`);
  };

  useEffect(() => {
    // console.log(match.params);
    loadStudent();
  }, []);

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit Student Details</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <StudentEditForm
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
      </div>
    </Fragment>
  );
};

export default EditStudent;
