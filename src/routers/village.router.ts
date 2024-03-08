import { Router } from 'express';
import { getVillageController } from '../controllers/village.controller';

const villageRouter = Router();

villageRouter.get('/', getVillageController);

export { villageRouter };
