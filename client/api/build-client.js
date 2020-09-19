import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: `${req['x-forwarded-proto']}://${req.headers.host}`,
      headers: req.headers
    });
  } else {
    return axios.create({
      baseUrl: '/'
    });
  }
};
