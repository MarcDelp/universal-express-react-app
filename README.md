# universal-express-react-app

## 01/react-app
Hi! So you're looking at the differents stages I made to build the whole application? Great.
In this branch, I set up the client with a small React base. I also set up webpack so that we can build the client and run it.

To test the code of this branch, make sure you have installed all the dependencies and then run:
```
npm run build:client
npx http-server dist/client
```

For windows users, sorry, the script won't work as is. Just change it to remove the `rm -rf dist` part and it should work just fine.

What have I done in this part?
- First, I created 3 components for my React app (in `src/client/components`)
- I also created a simple `index.html` file with basic information to be able to render my React app + I added a favicon
- I defined a few routes to serve my components
- I added a script to render my React app

And that's all for my React base app!

Now that's fine, but this could not work without webpack to bundle the files. So, I also created a webpack configuration file, to handle the client build.

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
