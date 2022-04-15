import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json());

require(helloController)(app);
require(userController)(app);
require(tuitsController)(app);
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);