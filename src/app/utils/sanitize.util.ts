import { Request } from 'express';

export const sanitizeObject = (obj: any, req: Request): any => {
    console.log(obj);
    return Object.values(obj).forEach(value => {
        return (req as any).sanitize(value);
    });
};
