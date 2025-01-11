import NotFoundIcon from '../assets/NotFound.svg';

const PageNotFound = ({ classNames }) => (
  <img
    src={NotFoundIcon}
    alt="Send"
    className={ classNames }
  />
);

PageNotFound.defaultProps = {
  classNames: {},
};


export default PageNotFound;
