import { Router } from 'express';
import { catergoriesRoutes } from './catergories.routes';
import { specificationRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', catergoriesRoutes);
router.use('/specification', specificationRoutes);

export { router };
