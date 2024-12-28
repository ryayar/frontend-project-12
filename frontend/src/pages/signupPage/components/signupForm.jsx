import axios, { isAxiosError } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Tooltip from './tooltip';
import { setToken, setUsername } from '../../../slices/authSlice';
import { getNewUserSchema, paths, routes } from '../../../utils';

const SignupForm = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const schema = getNewUserSchema(t);
  const input = useRef(null);

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
    const path = paths.signup();
    await axios.post(path, values)
      .then(({ data }) => {
        if (data.token) {
          const {
            token,
            username,
          } = data;

          dispatch(setToken(token));
          dispatch(setUsername(username));

          redirect(routes.chat);
        } else {
          setError('SignupError');
        }
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          if (err.response.status === 409) {
            setError(t('errors.signupError'));
          } else {
            setError(err.message);
          }
        } else {
          setError(t('errors.networkError'));
        }
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <form className="w-50" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">{t('signupPage.registration')}</h1>
      <div className="form-floating mb-3">
        <input
          id="username"
          name="username"
          type="text"
          className={cn('form-control', {
            'is-invalid': ((formik.touched.username && formik.errors.username) || error),
          })}
          placeholder={t('validationSchema.length')}
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          ref={input}
        />
        <label htmlFor="username">{t('signupPage.username')}</label>
        <Tooltip
          touched={formik.touched.username}
          validError={formik.errors.username}
          authError={error}
          last={false}
        />
      </div>
      <div className="form-floating mb-3">
        <input
          id="password"
          name="password"
          type="password"
          className={cn('form-control', {
            'is-invalid': ((formik.touched.password && formik.errors.password) || error),
          })}
          placeholder={t('validationSchema.minLength')}
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="password">{t('signupPage.password')}</label>
        <Tooltip
          touched={formik.touched.password}
          validError={formik.errors.password}
          authError={error}
          last={false}
        />
      </div>
      <div className="form-floating mb-4">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className={cn('form-control', {
            'is-invalid': ((formik.touched.confirmPassword && formik.errors.confirmPassword) || error),
          })}
          placeholder={t('validationSchema.passwordsMatch')}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="confirmPassword">{t('signupPage.confirmPassword')}</label>
        <Tooltip
          touched={formik.touched.confirmPassword}
          validError={formik.errors.confirmPassword}
          authError={error}
          last
        />
      </div>
      <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
        {t('signupPage.signup')}
      </button>
    </form>
  );
};

export default SignupForm;
