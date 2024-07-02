# My Portfolio

This repository hosts the source code and deployment configuration for my personal/portfolio website hosted on GitHub Pages. (In Progress)
URL: https://vchinsomboon.github.io/vchinsomboon-portfolio.
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [Git](https://git-scm.com/) installed

### Clone React Project Repo

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vchinsomboon/vchinsomboon-portfolio.git
   cd vchinsomboon-portfolio
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
   Make sure to execute this command in the root directory of the project
## Development Workflow

1. **Make changes in the main branch:**

     ```bash
     git commit -m "Describe your changes"
     git push 
     ``` 
2. **Run the development server:**
     ```bash
     npm start
     ``` 
  Open your browser and visit http://localhost:3000 to view the application.

3. **Deploy the application to GitHub Pages:**

     Run the deploy script on main branch to build and deploy the application:

     ```bash
     npm run deploy
     ``` 

   Check that the application updates successfully by visiting https://vchinsomboon.github.io/vchinsomboon-portfolio.
### GitHub Pages Update
GitHub Pages automatically detects changes on the gh-pages branch and updates your deployed application accordingly. It may take a few moments for GitHub Pages to reflect the changes after you push to the gh-pages branch.

### Troubleshooting
- Clear Cache: If your changes don't appear immediately, try clearing your browser cache or accessing the site in an incognito window.
- Verify Configuration: Ensure the homepage field in your package.json matches your GitHub Pages URL and that GitHub Pages is set to deploy from the gh-pages branch in your repository settings.
## Additional Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
