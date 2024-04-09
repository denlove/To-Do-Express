import { Application } from 'express'
import Http from './Http'

class RootMiddleware {
    public mount(_express: Application): Application {
        _express = Http.mount(_express)

        return _express
    }
}

export default new RootMiddleware()
