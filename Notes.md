
### server.js is the entry file for the backend app, where the express app is going to be registered 

### npm init -y - create a package.json file in the backend folder. This file keeps track of dependencies and register our own scripts.

### npm install express- install express

### npm install -g nodemon - This installs the nodemon package globally

## Nodemon -
 nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
[Read more here](https://www.npmjs.com/package/nodemon)

## .env file will store all environment variables

## npm install dotenv - installs the dotenv package. this package loads environment variables feom a .env file into the process .env object, available to us globally in a node js environment

## npm install mongoose - installs the mongoose package
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. We will use it to connect to the database inside the server.js file.

[Reference](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiOy77t5oKBAxV3TEEAHemGBn8QFnoECEEQAw&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fintroduction-to-mongoose-for-mongodb-d2a7aa593c57%2F&usg=AOvVaw22o17VmM6Lkp-qWmszgGjM&opi=89978449)

Purpose of the Car.js file in the models folder is to determine the database structure of the app
