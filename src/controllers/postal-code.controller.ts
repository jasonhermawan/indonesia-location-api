import { NextFunction, Request, Response } from 'express';
import { getPostalCodeService } from '../services/postalCode/postal-code.service';

export const getPostalCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getPostalCodeService(req.query);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};