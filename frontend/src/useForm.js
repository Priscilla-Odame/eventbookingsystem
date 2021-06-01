import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useForm = (callback, validate, type) => {
  const [values, setValues] = useState({
    firstname: "",
    surname: "",
    dob: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, type));
    setIsSubmitting(true);

    // history.push('/FormSignIn');
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      alert("Success!");
      setTimeout(() => callback(), 1000);
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, history };
};

export default useForm;
