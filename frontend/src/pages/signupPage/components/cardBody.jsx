import { useTranslation } from 'react-i18next';
import SignupImage from '../../../images/signup.jpg';
import SignupForm from './signupForm';

const CardBody = () => {
  const { t } = useTranslation();

  return (
    <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
      <div>
        <img src={SignupImage} className="rounded-circle" alt={t('signupPage.registration')} />
      </div>
      <SignupForm />
    </div>
  );
};

export default CardBody;
