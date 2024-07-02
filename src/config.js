const config = {
  API_BASE_URL: process.env.NODE_ENV === 'production'
    ? 'https://flask-react-portfolio.uw.r.appspot.com/'
    : 'http://127.0.0.1:5000',
  EMAIL_URL: 'varalee.c7@gmail.com',
  GITHUB_URL: 'https://github.com/vchinsomboon',
  LINKEDIN_URL: 'https://www.linkedin.com/in/varalee-chinsomboon-a12a1215b',
  PROJECTS: [
    {
      id: 'Project1',
      title: 'Titanic Survival (ML)',
      description: 'Predicting survival on the Titanic using machine learning techniques.'
    },
    {
      id: 'Project2',
      title: 'Project 2 (TBD)',
      description: 'Description example...'
    },
    // Add more projects as needed
  ]
};

export default config;
