import request from 'supertest'
import Express from '../src/providers/Express'

describe('App testing', () => {
    it('should response GET method', async () => {
        const res = await request(Express.express).get('/')
        expect(res.status).toEqual(200)
        expect(res.headers['content-type']).toMatch(/text\/plain/)
        expect(res.headers['confirm-test']).toMatch(/confirm/)
        expect(res.text).toEqual('Hello, World!')
    })
})
