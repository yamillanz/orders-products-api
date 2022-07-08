// const request = require('supertest');
import request from 'supertest';
import server from '../src/app';
import { db } from '../src/app';
const URL_API = '/api/v1/orders';
const mockDataOrder = {
  idUser: 1,
  orderNumber: 122,
  dateTime: '2022-04-07',
  providerName: 'mock data',
  totalValue: 1000.0,
  status: 0,
};

describe('api users...', () => {
  afterAll(() => {
    server.close();
    db.desconectarDB();
  });

  it('GET all orders', async () => {
    const res = await request(server).get(URL_API);
    expect(res.statusCode).toEqual(200);
  });
  it('POST a Order', async () => {
    const res = await request(server).post(URL_API).send(mockDataOrder);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('order');
  });
});
