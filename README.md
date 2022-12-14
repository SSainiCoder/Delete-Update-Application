# Getting Started with Create React App

This project was bootstrapped with [Create React App] (https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Components`
1. Navbar.js: This component render the navigation bar on top of the web-application(with application name)
2. Record.js: This component help in arranging the data in an order
3. SetOfRecords.js: This component helps in fetching the data form the APIs and store them in state variables
                    after that render the mapped output of state into tabular form
4. UpdatePost.js: This component will show the text field on Actions column to edit the post title and save it permanently in array of objects.


### `User-Guide`
1. Import the project into local directory
2. Unzip it, then install the nodemodules folder with "npm -i" in your console.
3. Once the above steps followed, do npm start into console to run the application.
4. If the console says "'react-scripts' is not recognized as an internal or external command, operable program or batch file.", Then install: "npm install react-scripts --save" dependecy.
5. Once it's done, again write "npm start" and it will run the application at localhost:3000

