# universal-express-react-app

## 04/redux
It's time to expand the potential of our application. To do so, in this branch I add state management by integrating Redux in the app.

To test the code on this branch, make sure you have installed all the dependencies and run :
```
npm run dev
```

Same as before, sorry for Windows users, the script won't run as is. Remove the rm -rf dist.

What's new exactly in this branch?

- I implemented a basic store / action / reducer to interact with our application
- I configured the store to enable the use of the redux-dev-tools extension in the browser
- I updated the client & server parts to use the redux environment (store / action)
- I updated the html template to give an initial redux state to use which will come from the server

What follows in this README is the same as in the master branch.

## Introduction
This is a small example of an universal JS app using Express and React in 2020. As such, the app will also run over HTTP2 protocol.

The git repository is structured with different numbered branches, to walk people through the creation of the app. The master branch contains the final version of the app, with all its features.

Feel free to use this as a codebase for your projects and let me know if you wish new features to be added in the repository!

## Key features
This app aims to provide a complete example of an universal JS app based on Express and React.  

Application features:
- An Express server, integrated with the spdy library to serve our application over HTTP2
- A React front-end, with redux and redux-saga
- Internationalization utils

Development features:
- The tools needed to build the application, with webpack and babel, and some polyfills
- Testing with jest
- TypeScript integration
- Recent JS syntax and linting using eslint

Although I added polyfills, the app targets recent browser and I don't give any guaranties if you use older browsers such as Internet Explorer.

## How to use
First, make sure you have NodeJS and npm installed. I am using NodeJS v12.13.1.

Clone the repo, then run `npm install` to install all dependencies.  
Note: I'll try to keep the dependencies up-to-date but if you are having troubles making the app work, run `npm ci` to get the exact dependencies I used when building the project.

Then, to make the app run in development mode, run `npm run dev`.

To make the app run in production mode, run `npm run build` and then `npm start`.

## Resources
Here is a list of resources that helped me to create this app:
- A great [introduction](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app) to universal app from Scotch.io, but with outdated dependencies
- Two posts [1](https://medium.com/@v31u/isomorphic-react-webapp-with-nodejs-express-redux-and-webpack-10b4fd99df7a) & [2](https://medium.com/@v31u/isomorphic-react-webapp-with-nodejs-express-redux-and-webpack-part-2-redux-4b08d543b8da) about universal apps more recents than the previous one, but still partly outdated
- A [tutorial](https://webapplog.com/http2-node/) to make a server using HTTP2
- A discussion on [redux-saga and redux-thunk](https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d)
- And of course, all the sites of dependencies used in this project for documentation
