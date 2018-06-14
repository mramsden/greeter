const request = require('supertest')
const app = require('./server')

describe('GET /hello', () => {
  it('greets an anonymous user', async () => {
    const response = await request(app.callback()).get('/hello')

    expect(response.type).toBe('text/plain')
    expect(response.text).toBe('Hello, World!')
  })

  it('greets a specific user', async () => {
    const response = await request(app.callback()).get('/hello/Tester')

    expect(response.type).toBe('text/plain')
    expect(response.text).toBe('Hello, Tester!')
  })
})
