import { Request } from 'express';
export interface IRequestResponse {
    code: number;
    data?: object;
    message?: string;
}
