import express from 'express';
import bodyParser from 'body-parser';
import { AppRoutes } from './app.routes';

export const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

// Setting CORS and HEADERS permits
App.use((req, res, next): void => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Cookies, Accept, Access-Control-Allow-Request-Method',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PATCH, DELETE');
    next();
});

App.use('/api', AppRoutes);

// Handling 404 requests
App.use((req, res): void => {
    res.send({ message: 'Endpoint not found.' });
});
