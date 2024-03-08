import { Router } from 'express';
import { getProvinceController } from '../controllers/province.controller';

const provinceRouter = Router();

provinceRouter.get('/', getProvinceController);

export { provinceRouter };
