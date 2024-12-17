import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  // Схема валидации
  const validationSchema = Yup.object({
    username: Yup.string().required('Введите имя пользователя'),
    password: Yup.string().required('Введите пароль'),
  });

  // Начальные значения
  const initialValues = { username: '', password: '' };

  // Обработчик формы
  const handleSubmit = (values) => {
    console.log('Форма отправлена:', values);
  };

  return (
    <div>
      <h1>Вход</h1>
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

          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
