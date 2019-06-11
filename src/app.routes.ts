import express from 'express';
import { BagRoutes } from './bag/bag.routes';

export const AppRoutes = express.Router();

AppRoutes.use(BagRoutes);
