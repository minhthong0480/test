import { Fragment, React, useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import {  useSelector } from "react-redux";

const StudentEditForm = (props) => {
//   const { auth } = useSelector((state) => ({ ...state }));
//   const { token } = auth;
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props;
  const { Option } = Select;
//   const [preview, setPreview] = useState(
//     "http://via.placeholder.com/100x100.png?text=PREVIEW"
//   );
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
  return (
    <Fragment>
      
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Image
          <input
            type="file"
            name="image"
            defaultValue={image}
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>
        <input
          type="text"
          name="studentName"
          defaultValue={studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="form-control m-2"
          values={studentName}
        />
        
        <input
          type="number"
          name="phone"
          defaultValue={phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="form-control m-2"
          values={phone}
        />
        <input
          type="text"
          name="email"
          defaultValue={email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control m-2"
          values={email}
          disabled
        />
        <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="form-control m-2"
            values={password}
            disabled
          />
        <input
          type="studentClass"
          name="studentClass"
          defaultValue={studentClass}
          onChange={handleChange}
          placeholder="Class"
          className="form-control m-2"
          values={studentClass}
        />
        <input
          type="number"
          name="role"
          defaultValue={role}
          onChange={handleChange}
          placeholder="Role"
          className="form-control m-2"
          values={role}
        />

        <Select
          onChange={(value) => setValues({ ...values, gender: value })}
          className="w-100 m-2"
          size="large"
          placeholder='Gender'
          value={gender}
        >
          <Option value='Male'>Male</Option>
          <Option value='Female'>Female</Option>
        </Select>

        <input
          type="text"
          name="fatherName"
          defaultValue={fatherName}
          onChange={handleChange}
          placeholder="Father Name"
          className="form-control m-2"
          values={fatherName}
        />
        <input
          type="text"
          name="motherName"
          defaultValue={motherName}
          onChange={handleChange}
          placeholder="Mother Name"
          className="form-control m-2"
          values={motherName}
        />
      </div>
      <button className="btn btn-outline-primary m-2">Save Edit</button>
    </form>
    </Fragment>
  )
}

export default StudentEditForm;