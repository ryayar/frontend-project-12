import { useTranslation } from 'react-i18next';
import LoginImage from '../../../images/login.jpg';
import AuthForm from './authForm';

const CardBody = () => {
  const { t } = useTranslation();

  return (
    <div className="card-body row p-5">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <img src={LoginImage} className="rounded-circle" alt={t('loginPage.enter')} />
      </div>
      <AuthForm />
    </div>
  );
};

export default CardBody;
