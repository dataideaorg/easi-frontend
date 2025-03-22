# EASI Website

This is the official website for the East African Statistics Institute (EASI).

## Development

To run the development server:

```bash
cd frontend
npm install
npm run dev
```

The development server will be available at http://localhost:3000.

## Deployment

### Automatic Deployment with GitHub Actions

This repository is configured to automatically deploy to GitHub Pages whenever changes are pushed to the main branch. The deployment process:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the application
5. Deploys to the gh-pages branch

### Manual Deployment

To manually deploy the site to GitHub Pages:

```bash
cd frontend
npm run deploy
```

This will build the application and deploy it to the gh-pages branch.

## Project Structure

- `/frontend`: React application built with Vite, React Router, Material UI, and Tailwind CSS
- `/backend`: Django-based API (deployed separately)

## Technologies Used

- React 19
- TypeScript
- Material UI
- Tailwind CSS
- Framer Motion
- Vite
- GitHub Actions for CI/CD 