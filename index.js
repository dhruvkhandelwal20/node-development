// Printing Hello World to kick-off things!
console.log("Hello World!");

// Using File System Module of Node Js.

// Importing the FS Module
const fs = require('fs');
fs.writeFile('./newFile', 'This is a Sample Text Document.', 'utf-8', (err) => {
    // The three parameters used in this method are: the fileName, content to be present in the file and the encoding mechanism.
    // Additional parameter is the callback function of error.
    if(err){
        console.log(err);
    }
    console.log("File Created Successfully!");
});

// Creating Server using the Http Module

// Importing the Http Module.
const http = require('http');
const server = http.createServer((req, res) => {
    // Default Path of URL i.e. 127.0.0.1:8080 (localhost).
         // console.log(req.url);
        // res.end("Hello World!");

// Configuring paths of the Request in the URL.
// This is known as Routing.
// The checking of paths of the URL in our server is known as Routing.
    if(req.url === "/user"){
        res.end("I am a User.");
    }
    if(req.url === "/login"){
        res.end("Login Please!");
    }
    else{
        res.end("Hello World!");
    }
});

server.listen(8080, () => {
    console.log("Server is listening at Port: 8080");
});

// To Manage the N Number of Routes in a large server we use a Library called Express.js.

// Express is a Node.js web application framework. It is a Fast, Reliable, unopinionated, minimalist web framework for Node.js.
// It helps us to implement our server in an easy way. It provides scalability.

// NPM: NODE PACKAGE MANAGER: IT CONTAINS THIRD PARTY PACKAGES DEVELOPED BY THE DEVELOPERS ACROSS THE GLOBE.
// We can install express using npm. Command: npm install express