import { Router } from 'express';
import { getCityController } from '../controllers/city.controller';

const cityRouter = Router();

cityRouter.get('/', getCityController);

export { cityRouter };
