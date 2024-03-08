import { NextFunction, Request, Response } from 'express';
import { getCityService } from '../services/city/city.service';

export const getCityController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getCityService(req.query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
