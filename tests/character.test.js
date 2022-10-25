const supertest = require('supertest');
const app = require('../src/app');
const request = supertest(app);

describe('Character', () => {
  it('should find all characters', async () => {
    const result = await request.get('/character');
    expect(result.statusCode).toEqual(200);
  });
  it('teste de criaçao',async() =>{
    const result = await request.post('/character');
  })
});
