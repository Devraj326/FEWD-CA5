import React, { useState, useEffect } from 'react';
import './Register.css';
import Navbar from '../Navbar';
function App() {
  const initialValues = { username: '', email: '', password: '', repeatPassword: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.username) {
      errors.username = 'Username is required!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email is not valid!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 10) {
      errors.password = 'Password must be more than 10 characters!';
    } else if (!specialCharRegex.test(values.password)) {
      errors.password = 'Password must contain at least 1 special character!';
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = 'Repeat password is required!';
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = 'Passwords do not match!';
    }

    return errors;
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      
      
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <div></div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="ui form"></div>
        <div className="field">
          <label>Name</label>
          <input 
            type="text"
            name="username"
            placeholder="Ex: Sympathy Singh"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="For ex: abc@gmail.com"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="**** ****"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>

        <div className="field">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="**** **** "
            value={formValues.repeatPassword}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.repeatPassword}</p>

        <button className="fluid ui button blue" type="submit">
          Submit
        </button>
      </form>
    </div></>
  );
}

export default App;

