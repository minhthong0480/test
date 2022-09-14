import { Fragment, React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useMatch } from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import {  readOne } from "../../action/student";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StudentScoreForm from "../forms/StudentScoreForm";
import { updateScore } from "../../action/student";

const AddStudentScore = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const navigate = useNavigate();
  const { Option } = Select;
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    math: "",
    english: "",
    physic: "",
  });

  const [image, setImage] = useState('')

  const [preview, setPreview] = useState(
    "http://via.placeholder.com/100x100.png?text=PREVIEW"
  );

  const { math, english, physic } = values;



  const handleSubmit = async (e) => {
    e.preventDefault();
    let scoreData = new FormData();
    scoreData.append("math", math);
    scoreData.append("english", english);
    scoreData.append("physic", physic);

    try {
      let res = await updateScore(token, scoreData, studentId);

      console.log("SCORE UPDATED RES", res);
      toast.success(" Score Updated");
      setTimeout(() => {
        //window.location.reload();
        navigate("/student-list");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  const { studentId } = useParams();

  const loadStudent = async () => {
    let res = await readOne(studentId, token);
    setValues({ ...values, ...res.data });
    setPreview(`${process.env.REACT_APP_API}/students/image/${studentId}`);

  };

  useEffect(() => {
    // console.log(match.params);
    loadStudent();
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit Student Score</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            <StudentScoreForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
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

export default AddStudentScore;
