import React from 'react'

const PersonalInfo = ({h})=> {
  return (
    <div>
        <p>Gender: {h.gender}</p>
        <p>Father's name: {h.fatherName}</p>
        <p>Mother's name: {h.motherName}</p>
    </div>
  )
}

export default PersonalInfo