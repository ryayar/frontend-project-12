import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { routes } from '../../../utils';
import { setToken, setUsername } from '../../../slices/authSlice';
import { useLoginMutation } from '../../../utils/apiClient.js';

const AuthForm = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const input = useRef(null);
  const [login] = useLoginMutation();

  useEffect(() => {
    if (error) {
      input.current.focus();
    }
  }, [error]);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { token, username } = await login(values).unwrap();
      dispatch(setToken(token));
      dispatch(setUsername(username));
      redirect(routes.chat);
    } catch (err) {
      setError(t('errors.authError'));
      setSubmitting(false);
      toast(t('errors.networkError'));
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('loginPage.enter')}</h1>
      <div className="form-floating mb-3">
        <input
          id="username"
          name="username"
          type="text"
          className={`form-control ${error ? 'is-invalid' : null}`}
          placeholder={t('loginPage.yourNick')}
          onChange={formik.handleChange}
          value={formik.values.username}
          ref={input}
        />
        <label htmlFor="username">{t('loginPage.yourNick')}</label>
      </div>
      <div className="form-floating mb-4">
        <input
          id="password"
          name="password"
          type="password"
          className={`form-control ${error ? 'is-invalid' : null}`}
          placeholder={t('loginPage.password')}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <label htmlFor="password">{t('loginPage.password')}</label>
        {error && (<div className="invalid-tooltip">{t('errors.authError')}</div>)}
      </div>
      <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
        {t('loginPage.enter')}
      </button>
    </form>
  );
};

export default AuthForm;
