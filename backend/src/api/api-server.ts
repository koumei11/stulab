import express from 'express';
import http from 'http';
import { PORT } from '../config';
import healthRouter from '../handlers/health';
import { errorHandler } from '../middlewares/error-handler';
import verifyMethod from '../middlewares/verify-method';
import httpLogger from '../middlewares/http-logger';
import logger from '../middlewares/logger';

export class ApiServer {
  private port: number;
  private server: http.Server;

  constructor(port?: number) {
    this.port = port || PORT;
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(httpLogger);

    app.use(verifyMethod);
    app.use('/api/v1', healthRouter);

    app.use(errorHandler);

    this.server = http.createServer(app);
  }

  start() {
    this.server.listen(this.port);
    logger.info(`App start on Port ${this.port}`);
  }

  stop() {
    this.server.close();
  }

  getServer() {
    return process.env.NODE_ENV === 'test' ? this.server : undefined;
  }
};