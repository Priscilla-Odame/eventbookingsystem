import React from 'react'
import useForm from './useForm.js'
import validate from './validateInfo'
import "./Form.css";
import { Link } from "react-router-dom";


const FormSignIn = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate, "signin" );

    return (
        
      <div className="container">
          <div className="image">
              <img src = "img/online.jpeg" alt= "manlaptop" className = "container-img" />
          </div>

          <div className="contentbx">
          <form onSubmit={handleSubmit} className="sign-in-form" noValidate>
          <div className="Sign-in-Title">Sign In</div>

              <div className="sign-in-form-inputs">
                  <label htmlFor="email2" 
                  className="label">
                      Email
                    </label>

                    <input 
                    id = "email2"
                    type="email" 
                    name = "email2"
                    className = "sign-in-form-input"
                    placeholder = "Enter your email"

                    values={values.email2}
                    onChange={handleChange}
                     />
                {errors.email2 && <p>{errors.email2}</p>}

              </div>

              <div className="sign-in-form-inputs">
                  <label htmlFor="password3" 
                  className="label">
                      Password
                    </label>

                    <input 
                    id = "password3"
                    type="password" 
                    name = "password3"
                    className = "sign-in-form-input"
                    placeholder = "Enter your Password"

                    values={values.password3}
                    onChange={handleChange}
                    />
                     {errors.password3 && <p>{errors.password3}</p>}

              </div>

              <div className="remember">
                  <label htmlFor="remember"
                  className="remember"> 
                  <input type="checkbox" /> 
                  Remember Me</label>
           </div>

              <button className="sign-in-btn" 
                type="Submit">
                    Login
                </button>

             <p>Don't have an account? <Link to="/">Sign Up</Link></p>

          </form>
          </div>

      </div>
    )
}

export default FormSignIn
