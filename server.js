import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = 'mongodb+srv://zkaren01:6fvRk6J4HreZzdhB@cluster0.vadh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
|| 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
// app.get('/hello', (req, res) => {res.send('Hello World!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);