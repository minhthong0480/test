import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {read} from '../../action/student'
import ClassInfo from "./ClassInfo";
import PersonalInfo from "./PersonalInfo";
import SchoolInfo from "./SchoolInfo";
import ScoreTable from "./ScoreTable";
import TeacherNote from "./TeacherNote";

const StudentProfile=()=> {
  const [student, setStudent] = useState({});
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const loadStudent = async ()=>{
    let res = await read(auth.user.email, token)
    setStudent(res.data)
  }

  useEffect(()=>{
    loadStudent();
  },[]);

  return (

    <div className="container">    {
      // console.log(student)
    }
      <div className="row text-center">
        <div className="col">
          <SchoolInfo h={student} />
        </div>
      </div>
      <div className="h4 pb-2 mb-4 text-danger border-top border-dark"></div>
      <div className="row justify-content-left">
        <div className="col">
          <ClassInfo h={student}/>
        </div>
        <div className="col">
          <PersonalInfo h={student} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ScoreTable h={student} />
        </div>
      </div>
      {/* <div className="row">
        <div className="col">
          <TeacherNote h={student}/>
        </div>
      </div> */}
    </div>
  );
}

export default StudentProfile;
