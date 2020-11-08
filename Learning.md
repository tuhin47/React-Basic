# Learning React Basics

## 1-Introduction

### What is React?
- JavaScript framework for creating user interfaces
    - Full single page web applications
    - Just certain parts of a website (like a search form)
- Component-based
- Very fast (thanks to the virtual DOM)
- Created by Facebook

### Javascript Components

- Search Component
- Directory component
- Signup component

### What we'll learn...
- Installing React and setting up a workflow with webpack
- Create a simple to-do app, looking at:
    - Components, props, state, events and more
- Routing
- create-react-app

##2 - Setup with Webpack 
Modifications I made in order for the tutorial to work with `babel-7`:
1. replace `loaders` with `rules` in line 12 of webpack.config.js
1. Use command for babel installation
   ```
   npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
   ```
   
1. Remove the old versions of babel from "devdependencies" in package.json file. 
[Link](https://stackoverflow.com/questions/49182862/preset-files-are-not-allowed-to-export-objects) for reference.
1. In the `webpack.config.js` file, replace the presets **(line 18)** with the below
    presets: `['@babel/react', '@babel/preset-env']`

## 3 - React Components
- Most of our React code comprises of components
    - Search bar component
    - Sign-up component
    - To-do list component
        - List item component
        - Add new item (form) component

## 3.5 - React Dev Tools

## 5.5 Changing State (& Virtual DOM)

React -> Virtual DOM -> DOM
