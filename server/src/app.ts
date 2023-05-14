import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import postsRouter from './routes/posts';


const app: Application = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
