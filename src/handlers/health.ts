import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/health', (_req, res) => {
  res.json({
    status: 200,
    data: 'OK',
  });
});

export default healthRouter;