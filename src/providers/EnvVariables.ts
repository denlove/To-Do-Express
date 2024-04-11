import { Application, Express } from 'express'
import dotenv from 'dotenv'
import path from 'path'

class EnvVariables {
    public static vars() {
        dotenv.config({ path: path.join(__dirname, '../../.env') })
        const { port = 3000, dbName = 'defaultName', username, password } = process.env

        return { port, dbName, username, password }
    }

    public static appLocals(_express: Application): Application {
        _express.locals.app = this.vars()
        return _express
    }
}

export default EnvVariables
