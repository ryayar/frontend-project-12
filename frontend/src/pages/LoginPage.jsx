import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

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
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }} className="p-4 shadow">
        <h1 className="text-center mb-4">Войти</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Имя пользователя</label>
              <Field id="username" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль</label>
              <Field id="password" name="password" type="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}

            <Button type="submit" variant="primary" className="w-100">Войти</Button>
          </Form>
        </Formik>
        <div className="text-center mt-3">
          Нет аккаунта? <a href="/signup">Регистрация</a>
        </div>
      </Card>
    </Container>
  );
};

export default LoginPage;
