import 'colors';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import config from './config/config.js';
import db from "./models";
import dbSync from './dbSync';
import path from 'path';


if (process.env.NODE_ENV !== "production") {
    dbSync.run(db);
}

let app = express();
app.server = http.createServer(app);

// serve public folder
app.use(express.static('../build'));

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api router
api(app);

// all other routes go to the build folder
app.use('/*', (req, res) => {
    res.sendFile(path.resolve(paths.appBuild, 'index.html'));
});

// start server
const PORT = process.env.PORT || config.port;
app.server.listen(PORT);

console.log(`Started on port ${PORT}`.blue);

export default app;
