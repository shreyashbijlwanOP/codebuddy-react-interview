// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import StepBox from '../components/StepBox';

const Home = () => (
  <main>
    <h1 className="text-center">Multi Step Form</h1>
    <StepBox />
    <Outlet />
  </main>
);

export default Home;

/**
  const onSubmit = () => navigate('/posts');
  const navigate = useNavigate();
 * 
 *  <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container>
 * */
