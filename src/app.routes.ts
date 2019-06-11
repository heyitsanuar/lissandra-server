import express, { Response } from 'express';

export const AppRoutes = express.Router();

AppRoutes.use(
    '/',
    (req, res): Response => {
        return res.send('Endpoint working.');
    },
);
