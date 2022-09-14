import React from 'react'
import {Link} from 'react-router-dom'

function EditStudentCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add New Student</h5>
        <p className="card-text">
          Click to add new student
        </p>
        <Link to='/add-student'><button className="btn btn-primary">Add</button></Link>
      </div>
    </div>
  )
}

export default EditStudentCard;