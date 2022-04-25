
import express from 'express';
import config from 'config';
import connect from './utils/connect'
import logger from './utils/logger'
import routes from './routes'

const port = config.get<number>("PORT")
const app = express();

app.listen(port, async () => {
    console.log('App is running ...');
    await connect();
});