import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../utils';

const CardFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('loginPage.noAccount')}</span>
        <Link to={routes.signup}>{t('loginPage.registration')}</Link>
      </div>
    </div>
  );
};

export default CardFooter;
