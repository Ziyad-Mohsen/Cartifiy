# Cartify

**Cartify** is a dynamic eCommerce platform built to help me learn React, React Router DOM, and related technologies. The app integrates FakeStoreAPI to simulate product data, providing a seamless shopping experience with features like product browsing, adding to cart, and more.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)
- [Future Improvements](#future-improvements)
- [License](#license)

## Demo

Check out the live demo of **Cartify** [here](https://ziyad-mohsen.github.io/Cartifiy).

## Features

- Browse a variety of products fetched from FakeStoreAPI.
- View detailed product information.
- Add and remove items from the shopping cart.
- Dynamic routing for individual product pages.
- Responsive design with Tailwind CSS.

## Tech Stack

- **Frontend**: React, React Router DOM, Tailwind CSS
- **Data Source**: [FakeStoreAPI](https://fakestoreapi.com/)
- **State Management**: React Hooks and Context API
- **Build Tool**: Vite

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cartify.git
   cd cartify
   ```
2. **Install dependencies:**

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app in your browser:**

   Visit http://localhost:5173 to see the app in action.

## Usage

- **Homepage**: View the featured products and navigate to product details.
- **Product Page**: View details of a selected product and add it to the cart.
- **Cart**: See items added to the cart with pricing and quantity

## Project Structure

```graphql
cartify/
│
├── public/              # Public folder (assets, favicon, etc.)
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # Context API for state management
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Home, ProductDetails, etc.)
│   ├── App.jsx          # Main app component
│   └── index.jsx        # Entry point
│
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Learning Objectives

This project was built with the following learning goals in mind:

- Understanding React's component-based architecture.
- Mastering routing using React Router DOM (dynamic routing, useParams, useLocation).
- Learning state management with React Hooks and Context API.
- Implementing Tailwind CSS for responsive and modern UI design.
- Handling API data using Fetch.

## License

```
This project is licensed. All rights are reserved by the author. You may not use, copy, modify, or distribute this code without explicit permission from the author.
```
