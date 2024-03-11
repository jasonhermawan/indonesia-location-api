import { Router } from 'express';
import { getPostalCodeController } from '../controllers/postal-code.controller';

const postalCodeRouter = Router();

postalCodeRouter.get('/', getPostalCodeController);

export { postalCodeRouter };