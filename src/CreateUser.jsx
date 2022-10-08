import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { env } from './config';

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter Name "
      }

      if (values.name.length < 5) {
        errors.name = "Please enter Name less than 5 letters"
      }
      if (values.position === "") {
        errors.position = "Please enter Position"
      }
      return errors;
    },
    onSubmit: async (values) => {
      let users = await axios.post(`${env.api}/create-user`, values);
      alert("User Created");
    }


  })
  return (
    <>
      <div className='container'>
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <h1 className="h3 mb-0 text-dark-800">Create User Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Name</label>
              <input
                className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-6'>
              <label>Position</label>
              <input
                className={`form-control ${formik.errors.position ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className='col-lg-6'>
              <label>Office</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>
            <div className='col-lg-6'>
              <label>Age</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>
            <div className='col-lg-6'>
              <label>Satrt Date</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.startDate}
                onChange={formik.handleChange}
                name="startDate"
              />
            </div>
            <div className='col-lg-6'>
              <label>Salary</label>
              <input
                className='form-control'
                type={'text'}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>
            <div className='col-lg-6 mt-2'>

              <input
                className='btn-primary'
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />

            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default CreateUser;