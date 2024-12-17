import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required('Введите имя пользователя'),
    password: Yup.string().required('Введите пароль'),
  });

  const initialValues = { username: '', password: '' };

  const handleSubmit = (values) => {
    return axios.post('/api/v1/login', values)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch(() => {
        setErrorMessage('Неверные имя пользователя или пароль');
      });
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Имя пользователя:</label>
            <Field id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
