const config = {
    API_BASE_URL: process.env.NODE_ENV === 'production'
      ? 'https://flask-react-portfolio.uw.r.appspot.com/'
      : 'http://127.0.0.1:5000',
  };
  
  export default config;
  