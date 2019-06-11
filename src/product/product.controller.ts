import { ProductModel } from './product.model';
import { IRequestResponse } from './../app/interfaces/request.interface';

type Product = {
    name: string;
    description: string;
    cost: string;
    category: string;
    type: string;
    sale: boolean;
};

export const getProducts = (): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        ProductModel.find((error, foundProducts) => {
            if (error) return reject({ code: 500, message: 'Error when searching for products on server.' });
            if (!foundProducts) return reject({ code: 404, message: 'Products not found.' });

            return resolve({ code: 200, data: foundProducts });
        });
    });
};

export const saveProduct = (product: Product): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        const { name, description, cost, category, type } = product;

        if (!name || !description || !cost || !category || !type)
            return reject({ code: 200, message: 'Please fill in all the fields.' });

        const newProduct = new ProductModel(product);

        newProduct.save((error, savedProduct) => {
            if (error) return reject({ code: 500, message: 'Error when saving product on server.' });

            return resolve({ code: 200, data: savedProduct });
        });
    });
};

export const updateProduct = (modifiedProduct: Product, productId: string): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        ProductModel.findOneAndUpdate({ _id: productId }, modifiedProduct, { new: true }, (error, updatedProduct) => {
            if (error) return reject({ code: 500, message: 'Error when saving product on server.' });
            if (!updatedProduct) return reject({ code: 404, message: 'Product not found.' });

            return resolve({ code: 200, data: updatedProduct });
        });
    });
};

export const deleteProduct = (productId: string): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        ProductModel.findOneAndRemove({ _id: productId }, (error, removedProduct) => {
            if (error) return reject({ code: 500, message: 'Error when removing product on server.' });
            if (!removedProduct) return reject({ code: 404, message: 'Product not found.' });

            return resolve({ code: 200, data: [] });
        });
    });
};
