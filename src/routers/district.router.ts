import { Router } from 'express';
import { getDistrictController } from '../controllers/district.controller';

const districtRouter = Router();

districtRouter.get('/', getDistrictController);

export { districtRouter };
