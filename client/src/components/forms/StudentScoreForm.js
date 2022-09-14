import { Fragment, React, useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import {  useSelector } from "react-redux";

const StudentScoreForm = (props) => {
//   const { auth } = useSelector((state) => ({ ...state }));
//   const { token } = auth;
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props;
  const { Option } = Select;
//   const [preview, setPreview] = useState(
//     "http://via.placeholder.com/100x100.png?text=PREVIEW"
//   );
  const {
    math, english, physic, image
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
            disabled
          />
        </label><br />
        
        <label>Math: <br /><input
          type="number"
          name="math"
          defaultValue={0}
          onChange={handleChange}
          placeholder="Math Score"
          className="form-control m-2"
          values={math}
        /></label><br />
        
        <label>English: 
        <input
          type="number"
          name="english"
          defaultValue={0}
          onChange={handleChange}
          placeholder="English Score"
          className="form-control m-2"
          values={english}
        />
        </label><br />
        <label>Physic
        <input
          type="number"
          name="physic"
          defaultValue={0}
          onChange={handleChange}
          placeholder="Physic Score"
          className="form-control m-2"
          values={physic}
        />
        </label>
        
      </div>
      <button className="btn btn-outline-primary m-2">Save Edit</button>
    </form>
    </Fragment>
  )
}

export default StudentScoreForm;