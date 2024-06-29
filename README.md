# My Portfolio

This repository hosts the source code and deployment configuration for my personal/portfolio website hosted on GitHub Pages. (In Progress)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [Git](https://git-scm.com/) installed

### Initializing a React Application

1. **Create a new React application:**

   ```bash
   npx create-react-app my-portfolio
   cd my-portfolio
2. **Install the gh-pages package:**

   ```bash
   npm install gh-pages --save-dev
3. **Update package.json with deployment scripts:**

   Open package.json and add the following fields and scripts:

   ```json
   {
      "homepage": "https://your-username.github.io/your-repository",
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
       }
     }

Replace your-username and your-repository with your GitHub username and repository name.

## Development Workflow

1. **Make changes in the main branch:**

     ```bash
     git commit -m "Describe your changes"
     git push 

2. **Run the development server:**
     ```bash
     npm start

  Open your browser and visit http://localhost:3000 to view the application.

3. **Deploy the application to GitHub Pages:**

     Run the deploy script on main branch to build and deploy the application:

     ```bash
     npm run deploy

### GitHub Pages Update
GitHub Pages automatically detects changes on the gh-pages branch and updates your deployed application accordingly. It may take a few moments for GitHub Pages to reflect the changes after you push to the gh-pages branch.

### Troubleshooting
- Clear Cache: If your changes don't appear immediately, try clearing your browser cache or accessing the site in an incognito window.
- Verify Configuration: Ensure the homepage field in your package.json matches your GitHub Pages URL and that GitHub Pages is set to deploy from the gh-pages branch in your repository settings.
## Additional Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
