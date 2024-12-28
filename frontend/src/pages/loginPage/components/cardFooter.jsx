import { useTranslation } from 'react-i18next';
import { routes } from '../../../utils';

const CardFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="card-footer p-4">
      <div className="text-center">
        <span>{t('loginPage.noAccount')}</span>
        <a href={routes.signup}>{t('loginPage.registration')}</a>
      </div>
    </div>
  );
};

export default CardFooter;
