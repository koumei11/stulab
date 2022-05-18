import { ApiServer } from '../api/api-server';
import { logError } from '../middlewares/error-handler';

const server = new ApiServer();
server.start();

process.on('unhandledRejection', error => {
  throw error;
});

process.on('uncaughtException', (error) => {
  logError(error);
  process.exit(1);
});