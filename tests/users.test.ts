// const request = require('supertest');
import request from 'supertest';
import server from '../src/app';
import { db } from '../src/app';

describe('api users...', () => {
  afterAll(() => {
    server.close();
    db.desconectarDB();
  });

  it('GET all users', async () => {
    const res = await request(server).get('/api/v1/users');
    expect(res.statusCode).toEqual(200);
  });
});
