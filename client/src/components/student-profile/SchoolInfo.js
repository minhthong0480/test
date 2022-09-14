import React from 'react'

const SchoolInfo = ({h}) => {
  return (
    <div>
        <h1>Rmit</h1>
        <h3>702 Nguyen Van Linh</h3>
        <p>Phone: {h.phone} - Email: {h.email}</p>
        <h3>REPORT STUDENT TABLE FOR SEMESTER 2/2022</h3>
    </div>
  )
}

export default SchoolInfo