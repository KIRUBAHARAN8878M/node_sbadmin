import React from "react";

import { useFormik } from "formik";
import axios from "axios";

import { env } from "./config";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
//   let username = "abc";
//   let pass = "123";
//   let login = () => {
//     if (username == "abc" && pass == "123") {
//         navigate("/portal/dashboard");
//     } else {
//       alert("Worng data");
//     }
//   };

  let formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/register`, values);
        
        navigate("/");
      } catch (error) {
        alert(error.response.messsage)
        console.log(error);
      }
    },
  });
  return (
    <div class="container">
      {/* <!-- Outer Row --> */}
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div class="row">
                <div class="col-lg-6 mx-auto">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" onSubmit={formik.handleSubmit}>
                    <div class="form-group">      
                        <input
                          class="form-control form-control-user"
                         
                          type={"text"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name="name"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div class="form-group">      
                        <input
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          type={"email"}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          type={"password"}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                     

                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Register
                      </button>
                    </form>
                    <div class='text-center p-3 mt-2'>
                    <p>Already a member?
                        please <Link to={'/'} className='btn btn-outline-info'>Login</Link></p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
