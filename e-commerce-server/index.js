import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import cors from 'cors';

import watchRoutes from './routes/watches.js'

const app = express();
const CONNECTION_URL = 'mongodb+srv://DheryaProjApp:72HzTgzCKqmMBvRx@cluster0.nbn83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

app.use('/watches', watchRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Server running")))
    .catch((error) => console.log(error.message));

