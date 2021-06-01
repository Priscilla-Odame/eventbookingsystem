import React from "react";
import useForm from "./useForm.js";
import validate from "./validateInfo";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";

const FormSignUp = () => {
  // move to signin page
  const history = useHistory();
  const moveToSignIn = () => {
    history.push('/FormSignIn')
  }

  const { handleChange, values, handleSubmit, errors } = useForm(
    moveToSignIn,
    validate,
    "signup"
  );

  return (
    <div className="form-container">
      <div className="backimage">
        <img
          src="img/online.jpeg"
          alt="manlaptop"
          className="container-image"
        />
      </div>

      <div className="form-content-center">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="title">Registration</div>

          <div className="form-inputs">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>

            <input
              id="firstname"
              type="text"
              name="firstname"
              className="form-input"
              placeholder="Enter your first name"
              values={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>

            <input
              id="surname"
              type="text"
              name="surname"
              className="form-input"
              placeholder="Enter your surname"
              values={values.surname}
              onChange={handleChange}
            />
            {errors.surname && <p>{errors.surname}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>

            <input
              id="dob"
              type="date"
              name="dob"
              className="form-input"
              placeholder="Enter your date of birth"
              values={values.username}
              onChange={handleChange}
            />
            {errors.dob && <p>{errors.dob}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              values={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              values={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm Password
            </label>

            <input
              id="password2"
              type="password"
              name="password2"
              className="form-input"
              placeholder="Confirm your Password"
              values={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>

          <button className="form-input-btn" type="Submit">
            Submit
          </button>

          <span className="form-input-login">
            Already have an Account? Login <Link to="/FormSignIn">here</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;