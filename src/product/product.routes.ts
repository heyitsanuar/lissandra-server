import express, { Request, Response } from 'express';
import { ProductType } from './product.type';
import { getProducts, saveProduct, updateProduct, deleteProduct } from './product.controller';
import { sanitizeObject } from '../app/utils/sanitize.util';

export const ProductRoutes = express.Router();

ProductRoutes.get(
    '/products',
    async (req: Request, res: Response): Promise<Response> => {
        try {
            const { code, data } = await getProducts();
            console.log(req);

            return res.status(code).send({ data });
        } catch ({ code, message }) {
            return res.status(code).send({ message });
        }
    },
);

ProductRoutes.post(
    '/products',
    async (req: Request, res: Response): Promise<Response> => {
        const product: ProductType = sanitizeObject(req.body, req);

        console.log(product);

        try {
            const { code, data } = await saveProduct(product);

            return res.status(code).send({ data });
        } catch ({ code, message }) {
            return res.status(code).send({ message });
        }
    },
);

ProductRoutes.patch('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const product = req.body;

    try {
        const { code, data } = await updateProduct(product, productId);

        return res.status(code).send({ data });
    } catch ({ code, message }) {
        return res.status(code).send({ message });
    }
});

ProductRoutes.delete('/products/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const { code, data } = await deleteProduct(productId);

        return res.status(code).send({ data });
    } catch ({ code, message }) {
        return res.status(code).send({ message });
    }
});
