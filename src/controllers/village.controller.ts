import { NextFunction, Request, Response } from 'express';
import { getVillageService } from '../services/village/village.service';

export const getVillageController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getVillageService(req.query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
