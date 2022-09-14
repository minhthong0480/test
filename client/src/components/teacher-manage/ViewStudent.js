import React from "react";
import {Link} from 'react-router-dom'

function ViewStudent() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">View Student</h5>
        <p className="card-text">
          Click to view student details
        </p>
        <Link to='/student-list'><button className="btn btn-primary">View</button></Link>
      </div>
    </div>
  );
}

export default ViewStudent;
