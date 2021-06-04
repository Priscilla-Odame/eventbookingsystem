
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const useForm = (callback, validate, type) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    date_of_birth: "",
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
    console.log(values)

    //Base URL
    const api_url = 'https://eventsys.herokuapp.com';

    //ENDPOINT
    const endpoint = "/register/";

    const url = api_url + endpoint;

    //PAYLOAD or DATA //or you could do it this way const { } = values

    const payload = { firstname: values.firstname, lastname: values.lastname, 
      email: values.email, password: values.password, date_of_birth: values.date_of_birth
 }


    //now our call to the backend
    axios.post (url, payload)
    .then(res => {
      console.log(res)
    } )
    .catch(err =>{
      console.log (err)
    }); 
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
