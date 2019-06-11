import { Request } from 'express';

export const sanitizeBody = (req: Request): any => {
    return Object.values(req.body).forEach(value => {
        return (req as any).sanitize(value);
    });
};
