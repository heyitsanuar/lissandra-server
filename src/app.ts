import express, { Response, Request } from 'express';

const app = express();

app.get(
    '/',
    (req: Request, res: Response): Response => {
        return res.send('Hola');
    },
);

app.listen(5000, () => console.log('Server running'));
