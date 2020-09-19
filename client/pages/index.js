import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  const response = await axios.get('/api/users/curentuser');

  return response.data;
};

export default LandingPage;
