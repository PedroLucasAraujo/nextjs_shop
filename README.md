# Next.js Shop

![cover](https://github.com/user-attachments/assets/99dfa3c4-628b-4d83-ae24-d119dfb2bdcc)

This project is a comprehensive, high-performance **online store** developed using **Next.js**, a framework known for its robust features and fast, dynamic rendering capabilities. Styled with **Stitches** (a modern CSS-in-JS library), the application boasts a sleek, responsive, and maintainable design. The store leverages **Stripe's API** for efficient product management and secure payment processing, aligning with the **headless e-commerce** model for maximum frontend-backend decoupling.

## Features

- **Headless Architecture**: Fully headless setup where **Stripe** manages all product and order data, allowing flexible and modular frontend development.
- **Server-side Rendering (SSR)**: Enhances user experience by ensuring pages load quickly with improved SEO.
- **Static Site Generation (SSG)**: Pre-renders pages at build time, boosting performance and scalability.
- **Secure Payment Integration**: Utilizes **Stripe Checkout** to provide secure, reliable payment processing.
- **Modern Styling**: Styled with **Stitches** for fast, dynamic, and maintainable design customization.

## Tech Stack

- **Next.js**: A powerful framework for building server-rendered and statically generated React applications.
- **Stitches**: An advanced CSS-in-JS solution for responsive, themeable design.
- **Stripe API**: A leading payment processing API for seamless e-commerce management.
- **RadixUi**: A library of accessible, high-quality UI components for React, designed to be fully customizable and easy to integrate.
- **useShoppingCart**: A React hook that simplifies building and managing shopping carts in e-commerce applications, providing complete functionalities like adding/removing items, price calculation, and inventory control.
- **Axios**: A popular JavaScript library for making HTTP requests, facilitating API calls with support for async operations, interceptors, and error handling.
- **Keen Slider**: A lightweight and flexible library for creating responsive, high-performance carousels and sliders, with support for custom animations and smooth navigation.


## Key Concepts Implemented

1. **Server-side Rendering (SSR)**: Optimizes dynamic content loading and improves SEO.
2. **Static Site Generation (SSG)**: Pre-builds static pages for enhanced speed and scalability.
3. **Headless E-commerce**: Decouples the frontend from backend services for a flexible, adaptable architecture.
4. **Secure Payment Processing**: Integrated with **Stripe Checkout** for a trusted, user-friendly checkout experience.

## How to Run the Project Locally

To run this project locally, follow these instructions:

1. Create an account and project on Stripe
2. Copy the public and private keys from the Stripe project
3. Create a .env.local file in the root of the project
4. Add the environment variables to the .env.local file, following the example in the .env.example file
5. Paste the copied keys from your Stripe project into the respective environment variables
6. Clone the Repository
```bash
git clone https://github.com/PedroLucasAraujo/nextjs_shop
cd nextjs_shop
```
7. Install Dependencies
```bash
npm install
# ou
yarn install
```
---
