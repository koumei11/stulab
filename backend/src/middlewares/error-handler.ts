import { ErrorRequestHandler } from 'express';
import logger from './logger';

const logError = (err: Error) => {
  logger.error(err.message, err.stack);
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status((err.statusCode as number) || 500).send(err.message);
};

export { logError, errorHandler };
