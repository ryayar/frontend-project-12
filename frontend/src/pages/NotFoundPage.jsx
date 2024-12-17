import { Container } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4">404</h1>
        <p>Похоже, вы попали не туда.</p>
      </div>
    </Container>
  );
};

export default NotFoundPage;
