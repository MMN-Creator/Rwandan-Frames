# Rwandan Frames

A React-based web application showcasing stories, events, and daily life in Rwanda through unique perspectives.

## Project Overview

Rwandan Frames is a publishing platform that tells stories about Rwanda's people, events, and daily life. The platform aims to bring short, catchy, yet credible glimpses into Rwanda through various categories including Culture & Lifestyle, Sports, Entertainment, and Hidden Gems.

## Implemented Performance Optimizations

We've implemented several performance optimizations to improve the user experience:

### Code Splitting and Lazy Loading
- Dynamic import of blog components using React.lazy and Suspense
- Lazy loading of images with loading="lazy" attribute
- Component-level code splitting for better initial load times

### Image Optimization
- Preloading of carousel images
- Fallback images for loading failures
- Consistent error handling across all images
- Responsive image loading

### Component Structure Improvements
- Separation of concerns in component architecture
- Reusable utility functions
- Better state management practices

For detailed information about the optimizations, see [Performance Optimizations Documentation](src/docs/performance-optimizations.md).

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/               # Page components
├── blogs/               # Blog content components
├── utils/               # Utility functions
│   ├── blogLoader.js    # Dynamic blog component loader
│   ├── imagePreloader.js # Image preloading utilities
│   ├── imageOptimizer.js # Image optimization utilities
│   └── imageErrorHandler.js # Image error handling utilities
└── docs/                # Documentation files
```

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
