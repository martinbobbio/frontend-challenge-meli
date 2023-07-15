# Frontend Challenge - Mercado Libre

Frontend challenge project for Mercado Libre.

## Description

This project is a frontend application developed using React with TypeScript and ViteJS. It includes two important views: product list and product detail. The application fetches data from a Node.js API built with Express, which in turn queries the Mercado Libre API to retrieve the necessary information.

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/martinbobbio/frontend-challenge-meli
```

2. Install depencencies

```bash
npm install
```

3. Create a .env.development file in the root directory of the project and add the following environment variables:

```plaintext
REACT_APP_API_URL=<api-url>
```

Replace <api-url> with the URL of your Node.js API.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and access the application at http://localhost:3000.

## Views

### Product List

- This view displays a list of products fetched from the Node.js API
- It provides a search functionality to filter products by name or category.

### Product Detail

- It retrieves the product data from the Node.js API based on the product ID.
- This view displays detailed information about a specific product.

## Scripts

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to lint the source code.
- `npm run preview`: Builds and previews the production-ready application.
