# Getting Started with PayMe Application
# @author Gauri Yadav

This is a React application developed using Hooks
The application consists of following Primary Modules

# FRONTEND Components reside in /client/src/components folder and are as follows
1)Login
2)UserProfile
3)NavBar
4)PageNotFound
5)AddNew
6)Footer

# Style / User Experience
All images are kept in /client/src/images folder
All Modules specific .css are kept in /client/src/style folder.
Media Queries are also used to make application responsive

# Test Cases
All Component specific test files are present in /client/src/test folder

# Node.JS BACKEND services
1) /userdetails GET API
2) /login POST API

## Available Scripts

In the project directory, you can run:

### `npm run startup`
Installs Node JS related packages as well as React application packages

### `npm run paymeapp`
Concurently start both the application and runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Testing React Compoments - Current Test coverage is 83.11 % for components

### `npm run testsuite`

### Libraries Used in /client/package.json for React Application is explained below :-
1) @mui/material, @mui/icons-material, @emotion/react, @emotion/styled, @mui/lab
   These libraries are used to incorporate Material UI Latest UI component library -> Input elements, Icons, Action elments
2) react-router-dom
   This libary is used to implement Routing 
3) "proxy": "http://localhost:5000"
   This value is used to connect to Node JS backend running on Port 5000
