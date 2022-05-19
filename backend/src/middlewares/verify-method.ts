import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import logger from './logger';

const verifyMethod = (req: Request, _res: Response, next: NextFunction) => {
  // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.
  const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (!allowedMethods.includes(req.method)) {
    next(createHttpError(createHttpError(405, `${req.method} not allowed.`)));
  }

  logger.info(`Allowe method: ${req.method}`);

  next();
};

export default verifyMethod;
