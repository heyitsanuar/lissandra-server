import { IRequestResponse } from '../app/interfaces/request.interface';

export const getBag = (): IRequestResponse => {
    return { code: 200, data: 'Bag endpoint get' };
};
