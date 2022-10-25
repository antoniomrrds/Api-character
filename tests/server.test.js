const supertest = require('supertest')
const app = require('../src/app');
const request = supertest(app)
describe('server',()=>{
  it('should be return 200 if server is running',()=>{
    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
  })
})
