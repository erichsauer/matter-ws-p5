const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('matter-ws-p5 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
