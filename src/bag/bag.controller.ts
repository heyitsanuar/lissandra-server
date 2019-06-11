import { BagModel } from './bag.model';
import { IRequestResponse } from '../app/interfaces/request.interface';

export const getBag = (userId: string): Promise<IRequestResponse> => {
    return new Promise((resolve, reject) => {
        BagModel.findOne({ userId })
            .populate('products')
            .exec((error, foundBag) => {
                if (error) return reject({ code: 500, message: 'Error when searching for bag on server.' });
                if (!foundBag) return reject({ code: 404, message: 'Bag not found.' });

                return resolve({ code: 200, data: foundBag });
            });
    });
};
