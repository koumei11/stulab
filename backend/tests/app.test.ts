import supertest from 'supertest';
import { ApiServer } from '../src/api/api-server';

const app = new ApiServer();

const api = supertest(app.getServer());

describe('Health check', () => {
  test('Do health check', async () => {
    const response = await api.get('/api/v1/health');

    expect(response.body.data).toBe('OK');
  });
});