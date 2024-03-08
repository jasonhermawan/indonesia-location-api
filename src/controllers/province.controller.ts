import { NextFunction, Request, Response } from 'express';
import { getProvinceService } from '../services/province/province.service';

export const getProvinceController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getProvinceService(req.query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
