// Importing our default express module from the downloaded express package.
// Express is almost same as the HTTP Module. The only difference is that it is easier to write code in express.
// Hence, express module is responsible for the deployment & management of huge applications.

// Creating a server using express
const express = require("express");

// Morgan is a package which determines each & every detail of the request such as method, time, etc.
// Importing Morgan Package
const morgan = require("morgan");

// The express method is used to create a server.
const app = express();

// Middleware
app.use(express.json());
// express.json() method is used for parsing the body and is the method available in the express module.

// morgan("dev") is a function. It is a Development dependency.
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("GET METHOD IS WORKING FINE!");
});

app.post('/', (req, res) => {
    res.send("POST METHOD IS WORKING FINE!");
});

app.get('/user', (req, res) => {
    res.send("It is a User Path working on GET Method.");
})

app.post('/user', (req, res) => {
    res.send("It is a User Path working on POST Method.")
})

// Server Listening

app.listen(8080, () => {
    console.log("Server is listening at Port: 8080");
});

// To parse the body data the client is sending via URL we'll use a middleware.
// Middleware is a function which is going to be executed everytime whenever we receive some request.
app.use((req, res, next) => {
// The middleware app.use always contains a single callback function with three parameters named as req, res & next.
console.log(req);
// To prevent the server from getting stuck after completion of request next() method is used & it is the parameter which we have given in the middleware app.use().
    next();
});

// Middleware to parse Current Date.
app.use((req, res, next) => {
  req.currentDate = new Date();
  next();
});

app.get("/", (req, res) => {
  console.log(req.currentDate);
  res.send("Hello World!");
});

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(req.body.number);
  const square = body.number * body.number;
  res.status(200).json({ square });
  // res.send("POST METHOD IS WORKING!");
});

app.post("/user/:id", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    res.status(200);
  res.send("POST METHOD IS WORKING!");
});

app.put("/", (req, res) => {
  res.send("PUT METHOD IS WORKING!");
});

app.patch("/", (req, res) => {
  res.send("PATCH METHOD IS WORKING!");
});

app.delete("/", (req, res) => {
  res.send("DELETE METHOD IS WORKING!");
});

app.head("/", (req, res) => {
  res.send("HEAD METHOD IS WORKING FINE!");
});

app.listen(8080, () => {
  console.log("App is listening at Port: 8080");
});

// These 5 Methods are used for splitting the url into multiple segments so as to perform different operations with the help of different methods.
// These methods also defines the actions the client performs.

// GET METHOD: To get some data from the server.
// POST METHOD: To send some data to the server.
// PUT METHOD:
// DELETE METHOD: To delete some data from the database.
// PATCH METHOD: To update some the data & the database.
// HEAD METHOD:

// THUNDER CLIENT IS A VSCODE EXTENSION Which mimics the client.

// There are Three Types of Dependencies:
// 1. Application Dependency: express
// 2. Development Dependency: nodemon
// 3. Global Dependency: It means that the package is available globally and can be used in every project which will be created in future.
// We mostly install global package as a development package.

// The Body of the request is the data the client is sending.
