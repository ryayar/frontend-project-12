import PageContainer from '../../components/pageContainer';
import Navbar from '../../components/navbar';
import CardContainer from '../../components/cardContainer';
import CardBody from './components/cardBody';
import CardFooter from './components/cardFooter';

const LoginPage = () => (
  <PageContainer>
    <Navbar />
    <CardContainer>
      <CardBody />
      <CardFooter />
    </CardContainer>
  </PageContainer>
);

export default LoginPage;
