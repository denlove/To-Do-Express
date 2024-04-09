import { Application } from 'express'
import Logger from './Logger/Logger'
import bodyParser from 'body-parser'
import { BOOTING_HTTP_LOG } from '../utils/mock'

class Http {
    public static mount(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: BOOTING_HTTP_LOG })

        _express.use(bodyParser.json())
        _express.use(bodyParser.urlencoded({ extended: false }))

        return _express
    }
}

export default Http
