import React from 'react';
import FormValidator from './FormValidator';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <FormValidator initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationForm;
