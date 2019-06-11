import express, { Response } from 'express';
import { getBag } from './bag.controller';

export const BagRoutes = express.Router();

BagRoutes.get(
    '/bags/:id',
    async (req, res): Promise<Response> => {
        const { id } = req.params;

        try {
            const { code, data } = await getBag(id);

            return res.status(code).send({ data });
        } catch ({ code, message }) {
            return res.status(code).send({ message });
        }
    },
);

BagRoutes.post('/bags', async (req, res) => {
    return res.status(200).send({ data: 'Bag endpoint post.' });
});

BagRoutes.patch('/bags/:id', async (req, res) => {
    const { id } = req.params;

    try {
    } catch (error) {}
});

BagRoutes.delete('/bags/:id', async (req, res) => {
    const { id } = req.params;

    try {
    } catch (error) {}
});
