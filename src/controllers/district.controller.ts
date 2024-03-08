import { NextFunction, Request, Response } from 'express';
import { getDistrictService } from '../services/district/district.service';

export const getDistrictController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getDistrictService(req.query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
