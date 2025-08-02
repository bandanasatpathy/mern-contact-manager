require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000; 
const IP = process.env.IP || '127.0.0.1';

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
require("./db/db");

// Routes
const apiRouter = require("./routes/contact.route");
app.use("/api", apiRouter);  

// Create server
const server = http.createServer(app);  

server.listen(port, () => {
    console.log(`contact form listening at http://${IP}:${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use`);
        process.exit(1);
    } else {
        throw err;
    }
});
