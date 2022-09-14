import React from 'react'
import EditStudentCard from './EditStudent'
import ViewStudent from './ViewStudent'


function TeacherManage() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col border border-dark p-3 m-3"><ViewStudent /></div>
      </div>
      <div className="row">
        <div className="col border border-dark p-3 m-3"><EditStudentCard /></div>
      </div>
    </div>
  )
}

export default TeacherManage