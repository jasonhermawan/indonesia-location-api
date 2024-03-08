import { Router } from 'express';
import { provinceRouter } from './routers/province.router';
import { cityRouter } from './routers/city.router';
import { districtRouter } from './routers/district.router';
import { villageRouter } from './routers/village.router';

const router = Router();

router.use('/province', provinceRouter);
router.use('/city', cityRouter);
router.use('/district', districtRouter);
router.use('/village', villageRouter);

export default router;
