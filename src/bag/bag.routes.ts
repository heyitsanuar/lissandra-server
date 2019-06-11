import express, { Response } from 'express';
import { getBag } from './bag.controller';

export const BagRoutes = express.Router();

BagRoutes.get(
    '/bags',
    async (req, res): Promise<Response> => {
        try {
            const response = await getBag();

            return res.status(response.code).send({ data: response.data });
        } catch ({ code, message }) {
            return res.status(code).send({ message });
        }
    },
);

BagRoutes.post('/bags', async (req, res) => {
    return res.status(200).send({ data: 'Bag endpoint post.' });
});

BagRoutes.patch('/bags', async (req, res) => {
    return res.status(200).send({ data: 'Bag endpoint patch.' });
});

BagRoutes.delete('/bags', async (req, res) => {
    return res.status(200).send({ data: 'Bag endpoint delete.' });
});
