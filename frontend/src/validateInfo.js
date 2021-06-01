export default function validateInfo(values, type) {
    let errors = {};
  
    if (type === "signup") {
      if (!values.firstname.trim()) {
        errors.firstname = "First Name required";
      }
  
      if (!values.surname.trim()) {
        errors.surname = "Surname required";
      }
  
      if (!values.dob.trim()) {
        errors.dob = "Date of birth required";
  
        /*else if (!/^[A-Za-z]+/.test(values.name.trim())) {
       errors.name = 'Enter a valid name';*/
      }
  
      //email
      if (!values.email) {
        errors.email = "Email required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
  
      if (!values.password) {
        errors.password = "Password is rquired";
      } else if (values.password.length < 6) {
        errors.password = "Password needs to be at least 6 characters";
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          values.password
        )
      ) {
        errors.password =
          "Password must Contain  at least one Uppercase, One Lowercase, One Number and one special case Character";
      }
  
      if (!values.password2) {
        errors.password2 = "Password is required";
      } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match";
      }
    } else {
      if (!values.email2) {
        errors.email2 = "Email required";
      } else if (!/\S+@\S+\.\S+/.test(values.email2)) {
        errors.email2 = "Email address is invalid";
      } else if (values.email2 !== values.email) {
        errors.email2 = "Emails do not match";
      }
  
      if (!values.password3) {
        errors.password3 = "Password is required";
      } else if (values.password3 !== values.password) {
        errors.password3 = "Passwords do not match";
      }
    }
    return errors;
  }
  