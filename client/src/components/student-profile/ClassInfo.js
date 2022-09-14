import React from 'react'

const ClassInfo = ({h}) => {
  return (
    <div>
        <p>Name: {h.studentName} </p>
        <p>Class: {h.studentClass}</p>
        <p>Role: {h.role}</p>
    </div>
  )
}

export default ClassInfo