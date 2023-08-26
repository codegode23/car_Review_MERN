# Car Review App With MERN

### server.js is the entry file for the backend app, where the express app is going to be registered 

### npm init -y - create a package.json file in the backend folder. This file keeps track of dependencies and register our own scripts.

### npm install express- install express

### npm install -g nodemon - This installs the nodemon package globally

## Nodemon -
 nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
[Read more here](https://www.npmjs.com/package/nodemon)

## .env file will store all environment variables

## npm install dotenv - installs the dotenv package. this package loads environment variables feom a .env file into the process .env object, available to us globally in a node js environment

# API ENDPOINTS to interact with the database
* GET /reviews - Gets all reviews
* POST /review - Creates a new review
* GET /review/:id - Get a single review
* DELETE /review:id - Delete a single review
* PATCH / review/:id - Update a single review