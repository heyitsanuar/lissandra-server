import express, { Request, Response } from 'express';
import { ProductType } from './product.type';
import { getProducts, saveProduct, updateProduct, deleteProduct } from './product.controller';
import { sanitizeBody } from '../app/utils/sanitize.util';

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
    '/products', async (req: Request, res: Response): Promise<Response> => {
        const product: ProductType = sanitizeBody(req);

        try {
            const { code, data } = await saveProduct(product);

            return res.status(code).send({ data });
        } catch ({ code, message }) {
            return res.status(code).send({ message });
        }
    },
);

ProductRoutes.patch('/products/:productId', async (req, res): Promise<Response> => {
    const productId = (req as any).sanitize(req.params.id);
    const product = sanitizeBody(req);

    try {
        const { code, data } = await updateProduct(product, productId);

        return res.status(code).send({ data });
    } catch ({ code, message }) {
        return res.status(code).send({ message });
    }
});

ProductRoutes.delete('/products/:productId', async (req, res) => {
    const productId = (req as any).sanitize(req.params.id);

    try {
        const { code, data } = await deleteProduct(productId);

        return res.status(code).send({ data });
    } catch ({ code, message }) {
        return res.status(code).send({ message });
    }
});
